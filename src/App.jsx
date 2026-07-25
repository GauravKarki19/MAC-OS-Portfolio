import './App.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import MacWindow from './components/windows/MacWindow'
import Note from './components/windows/Note'

function App() {

  return (
    <main>
      <Nav/>
      <Github/>
      <Note/>
      <Dock/>
    </main>
  )
}

export default App
