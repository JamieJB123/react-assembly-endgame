# React Assembly EndGame

![Website Mockups](/src/assets/all-devices-black.png)

Final capstone project of [Scrimba](https://scrimba.com/home) React course.

Assembly Endgame is a [React](https://react.dev/) + [Vite](https://vite.dev/) project I built as part of my continuous learning and development in React.
It’s a doctored version of the classic Hangman game — but with a programming twist.

Instead of drawing a stick figure, each wrong guess eliminates a programming language. The last one left standing is Assembly — the “endgame” of coding survival.

## Deployed Site:

[Assembly Endgame](https://jamiejb123.github.io/react-assembly-endgame/)

**Deployment Steps:**
- Run terminal command: `npm install gh-pages --save-dev`
- In vite.config.js:
    Add `base: "/repo-name"`
- In package.json:
    Add `"deploy": "vite build && gh-pages -d dist"`
- Run terminal command: `npm run deploy`

This last command calls the deploy settings, enables vite to bundle the app ready for deployment (dist/ folder), creates and pushes the contents to gh-pages branch, which you then use for deployment through the usual steps on GitHub Pages.

## Game Features:

- **Guess letters via:**
    - On-screen keyboard buttons
    - Or by pressing keys on your physical keyboard
- **Visual feedback:**
    - Correct guesses: keyboard button turns green, letter revealed in the word
    - Incorrect guesses: keyboard button turns red, a programming language logo gets crossed out, and a “farewell” status message is shown
- **Winning condition:**
    - Guess all letters before losing all languages
    - Word letters turn green
    - Confetti falls across the screen 🎉
    - Inputs are disabled
    - “New Game” button appears with auto-focus
- **Losing condition:**
    - Run out of languages
    - Remaining hidden letters appear in red
    - Ash falls across the screen 🌫️
    - Inputs are disabled
    - “New Game” button appears with auto-focus
- **Responsive design** → Playable on desktop or tablet

## Built with:
- [React](https://react.dev/) with [Vite](https://vite.dev/)

## Learnings:

This project helped me strengthen my understanding of core React concepts, including:

- JSX and React elements
- Reusable components
- Props
- Data-driven UI
- Event listeners (buttons + keyboard events)
- State and state management
- Conditional rendering
- Side effects with useEffect
- Working with refs

## Acknowledgments:
- [React](https://react.dev/) + [Vite](https://vite.dev/) for development guidance
- [Scrimba](https://scrimba.com/home) free React course
- [react-confetti](https://www.npmjs.com/package/react-confetti) + [tsparticles](https://www.npmjs.com/package/tsparticles) for win/loss effects
