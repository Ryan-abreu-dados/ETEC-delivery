import { useState } from 'react'
import { fazerLogin } from '../services/usuarioService'

export function useUsuario() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function entrar() {
    setErro('')
    setCarregando(true)
    try {
      return await fazerLogin(email, senha)
    } catch (error) {
      setErro(error.message)
      return null
    } finally {
      setCarregando(false)
    }
  }

  return { email, senha, erro, carregando, setEmail, setSenha, entrar }
}