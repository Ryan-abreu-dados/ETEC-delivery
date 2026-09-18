import { useState } from 'react'
import Botao from './Botao'
import imagemPizza from '../assets/pizza-pao-manteiga.png'
import imagemCha from '../assets/cha.jpg'
import { useCarrinho } from '../hooks/useCarrinho'
import { useProdutos } from '../hooks/useProdutos'

const produtosLocais = [
  { id: 'pizza', nome: 'Pizza de pao com manteiga', descricao: 'Quentinha, cremosa e feita na hora.', preco: 55, imagem: imagemPizza },
  { id: 'cha', nome: 'Cha gelado da casa', descricao: 'Refrescante e perfeito para acompanhar.', preco: 7.5, imagem: imagemCha },
]

function Inicio({ email, aoSair }) {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const usuario = JSON.parse(sessionStorage.getItem('usuario') || '{}')
  const idLoja = usuario.id_loja || usuario.loja_id || usuario.loja?.id_loja || import.meta.env.VITE_LOJA_ID
  const { produtos: produtosApi, carregando, erro } = useProdutos(idLoja)
  const { carrinho, adicionarAoCarrinho, removerDoCarrinho } = useCarrinho()
  const produtos = produtosApi.length ? produtosApi : produtosLocais
  const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0)
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0)

  function comprar(produto) {
    adicionarAoCarrinho(produto)
    setMensagem(`${produto.nome} foi adicionado ao carrinho.`)
    window.setTimeout(() => setMensagem(''), 2400)
  }

  return <div className="store-page">
    <header className="store-header"><a className="store-logo" href="#inicio">Delivery</a><nav aria-label="Navegacao principal"><a href="#inicio">Home</a><a href="#cardapio">Cardapio</a><a href="/carrinho">Carrinho</a><a href="/dashboard">Dashboard</a></nav><div className="header-actions"><Botao classe="cart-button" aoClicar={() => setCarrinhoAberto(true)}>Carrinho <b>{totalItens}</b></Botao><Botao classe="profile-button" aoClicar={aoSair}>Sair</Botao></div></header>
    <main><section className="store-hero" id="inicio"><div><p className="eyebrow">oi, {email.split('@')[0] || 'cliente'}</p><h1>Comida boa.<br /><em>karma</em> melhor.</h1><p>Escolhas simples, ingredientes de verdade<br />e um pouco de carinho em cada pedido.</p><a className="hero-link" href="#cardapio">Ver cardapio <span aria-hidden="true">-&gt;</span></a></div><div className="hero-stamp">feito<br /><strong>para<br />voce</strong></div></section>
      <section className="menu-section" id="cardapio"><div className="section-heading"><div><p className="eyebrow">escolha seu momento</p><h2>Nosso cardapio</h2></div><span>{carregando ? 'carregando...' : `${produtos.length} itens disponiveis`}</span></div>{erro && <p className="api-warning">Catalogo online indisponivel. Exibindo o cardapio de exemplo.</p>}<div className="product-grid">{produtos.map((produto) => <article className="product-card" key={produto.id}><div className="product-image"><img src={produto.imagem} alt={produto.nome} /><span className="product-tag">favorito</span></div><div className="product-info"><div><h3>{produto.nome}</h3><p>{produto.descricao}</p></div><strong className="price">R$ {produto.preco.toFixed(2).replace('.', ',')}</strong></div><div className="product-footer"><Botao classe="buy-button" aoClicar={() => comprar(produto)}>Adicionar</Botao></div></article>)}</div></section></main>
    {carrinhoAberto && <aside className="cart-drawer"><Botao classe="close-button" aoClicar={() => setCarrinhoAberto(false)}>Fechar</Botao><h2>Seu pedido</h2>{carrinho.length === 0 ? <p>Seu carrinho esta vazio.</p> : <>{carrinho.map((item) => <div className="cart-item" key={item.id}><span>{item.nome} x {item.quantidade}</span><Botao aoClicar={() => removerDoCarrinho(item.id)}>remover</Botao></div>)}<strong>Total: R$ {total.toFixed(2).replace('.', ',')}</strong><Botao classe="buy-button">Finalizar pedido</Botao></>}</aside>}{mensagem && <div className="toast" role="status">{mensagem}</div>}
  </div>
}

export default Inicio
