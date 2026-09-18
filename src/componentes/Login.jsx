import { useState } from 'react'
import Botao from './Botao'
import imagemPizza from '../assets/pizza-pao-manteiga.png'
import { useUsuario } from '../hooks/useUsuario'

function Login({ aoEntrar }) {
  const usuario = useUsuario()
  const [mostrarSenha, setMostrarSenha] = useState(false)

  function enviarFormulario(event) {
    event.preventDefault()
    usuario.entrar().then((resultado) => resultado && aoEntrar(resultado, usuario.email))
  }

  return (
    <main className="login-page">
      <div className="login-panel">
        <div className="brand-mark" aria-hidden="true">K</div>
        <p className="eyebrow">entregas que fazem bem</p>
        <h1>karma<span>.</span></h1>
        <p className="login-copy">Seu pedido favorito, a um clique de distancia.</p>
        <form onSubmit={enviarFormulario} className="login-form">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="voce@email.com" value={usuario.email} onChange={(event) => usuario.setEmail(event.target.value)} required />
          <label htmlFor="senha">Senha</label>
          <div className="password-field">
            <input id="senha" type={mostrarSenha ? 'text' : 'password'} placeholder="Digite sua senha" value={usuario.senha} onChange={(event) => usuario.setSenha(event.target.value)} required />
            <Botao classe="text-button" aoClicar={() => setMostrarSenha(!mostrarSenha)}>{mostrarSenha ? 'ocultar' : 'mostrar'}</Botao>
          </div>
          <Botao tipo="submit" classe="primary-button">Entrar <span aria-hidden="true">-&gt;</span></Botao>
          {usuario.erro && <p className="form-error" role="alert">{usuario.erro}</p>}
        </form>
        <Botao classe="forgot-button">Esqueci minha senha</Botao>
        <p className="login-footer">Ainda nao tem uma conta? <strong>Cadastre-se</strong></p>
      </div>
      <div className="login-art" aria-label="Imagem de uma pizza da Karma">
        <img src={imagemPizza} alt="Pizza" />
        <div className="art-caption"><span>feito com</span><strong>boas intencoes.</strong></div>
      </div>
    </main>
  )
}

export default Login
