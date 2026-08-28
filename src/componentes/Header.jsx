import '../styles/Header.css'

function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Navegação principal">
        <ul className="site-nav">
          <li><a href="#inicio">Home</a></li>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#carrinho">Carrinho</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
