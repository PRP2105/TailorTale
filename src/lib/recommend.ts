import { Book, BOOKS_CATALOGUE, BookVector } from '../data/books';
import { QuizOption } from '../data/quizQuestions';

export interface UserTasteProfile {
  vector: BookVector;
  selectedTropes: string[];
  selectedTags: string[];
}

export interface RecommendationResult {
  book: Book;
  score: number; // 0 to 1
  matchPercentage: number; // e.g. 96
  explanation: string;
  matchedTropes: string[];
  matchedDimensions: string[];
}

/**
 * Calculates dot product of two 4D vectors
 */
export function dotProduct(a: BookVector, b: BookVector): number {
  return (
    a.pacing * b.pacing +
    a.tone * b.tone +
    a.setting * b.setting +
    a.characterFocus * b.characterFocus
  );
}

/**
 * Calculates Euclidean magnitude of a 4D vector
 */
export function magnitude(v: BookVector): number {
  const sumSquares =
    v.pacing * v.pacing +
    v.tone * v.tone +
    v.setting * v.setting +
    v.characterFocus * v.characterFocus;
  return Math.sqrt(sumSquares);
}

/**
 * Computes standard Cosine Similarity between user vector and book vector.
 * Returns value in range [-1.0, 1.0].
 */
export function cosineSimilarity(a: BookVector, b: BookVector): number {
  const magA = magnitude(a);
  const magB = magnitude(b);

  if (magA === 0 || magB === 0) {
    return 0;
  }

  const rawSim = dotProduct(a, b) / (magA * magB);
  // Guard against slight floating point inaccuracies
  return Math.max(-1, Math.min(1, rawSim));
}

/**
 * Aggregates selected quiz options into a normalized user taste vector and tag sets
 */
export function buildUserTasteProfile(selectedOptions: QuizOption[]): UserTasteProfile {
  const accumulated: BookVector = {
    pacing: 0,
    tone: 0,
    setting: 0,
    characterFocus: 0,
  };

  const tropesSet = new Set<string>();
  const tagsSet = new Set<string>();

  for (const option of selectedOptions) {
    if (option.vectorImpact.pacing !== undefined) accumulated.pacing += option.vectorImpact.pacing;
    if (option.vectorImpact.tone !== undefined) accumulated.tone += option.vectorImpact.tone;
    if (option.vectorImpact.setting !== undefined) accumulated.setting += option.vectorImpact.setting;
    if (option.vectorImpact.characterFocus !== undefined)
      accumulated.characterFocus += option.vectorImpact.characterFocus;

    option.tropes.forEach((t) => tropesSet.add(t));
    option.tags.forEach((tag) => tagsSet.add(tag));
  }

  // Normalize by number of questions to keep range well-behaved
  const count = selectedOptions.length || 1;
  const vector: BookVector = {
    pacing: Math.max(-1, Math.min(1, accumulated.pacing / count)),
    tone: Math.max(-1, Math.min(1, accumulated.tone / count)),
    setting: Math.max(-1, Math.min(1, accumulated.setting / count)),
    characterFocus: Math.max(-1, Math.min(1, accumulated.characterFocus / count)),
  };

  return {
    vector,
    selectedTropes: Array.from(tropesSet),
    selectedTags: Array.from(tagsSet),
  };
}

/**
 * Generates plain-English explanation for why a book was recommended
 */
