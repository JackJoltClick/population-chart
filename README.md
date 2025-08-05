# Population Racing Bar Chart

An interactive visualization tracking population changes across the world's most populous countries from 2015 to 2023.

## Features

- Racing bar chart animation with smooth transitions
- Year navigation controls (prev/next, dropdown, play/pause)
- Displays top 15 countries by population
- Consistent color mapping for each country
- Responsive design

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- SCSS Modules
- Jest & React Testing Library
- Storybook

## Project Structure

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── PopulationChart/
│   ├── SimpleBarChart/
│   └── YearControls/
├── data/
│   └── populationData.ts
└── utils/
    ├── chart.ts
    └── colors.ts
```

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run storybook` - Component development

## Implementation

The chart uses CSS transitions for smooth animations between data changes. State management handles year selection and auto-play functionality. Each component is tested with Jest and documented in Storybook.

Data structure:
```typescript
interface CountryPopulation {
  country: string;
  code: string;
  population: number;
  year: number;
}
```