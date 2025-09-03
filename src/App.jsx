import { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import './App.css'
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import {languages} from '../languages'
import { nanoid } from 'nanoid'

export default function App() {
// State values
  const [ currentWord, setCurrentWord ] = useState("react")
  const [ guessedLetters, setGuessedLetters ] = useState([])

  // Derived Values
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

  console.log(wrongGuessCount)

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

  console.log(chipElements)
  // console.log(guessedLetters)

  const letterArray = currentWord.split("")
  const letterElements = letterArray.map(letter => {
      const isGuessed = guessedLetters.includes(letter)
      return (<Word
        key={nanoid()}
        letter={letter}
        isGuessed={isGuessed}/>)}
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
    classes={classes}/>)}
)

  return (
    <>
      <main>
        <Header />
        <Status />
        <section className="chips-container">
          {chipElements}
        </section>
        <section className="letter-section">
          {letterElements}
        </section>
        <section className="keyboard-section">
          {keyboardElements}
        </section>
        <button className="new-game">New Game</button>
      </main>
    </>
  )
}


