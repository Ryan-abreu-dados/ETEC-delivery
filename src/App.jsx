
import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import Dashboard from './pages/Dashboard'

function App() {
  const [estaLogado, setEstaLogado] = useState(false)
  const [email, setEmail] = useState('')

  function entrar(usuario, emailInformado) {
    sessionStorage.setItem('usuario', JSON.stringify(usuario))
    setEmail(emailInformado)
    setEstaLogado(true)
  }

  return <BrowserRouter>
    <Routes>
      <Route path="/login" element={estaLogado ? <Navigate to="/" /> : <Login aoEntrar={entrar} />} />
      <Route path="/dashboard" element={estaLogado ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/carrinho" element={estaLogado ? <Carrinho /> : <Navigate to="/login" />} />
      <Route path="/" element={estaLogado ? <Home email={email} aoSair={() => { sessionStorage.clear(); setEstaLogado(false) }} /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={estaLogado ? '/' : '/login'} />} />
    </Routes>
  </BrowserRouter>
}

export default App
