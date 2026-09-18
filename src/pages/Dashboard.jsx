import { Link } from 'react-router-dom'

function Dashboard() {
  return <main className="dashboard-page"><p className="eyebrow">área da loja</p><h1>Dashboard</h1><p>Gerencie seus produtos e acompanhe os pedidos por aqui.</p><Link className="hero-link" to="/">Voltar para o cardápio -&gt;</Link></main>
}

export default Dashboard