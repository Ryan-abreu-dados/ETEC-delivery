import { useState } from 'react'
import '../styles/produto.css'

function Produto({ nome, valor, imagem, aoClicar }) {
    const [quantidade, setQuantidade] = useState(1)

    return (
        <article className="produto">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <div>R$ {valor}</div>
            <div>
                <button
                    type="button"
                    onClick={() => setQuantidade(quantidade + 1)}
                >
                    +
                </button>
                <span>{quantidade}</span>
                <button
                    type="button"
                    onClick={() => setQuantidade(quantidade - 1)}
                    disabled={quantidade === 1}
                >
                    -
                </button>
            </div>
            <button type="button" onClick={aoClicar}>Comprar</button>
        </article>
    )
}

export default Produto

