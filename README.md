# The Almost Final Countdown ⏱️

A React-based timing challenge game where players test their time estimation skills by stopping timers as close to the target time as possible.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Development](#development)
- [Scripts](#scripts)
- [Contributing](#contributing)

## Overview

The Almost Final Countdown is an interactive web application that challenges players to estimate time intervals accurately. Players can set their name and attempt multiple timer challenges with varying difficulty levels. The game calculates scores based on how close players stop the timer to the target time.

## Features

- 🎮 **Multiple Challenge Levels**: Four difficulty levels ranging from 1 second to 15 seconds
- 👤 **Player Customization**: Set and display your player name
- 📊 **Score Calculation**: Real-time score calculation based on timing accuracy
- 🎯 **Visual Feedback**: Animated timer indicators and result modals
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- ⚡ **React Portals**: Modal dialogs rendered using React portals for better UX
- 🔄 **Real-time Updates**: Millisecond-precision timer updates (10ms intervals)

## Technology Stack

- **React 19.0.0** - Modern React with hooks
- **Vite 4.4.5** - Fast build tool and dev server
- **ESLint** - Code linting and quality assurance
- **React DOM** - DOM rendering and portals

## Installation

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm or yarn package manager

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-time-game.git
   cd react-time-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and style:

```bash
npm run lint
```

## How to Play

1. **Set Your Name**: Enter your name in the input field and click "Set Name" to personalize your experience.

2. **Choose a Challenge**: Select from four available challenges:
   - **Easy**: 1 second target
   - **Not easy**: 5 seconds target
   - **Getting tough**: 10 seconds target
   - **Pros only**: 15 seconds target

3. **Start the Timer**: Click the "Start Challenge" button to begin the countdown.

4. **Stop at the Right Time**: Click "Stop Challenge" when you believe the timer is close to the target time.

5. **View Results**: A modal will display:
   - Your score (0-100, based on accuracy)
   - Whether you won or lost (lost if timer reaches zero)
   - The exact time remaining when you stopped

6. **Try Again**: Close the modal and reset to attempt the challenge again or try a different difficulty level.

### Scoring System

- Score is calculated as: `Math.round((1 - remainingTime / targetTime) * 100)`
- Higher scores indicate better timing accuracy
- If the timer reaches zero, you lose the challenge

## Project Structure

```
react-time-game/
├── public/
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg         # React logo
│   ├── components/
│   │   ├── Player.jsx        # Player name input component
│   │   ├── TimerChallenge.jsx # Main timer challenge component
│   │   └── ResultModal.jsx   # Result display modal (uses portals)
│   ├── App.jsx               # Main application component
│   ├── index.css             # Global styles and animations
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

### Component Details

- **Player.jsx**: Manages player name state using React refs and useState
- **TimerChallenge.jsx**: Handles timer logic with useRef for interval management and useState for time tracking
- **ResultModal.jsx**: Uses forwardRef and useImperativeHandle to expose modal control, rendered via React portals

## Development

### Key React Concepts Demonstrated

- **useRef**: Used for accessing DOM elements and storing timer intervals
- **useState**: Manages component state (player name, time remaining)
- **forwardRef**: Allows parent components to access child component methods
- **useImperativeHandle**: Exposes specific methods to parent components via ref
- **React Portals**: Renders modals outside the normal DOM hierarchy for better UX
- **createPortal**: Used to render the result modal in a separate DOM node

### Code Style

The project uses ESLint with React-specific plugins for code quality:
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Ensure all ESLint checks pass
- Test your changes thoroughly
- Update documentation as needed

---

**Enjoy testing your timing skills!** 🎯
