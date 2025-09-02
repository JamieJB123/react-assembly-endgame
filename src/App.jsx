import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import {languages} from '../languages'
import { nanoid } from 'nanoid'

export default function App() {

  const chipElements = languages.map((language) => <Chips key={language.name} name={language.name} bgColor={language.backgroundColor} color={language.color}/>)

  const [ currentWord, setCurrentWord ] = useState("react")

  const letterArray = currentWord.split("")
  const letterElements = letterArray.map(letter =>
      <Word key={nanoid()} letter={letter}/>
    )

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const keyboardElements = alphabet.split("").map((letter) => <Keyboard key={nanoid()} letter={letter}/>)

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
      </main>
    </>
  )
}


