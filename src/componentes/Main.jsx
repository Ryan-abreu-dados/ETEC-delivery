import '../styles/Main.css'
import Produto from './produto'
import imagemPizza from '../assets/pizza-pao-manteiga.png'
import imagemCha from '../assets/cha.jpg'

function Main() {
  function adicionarProduto() {
    alert('Adicionado ao carrinho')
  }

  return (
    <main>
      <h1>Bem vindo!</h1>
      <p className="subtitulo">Escolha seu pedido</p>
      <section className="produtos">
        <Produto
          nome="Pizza de pão com manteiga da Etec"
          valor="55"
          imagem={imagemPizza}
          aoClicar={adicionarProduto}
        />
        <Produto
          nome="Chá da Etec"
          valor="7,50"
          imagem={imagemCha}
          aoClicar={adicionarProduto}
        />
      </section>
    </main>
  )
}

export default Main
