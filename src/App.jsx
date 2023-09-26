import './App.css'
import Login from '../components/Login'
import SignUp from '../components/Signup'
import Home from '../components/Home'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Routes>
              <Route path='/Login' element = {<Login/>}/> 
              <Route path='/Signup' element = {<SignUp/>}/> 
              <Route path='/'element = {<Home/> }/>  
          </Routes>
        </div>
      </BrowserRouter>
      </>
  )
}

export default App
