import './App.css'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'

function App() {
  

  return (
    <div className='container'>
      <Header/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
