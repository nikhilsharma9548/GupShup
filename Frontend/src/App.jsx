import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import RightSideBar from './Components/RightSideBar'
import { useState } from 'react'

const App = () => {
  const [selectedUser, setSelectedUser] = useState(false);
  return (
    <div className="bg-slate-950 text-white md:h-[100dvh] h-[100dvh] overflow-x-hidden">
      <Routes>
        <Route path='/' element = { <Home/> }/>
        <Route path='/login' element = { <Login/> }/>
        <Route path='/profile' element = { <Profile/> }/>
      </Routes>
    </div>
  )
}

export default App