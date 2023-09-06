import { Route, Routes } from 'react-router-dom'
import './App.css'
//import UseEffect01 from './useEffect/UseEffect01'
//import Fakestore from './useEffect-API/Fakestore'
import Home from './routing/Home'
import About from './routing/About'
import Contact from './routing/Contact'
import Navbar from './routing/Navbar'

function App() {

  return (
    <div>
      {/*<UseEffect01 /> */}
      {/*<Fakestore /> */}

      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
