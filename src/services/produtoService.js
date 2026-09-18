const apiUrl = import.meta.env.VITE_API_URL

export async function listarProdutos(idLoja) {
  const resposta = await fetch(`${apiUrl}/lojas/${idLoja}/produtos`)
  const resultado = await resposta.json()
  if (!resposta.ok) throw new Error(resultado.error || 'Não foi possível carregar os produtos.')

  const lista = resultado.data || resultado
  return lista.map((produto) => ({
    id: produto.id_produto || produto.id,
    nome: produto.produto_nome || produto.nome,
    descricao: produto.produto_descricao || 'Feito na hora para você.',
    preco: Number(produto.produto_valor || produto.preco || 0),
    imagem: produto.produto_imagem || '/images.jpg',
  }))
}