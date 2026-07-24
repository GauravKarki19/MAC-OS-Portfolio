import './App.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import MacWindow from './components/windows/MacWindow'

function App() {

  return (
    <main>
      <Nav/>
      <Github/>
      <Dock/>
    </main>
  )
}

export default App
