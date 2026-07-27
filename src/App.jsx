import { useState } from 'react'
import './App.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Cli from './components/windows/Cli'
import Github from './components/windows/Github'
import MacWindow from './components/windows/MacWindow'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'

function App() {

  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Nav />
      {windowState.github && < Github windowName="github" setWindowState={setWindowState} />}
      {windowState.note && < Note windowName="note" setWindowState={setWindowState} />}
      {windowState.resume && < Resume windowName="resume" setWindowState={setWindowState} />}
      {windowState.cli && < Cli windowName="cli" setWindowState={setWindowState} />}
      <Dock windowState={windowState} setWindowState={setWindowState} />
    </main>
  )
}

export default App
