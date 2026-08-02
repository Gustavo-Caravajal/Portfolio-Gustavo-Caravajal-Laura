import './App.css'
import { About } from './components/About/About'
import { Education } from './components/Education/Education'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { Projects } from './components/Projects/Projects'

function App() {
  

  return (
    <div className='container'>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default App
