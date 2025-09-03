import { useState } from 'react'
import { clsx } from 'clsx'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import './App.css'
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import Loss from './components/Loss'
import {languages} from '../languages'
import { nanoid } from 'nanoid'
import { getFarewellText, getWord  } from '../utils'

export default function App() {
// State values
// Lazy state initialisation for currentWord
  const [ currentWord, setCurrentWord ] = useState(() => getWord())
  const [ guessedLetters, setGuessedLetters ] = useState([])
  console.log(currentWord)

  // Derived Values
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

  const gameLost = wrongGuessCount >= languages.length - 1
  const gameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const gameOver = gameLost || gameWon

  let lastGuessedIncorrect;
  if (guessedLetters.length === 0) {
    lastGuessedIncorrect = false
  }
  else {
    lastGuessedIncorrect = !currentWord.includes(guessedLetters[guessedLetters.length -1])
  }
  const lastGuessed = guessedLetters[guessedLetters.length -1]

  // Static Values

  const chipElements = languages.map((language) => {
    const lost = wrongGuessCount > languages.indexOf(language)
    const classes = clsx(
      'chips',
      lost && 'lost'
    )
  return <Chips
  key={language.name}
  classes={classes}
  name={language.name}
  bgColor={language.backgroundColor}
  color={language.color}/>})

  // console.log(chipElements)
  // console.log(guessedLetters)

  const letterArray = currentWord.split("")
  const letterElements = letterArray.map(letter => {
      const isGuessed = guessedLetters.includes(letter)
      const classes = clsx("letter",
      gameWon ? 'letter-won' :
      gameLost && !guessedLetters.includes(letter) ? 'letter-lost' : "");
      return (<Word
        key={nanoid()}
        classes={classes}
        letter={letter}
        isGuessed={isGuessed}
        gameOver={gameOver}/>)}
    )

  function letterGuessed(letter) {
    setGuessedLetters((prevLetters) =>
      // Avoid duplicates by checking if the letter is already in the array first
      prevLetters.includes(letter) ?
      prevLetters :
      [...prevLetters, letter]
    )}
    // Another way of doing this:
    // const letterSet = new Set(prevLetters)
    // letterSet.add(value)
    // return Array.from(letterSet)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = currentWord.includes(letter)
    const classes = clsx(
      'keyboard',
      isGuessed && isCorrect ? "correct" :
      isGuessed && !isCorrect ? "incorrect" :
      "not-guessed"
    )
    return (
      <Keyboard
      key={letter}
      letter={letter}
      letterGuessed={letterGuessed}
      classes={classes}
      gameOver={gameOver}/>)}
  )
  let farewellMessage;
  if (wrongGuessCount >= 1) {
    farewellMessage = getFarewellText(languages[wrongGuessCount-1].name)
  }
  // console.log(farewellMessage)
  // console.log(wrongGuessCount)

  const statusClasses = clsx(
    'status-container',
    gameOver ?
      gameWon ? 'status-container-won' :
      gameLost && 'status-container-lost'
    : lastGuessedIncorrect && "farewell"
  )

  function resetGame() {
    setCurrentWord(getWord())
    setGuessedLetters([])
  }

  const { width, height } = useWindowSize()

  return (
    <>
      <main>
        {gameWon && <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={1000}
        />}
        <Header />
        <Status
        classes={statusClasses}
        gameWon={gameWon}
        gameLost={gameLost}
        gameOver={gameOver}
        lastGuessedIncorrect={lastGuessedIncorrect}
        farewellMessage={farewellMessage}
        />
        <section className="chips-container">
          {chipElements}
        </section>
        <section className="letter-section">
          {letterElements}
        </section>
        {/* Combined visually hidden aria-live region for status updates */}
        <section className="sr-only" aria-live="polite" role="status">
          <p>
            {currentWord.includes(lastGuessed) ? `Correct! The letter ${lastGuessed} is in the word.` : `Sorry, the letter ${lastGuessed} is not in the word.`}
            You have {(languages.length -1) - wrongGuessCount} guesses left!
          </p>
          <p>
            Current word: {currentWord.split("").map((letter) => guessedLetters.includes(letter) ? letter + ".": "blank.").join(" ")}
          </p>
        </section>
        <section className="keyboard-section">
          {keyboardElements}
        </section>
        { gameOver && <button className="new-game" onClick={resetGame}>New Game</button>}
        {gameLost &&
        <Loss />}
      </main>
    </>
  )
}


