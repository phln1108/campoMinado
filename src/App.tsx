import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { About } from './Components/About/About'
// import styles from "./App.module.css"

import './global.css'

function App() {
  const [showAbout, setShowAbout] = useState(false)

  function handleAbout() {
    setShowAbout(!showAbout)
  }

  return (
    <>
      <Header about={handleAbout} />
      {showAbout &&
        <About toClose={handleAbout} />
      }
    </>
  )
}

export default App
