const apiUrl = import.meta.env.VITE_API_URL

export async function fazerLogin(email, senha) {
  const resposta = await fetch(`${apiUrl}/usuario/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ usuario_email: email, usuario_senha: senha }),
  })

  const resultado = await resposta.json()
  if (!resposta.ok) throw new Error(resultado.error || 'E-mail ou senha inválidos.')
  return resultado
}