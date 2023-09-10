import { Route, Routes } from 'react-router-dom'
import './App.css'
//import UseEffect01 from './useEffect/UseEffect01'
//import Fakestore from './useEffect-API/Fakestore'
import Home from './routing/Home'
import About from './routing/About'
import Contact from './routing/Contact'
import Navbar from './routing/Navbar'
import User from './routing/User'
import Orders from './routing/Orders'
import Profile from './routing/Profile'
import ContextApi from './context-api/ContextApi'
import Timer from './useRef/Timer'
import ShowHide from './custom-hooks/ShowHide'
import ReactQuery from './react-query/ReactQuery'
import SuperHeroes from './react-query/SuperHeroes'
import RQSuperHeroes from './react-query/RQSuperHeroes'
import UseState from './useState/UseState'
import UseReducer from './useReducer/UseReducer'

function App() {

  return (
    <div>
      {/*<UseEffect01 /> */}
      {/*<Fakestore /> */}

      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />}>
          <Route path='usestate' element={<UseState />} />
          <Route path='usereducer' element={<UseReducer />} />
          <Route path='contextapi' element={<ContextApi />} />
          <Route path='useref' element={<Timer />} />
          <Route path='customhooks' element={<ShowHide />} />
          <Route path='reactquery' element={<ReactQuery />}>
            <Route path='superheroes' element={<SuperHeroes/>} />
            <Route path='rqsuperheroes' element={<RQSuperHeroes />} />
          </Route>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user' element={<User />} >
          <Route path='orders' element={<Orders />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
