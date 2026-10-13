# TailorTale — The Right Book, for the Right Reader

> A community-driven, taste-first book recommendation platform that replaces viral trend algorithms with scenario-based taste discovery, explainable recommendations, and trope micro-communities.

Built for college evaluators, faculty, and early young readers (ages 16–30 in India).

---

## 🌟 Key Features

1. **60-Second Scenario Taste Quiz**: Focuses on moods, situations, and reader empathy rather than dry genre checklists.
2. **Explainable Recommendations Engine**: Uses 4D vector cosine similarity across pacing, tone, setting, and protagonist dynamics, paired with trope affinity. Every recommendation includes a plain-English *"Why this book?"* rationale.
3. **Reader DNA Fingerprint**: Interactive SVG radar and dimensional slider charts visualizing individual reading preferences.
4. **Trope-Based Micro-Communities**: Curated, spoiler-free reading rooms clustered around tropes (*Found Family*, *Slow-Burn Mystery*, *Enemies to Lovers*, *Cosy Fantasy*, *Morally Grey Heroes*, *Space Opera*) with interactive join states.
5. **Pure CSS Phone Mockup & Realistic CSS Book Covers**: Zero external cover image dependencies; custom geometric book covers styled with CSS.
6. **Competitive Matrix**: In-depth comparison against Goodreads, StoryGraph, and BookTok across 5 key dimensions with 8 advantage cards.
7. **Transparent Student Pricing**: Free tier vs TailorTale Plus (₹99/month or ₹799/year) with an interactive monthly/yearly billing toggle and a 50% college student discount note.
8. **12-Month Execution Roadmap**: Clear horizontal/vertical timeline across 6 developmental milestones.
9. **College Reader Survey Strip**: Connects to the student reader feedback survey.
10. **Engineering Team Showcase**: Profile cards with initials avatars for the 8 B.Tech student leads from DJ Sanghvi College of Engineering, Mumbai.
11. **Persistent Waitlist**: Client-side form with email validation, reader persona selector, and `localStorage` persistence.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom brand design tokens (`teal`, `yellow`, `navy`, `mint`)
- **Typography**: Fraunces (serif for headings/wordmark) & Inter (sans-serif for body) via Google Fonts
- **Icons**: Lucide React
- **Unit & Integration Testing**: Vitest with `@testing-library/react` and `happy-dom`
- **Data Architecture**: Fully typed static data in `src/data/*.ts`
- **Persistence**: Browser `localStorage` (zero backend dependencies)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20 LTS)
- npm 9+

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Running Unit & Integration Tests
Run the comprehensive Vitest test suite (15 unit and integration tests covering vector math, quiz flows, divergence, and form validation):
```bash
npm test
```

### 4. Production Build & Preview
To create an optimized production build:
```bash
npm run build
```
To preview the production bundle locally:
```bash
npm run preview
```

---

## 🚢 Deployment Guide

### Deploying to Vercel
1. Install the Vercel CLI (or push your repository to GitHub):
   ```bash
   npm i -g vercel
   vercel
   ```
2. Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Deploying to Netlify
1. Connect repository or deploy via Netlify CLI:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=dist
   ```
2. Netlify settings (`netlify.toml` optional):
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

---

## 🎨 Customization Guide

### 1. Where to Edit Colors & Tokens
- **Tailwind tokens**: Edit [tailwind.config.js](tailwind.config.js) under `theme.extend.colors`.
  - Primary Teal: `#19B5A5`
  - Accent Yellow: `#FFD23F`
  - Text & Dark Navy: `#1F2A44`
  - Page Background Mint: `#E6FAF5`
- **Global CSS variables**: Edit [src/index.css](src/index.css) under `:root`.

### 2. Where to Edit the Reader Survey Link
- Edit [src/data/constants.ts](src/data/constants.ts):
  ```typescript
  export const GOOGLE_FORM_SURVEY_URL = 'https://docs.google.com/forms/...';
  ```

### 3. Where to Edit Books Catalogue
- Edit [src/data/books.ts](src/data/books.ts) to add or adjust titles, vector scores (`pacing`, `tone`, `setting`, `characterFocus`), tropes, and CSS cover color gradients.

### 4. Where to Edit Quiz Questions
- Edit [src/data/quizQuestions.ts](src/data/quizQuestions.ts) to modify scenario questions, option labels, and dimensional vector impacts.

### 5. Where to Edit Trope Micro-Communities
- Edit [src/data/communities.ts](src/data/communities.ts) to adjust trope descriptions, member metrics, or sample book titles.

### 6. Where to Edit Pricing & Roadmap
- Pricing: [src/data/pricing.ts](src/data/pricing.ts)
- Roadmap milestones: [src/data/roadmap.ts](src/data/roadmap.ts)
- Team members: [src/data/team.ts](src/data/team.ts)

---

## 📝 List of Open TODO Placeholders

The following placeholders are explicitly tagged with `TODO` comments in the codebase and can be updated when deploying to production:

1. **Google Form Survey URL**:
   - Location: `src/data/constants.ts` (Line 4)
   - Comment: `// TODO: Replace with official Google Form link once user survey goes live`
2. **Social Media Links (Twitter, Instagram, LinkedIn, GitHub)**:
   - Location: `src/data/constants.ts` (Lines 7–12)
   - Comment: `// TODO: Replace with production community / social links`
3. **Contact Mailbox**:
   - Location: `src/data/constants.ts` (Line 14)
   - Comment: `// TODO: Update official mailbox`

---

## 👥 Credits

Crafted by B.Tech students at **DJ Sanghvi College of Engineering, Mumbai**:
- **Preksha Paldiwal** (Project Lead)
- **Nishika Negandhi** (Technology Lead)
- **Pradnya Bhamre & Sara Vastani** (Product and Design)
- **Priyansh Vaishnav & Riddhima Ranjan** (Marketing and Community)
- **Nitesh Pandey & Om Sawant** (Finance and Operations)
