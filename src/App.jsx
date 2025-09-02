import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Status from './components/Status'
import Chips from './components/Chips'
import {languages} from '../languages'
import { nanoid } from 'nanoid'

export default function App() {

  const chipElements = languages.map((language) => <Chips key={nanoid()} name={language.name} bgColor={language.backgroundColor} color={language.color}/>)

  return (
    <>
      <main>
        <Header />
        <Status />
        <section className="chips-container">
          {chipElements}
        </section>
      </main>
    </>
  )
}


