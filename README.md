# Dice Game
A fun and interactive dice game built with Next.js, TypeScript, and Material UI where players can bet on dice roll outcomes.
## Overview
This application is a simple gambling game where players can:
- Choose whether a random number will be over or under a specific threshold
- Adjust the threshold using a slider (range 1-100)
- See their win/loss results in real-time
- View a history of their previous games

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) 15.4.4
- **UI Library**: [Material UI](https://mui.com/) 7.2.0
- **Styling**: [Emotion](https://emotion.sh/) 11.14.0
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) 2.8.2
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.x

## Features
- **Interactive Game Interface**: User-friendly interface with slider control for setting thresholds
- **Real-time Feedback**: Immediate visual feedback on win/loss outcomes
- **Game History**: Table displaying the last 10 game results
- **Responsive Design**: Optimized for various screen sizes

## Getting Started
### Prerequisites
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation
``` bash
# Clone the repository
git clone https://github.com/yourusername/dice.git
cd dice

# Install dependencies
npm install
# or
yarn install
```
### Running the Development Server
``` bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.
### Building for Production
``` bash
npm run build
# or
yarn build
```
## How to Play
1. Select "Under" or "Over" to predict where the random number will fall
2. Adjust the threshold value using the slider
3. Click the "Play" button to roll the dice
4. See if you won or lost
5. View your game history in the table below

## Project Structure
- `/app`: Next.js app directory containing pages and global configurations
- `/components`: Reusable UI components including the game interface
- `/store`: Redux store configuration and state management logic

## License
This project is licensed under the MIT License - see the LICENSE file for details.
