import { useState } from 'react'

export function useCarrinho() {
  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(produto, quantidade = 1) {
    setCarrinho((atual) => {
      const existente = atual.find((item) => item.id === produto.id)
      if (existente) return atual.map((item) => item.id === produto.id ? { ...item, quantidade: item.quantidade + quantidade } : item)
      return [...atual, { ...produto, quantidade }]
    })
  }

  function removerDoCarrinho(id) {
    setCarrinho((atual) => atual.filter((item) => item.id !== id))
  }

  return { carrinho, adicionarAoCarrinho, removerDoCarrinho }
}