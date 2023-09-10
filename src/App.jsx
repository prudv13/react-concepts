import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routing/Home'
import About from './routing/About'
import Contact from './routing/Contact'
import Navbar from './routing/Navbar'
import User from './routing/User'
import Orders from './routing/Orders'
import Profile from './routing/Profile'
import ContextApi from './context-api/ContextApi'
import ShowHide from './custom-hooks/ShowHide'
import ReactQuery from './react-query/ReactQuery'
import SuperHeroes from './react-query/SuperHeroes'
import RQSuperHeroes from './react-query/RQSuperHeroes'
import UseState from './useState/UseState'
import UseReducer from './useReducer/UseReducer'
import UseEffect02 from './useEffect/UseEffect02'
import UseRef from './useRef/UseRef'
import LayoutEffect from './useLayoutEffect/LayoutEffect'
import ImperativeHandle from './useImperativeHandle/ImperativeHandle'

function App() {

  return (
    <div>
      {/*<UseEffect01 /> */}
      {/*<Fakestore /> */}

      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />}>
          <Route path='usestate' element={<UseState />} />
          <Route path='useeffect' element={<UseEffect02 />} />
          <Route path='usereducer' element={<UseReducer />} />
          <Route path='contextapi' element={<ContextApi />} />
          <Route path='useref' element={<UseRef />} />
          <Route path='uselayouteffect' element={<LayoutEffect />} />
          <Route path='useimperativehandle' element={<ImperativeHandle />} />
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
