import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Homepage from '../Pages/Homepage/Homepage'
import SignInPage from '../Pages/SignInPage/SignInPage'
import UserPage from '../Pages/UserPage/UserPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'

import './App.css'

function App() {
  const isLogged = useSelector((state) => state.user.isLogged)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={isLogged ? <UserPage /> : <SignInPage />} />
        <Route path="/profile" element={isLogged ? <UserPage /> : <SignInPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
