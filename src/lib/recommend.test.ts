import { describe, it, expect } from 'vitest';
import {
  dotProduct,
  magnitude,
  cosineSimilarity,
  buildUserTasteProfile,
  getTopRecommendations,
  generateRecommendationExplanation,
  getTasteDimensionPercentages,
} from './recommend';
import { BookVector, BOOKS_CATALOGUE } from '../data/books';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';

describe('Recommendation Engine Mathematics', () => {
  it('correctly calculates dot product of two vectors', () => {
    const v1: BookVector = { pacing: 1, tone: 0.5, setting: -0.5, characterFocus: 1 };
    const v2: BookVector = { pacing: 0.5, tone: 1, setting: 1, characterFocus: 0 };
    // 1*0.5 + 0.5*1 + (-0.5)*1 + 1*0 = 0.5 + 0.5 - 0.5 + 0 = 0.5
    expect(dotProduct(v1, v2)).toBeCloseTo(0.5, 4);
  });

  it('correctly calculates magnitude of a vector', () => {
    const v: BookVector = { pacing: 3, tone: 4, setting: 0, characterFocus: 0 };
    expect(magnitude(v)).toBeCloseTo(5, 4);
  });

  it('returns 1 for identical direction vectors and -1 for opposite vectors', () => {
    const v1: BookVector = { pacing: 0.6, tone: 0.8, setting: 0, characterFocus: 0 };
    const v2: BookVector = { pacing: 0.6, tone: 0.8, setting: 0, characterFocus: 0 };
    const vOpposite: BookVector = { pacing: -0.6, tone: -0.8, setting: 0, characterFocus: 0 };

    expect(cosineSimilarity(v1, v2)).toBeCloseTo(1, 4);
    expect(cosineSimilarity(v1, vOpposite)).toBeCloseTo(-1, 4);
  });

  it('handles zero magnitude gracefully', () => {
    const vZero: BookVector = { pacing: 0, tone: 0, setting: 0, characterFocus: 0 };
    const vNormal: BookVector = { pacing: 0.5, tone: 0.5, setting: 0.5, characterFocus: 0.5 };
    expect(cosineSimilarity(vZero, vNormal)).toBe(0);
  });
});

describe('User Profile Aggregation', () => {
  it('aggregates selected quiz options and clamps vectors', () => {
    const optionA = QUIZ_QUESTIONS[0].options[0]; // Fast-paced
    const optionB = QUIZ_QUESTIONS[1].options[0]; // Morally grey

    const profile = buildUserTasteProfile([optionA, optionB]);
    expect(profile.vector.pacing).toBeGreaterThan(0);
    expect(profile.selectedTropes.length).toBeGreaterThan(0);
    expect(profile.selectedTags.length).toBeGreaterThan(0);
  });

  it('translates vector into percentage breakdown', () => {
    const v: BookVector = { pacing: 0, tone: 1, setting: -1, characterFocus: 0.5 };
    const breakdown = getTasteDimensionPercentages(v);

    expect(breakdown[0].percentage).toBe(50); // neutral pacing
    expect(breakdown[1].percentage).toBe(100); // max warm tone
    expect(breakdown[2].percentage).toBe(0); // max realistic setting
  });
});

describe('Recommendation Ranking and Divergence', () => {
  it('recommends dark/academic/slow books when user chooses atmospheric & dark options', () => {
    // Select dark, slow, campus, morally grey options
    const darkChoices = [
      QUIZ_QUESTIONS[0].options[1], // Slow story about family secret
      QUIZ_QUESTIONS[1].options[0], // Morally grey schemers
      QUIZ_QUESTIONS[2].options[0], // Real world / colleges / quiet cafes
      QUIZ_QUESTIONS[3].options[1], // Gothic, eerie, psychological
      QUIZ_QUESTIONS[4].options[0], // Enemies with electrifying banter
    ];

    const profile = buildUserTasteProfile(darkChoices);
    const topRecs = getTopRecommendations(profile, BOOKS_CATALOGUE, 3);

    expect(topRecs.length).toBe(3);
    const topBookIds = topRecs.map((r) => r.book.id);
    // Secret History or Deadly Education or Six of Crows should be ranked at or near top
    expect(
      topBookIds.includes('secret-history') ||
        topBookIds.includes('deadly-education') ||
        topBookIds.includes('six-of-crows')
    ).toBe(true);

    expect(topRecs[0].matchPercentage).toBeGreaterThanOrEqual(75);
    expect(topRecs[0].explanation).toContain('Recommended because');
  });

  it('recommends upbeat sci-fi / found-family books when user chooses fast, sci-fi and warm options', () => {
    const upbeatSciFiChoices = [
      QUIZ_QUESTIONS[0].options[0], // Breakneck chase
      QUIZ_QUESTIONS[1].options[1], // Ragtag bunch of misfits
      QUIZ_QUESTIONS[2].options[2], // Deep space vessels
      QUIZ_QUESTIONS[3].options[0], // Warm, hopeful, comforting
      QUIZ_QUESTIONS[4].options[1], // Quiet comrades who walk into fire
    ];

    const profile = buildUserTasteProfile(upbeatSciFiChoices);
    const topRecs = getTopRecommendations(profile, BOOKS_CATALOGUE, 3);

    const topBookIds = topRecs.map((r) => r.book.id);
    // Project Hail Mary or All Systems Red or House in Cerulean Sea should be at top
    expect(
      topBookIds.includes('project-hail-mary') ||
        topBookIds.includes('all-systems-red') ||
        topBookIds.includes('house-cerulean-sea')
    ).toBe(true);
  });

  it('generates non-empty plain-English explanations with matching tags', () => {
    const sampleChoices = [QUIZ_QUESTIONS[0].options[0], QUIZ_QUESTIONS[1].options[1]];
    const profile = buildUserTasteProfile(sampleChoices);
    const book = BOOKS_CATALOGUE[1]; // Project Hail Mary

    const explanationObj = generateRecommendationExplanation(profile, book);
    expect(explanationObj.explanation).toBeTruthy();
    expect(explanationObj.explanation.length).toBeGreaterThan(15);
  });
});
