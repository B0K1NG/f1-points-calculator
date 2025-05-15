# F1 Points Calculator

A modern React application for calculating Formula 1 championship points based on race positions.

![F1 Points Calculator](/src/assets/preview-1.png)
![F1 Points Calculator](/src/assets/preview-2.png)

## Features

- Calculate total championship points based on Formula 1's official points system
- Add multiple races to calculate season totals
- View detailed breakdown of points earned per race
- Modern, responsive UI built with React and SCSS
- Fully typed with TypeScript

## Points System

The calculator uses the current Formula 1 points system:

| Position | Points |
|----------|--------|
| 1st | 25 |
| 2nd | 18 |
| 3rd | 15 |
| 4th | 12 |
| 5th | 10 |
| 6th | 8 |
| 7th | 6 |
| 8th | 4 |
| 9th | 2 |
| 10th | 1 |

*Note: This calculator does not currently factor in fastest lap points or sprint race points.*
## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/f1-points-calculator.git
cd f1-points-calculator
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Usage

1. Enter the finishing position (1-20) for each race
2. Add more races using the "Add Race" button
3. Remove races using the "Remove" button next to each race input
4. Click "Calculate Points" to see your total championship points and breakdown

## Technologies Used

- React 19
- TypeScript
- Vite
- SCSS for styling
- Modern ES6+ JavaScript

## Project Structure

```
src/
├── components/           # React components
│   ├── PointsForm.tsx    # Form for race inputs
│   ├── PointsResult.tsx  # Results display
│   └── RaceInput.tsx     # Individual race input
├── styles/               # SCSS styles
├── types/                # TypeScript type definitions
├── utils/                
│   └── calculatePoints.ts # Points calculation logic
└── App.tsx               # Main application component
```