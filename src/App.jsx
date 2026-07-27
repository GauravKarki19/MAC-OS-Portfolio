import './App.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Cli from './components/windows/Cli'
import Github from './components/windows/Github'
import MacWindow from './components/windows/MacWindow'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'

function App() {

  

  return (
    <main>
      <Nav/>
      <Github/>
      <Note/>
      <Resume/>
      <Cli/>
      <Dock/>
    </main>
  )
}

export default App