export function generateRecommendationExplanation(
  userProfile: UserTasteProfile,
  book: Book
): { explanation: string; matchedTropes: string[]; matchedDimensions: string[] } {
  const matchedTropes = book.tropes.filter((trope) =>
    userProfile.selectedTropes.includes(trope)
  );

  const matchedDimensions: string[] = [];
  const u = userProfile.vector;
  const b = book.vector;

  if (u.pacing * b.pacing > 0.15) {
    matchedDimensions.push(u.pacing > 0 ? 'fast, adrenaline-charged pacing' : 'slow, immersive atmosphere');
  }

  if (u.tone * b.tone > 0.15) {
    matchedDimensions.push(u.tone > 0 ? 'warm, comforting emotional tone' : 'dark, morally complex themes');
  }

  if (u.characterFocus * b.characterFocus > 0.15) {
    matchedDimensions.push(u.characterFocus > 0 ? 'deeply developed, flawed characters' : 'clever, puzzle-led plotting');
  }

  if (u.setting * b.setting > 0.15) {
    matchedDimensions.push(u.setting > 0 ? 'rich speculative worldbuilding' : 'grounded, realistic settings');
  }

  const aspects: string[] = [];

  if (matchedTropes.length > 0) {
    aspects.push(`the "${matchedTropes.slice(0, 2).join(' & ')}" dynamic`);
  }

  if (matchedDimensions.length > 0) {
    aspects.push(matchedDimensions[0]);
  }

  if (matchedDimensions.length > 1 && aspects.length < 2) {
    aspects.push(matchedDimensions[1]);
  }

  if (aspects.length === 0) {
    return {
      explanation: `Recommended because you enjoy compelling story craft and balanced character journeys.`,
      matchedTropes,
      matchedDimensions,
    };
  }

  return {
    explanation: `Recommended because you liked ${aspects.join(' and ')}.`,
    matchedTropes,
    matchedDimensions,
  };
}

/**
 * Ranks books based on cosine similarity and trope affinity, returning top N results
 */
export function getTopRecommendations(
  userProfile: UserTasteProfile,
  catalogue: Book[] = BOOKS_CATALOGUE,
  topN: number = 3
): RecommendationResult[] {
  const scored = catalogue.map((book) => {
    const cosSim = cosineSimilarity(userProfile.vector, book.vector);
    // Convert cosine [-1, 1] to base [0, 1]
    const baseScore = (cosSim + 1) / 2;

    // Calculate trope overlap bonus (up to 0.15 bonus)
    const sharedTropes = book.tropes.filter((t) => userProfile.selectedTropes.includes(t));
    const tropeBonus = Math.min(0.15, sharedTropes.length * 0.05);

    const finalScore = Math.min(0.99, Math.max(0.4, baseScore * 0.85 + tropeBonus));
    const matchPercentage = Math.round(finalScore * 100);

    const { explanation, matchedTropes, matchedDimensions } = generateRecommendationExplanation(
      userProfile,
      book
    );

    return {
      book,
      score: finalScore,
      matchPercentage,
      explanation,
      matchedTropes,
      matchedDimensions,
    };
  });

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, topN);
}

/**
 * Maps the 4D taste vector into a 0-100 chart scale for radar or bar visualization
 */
export function getTasteDimensionPercentages(vector: BookVector): {
  dimension: string;
  leftLabel: string;
  rightLabel: string;
  percentage: number; // 0 to 100, where 50 is neutral
  value: number; // -1 to 1
}[] {
  return [
    {
      dimension: 'Pacing',
      leftLabel: 'Atmospheric / Slow',
      rightLabel: 'Fast / Breakneck',
      percentage: Math.round(((vector.pacing + 1) / 2) * 100),
      value: vector.pacing,
    },
    {
      dimension: 'Tone',
      leftLabel: 'Dark & Haunting',
      rightLabel: 'Warm & Cosy',
      percentage: Math.round(((vector.tone + 1) / 2) * 100),
      value: vector.tone,
    },
    {
      dimension: 'Setting',
      leftLabel: 'Real World / Campus',
      rightLabel: 'Fantasy & Sci-Fi',
      percentage: Math.round(((vector.setting + 1) / 2) * 100),
      value: vector.setting,
    },
    {
      dimension: 'Protagonist',
      leftLabel: 'Plot-Driven Underdog',
      rightLabel: 'Morally Grey & Complex',
      percentage: Math.round(((vector.characterFocus + 1) / 2) * 100),
      value: vector.characterFocus,
    },
  ];
}
