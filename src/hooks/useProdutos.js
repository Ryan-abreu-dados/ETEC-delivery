import { useEffect, useState } from 'react'
import { listarProdutos } from '../services/produtoService'

export function useProdutos(idLoja) {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    let ativo = true
    listarProdutos(idLoja)
      .then((lista) => ativo && setProdutos(lista))
      .catch((error) => ativo && setErro(error.message))
      .finally(() => ativo && setCarregando(false))
    return () => { ativo = false }
  }, [idLoja])

  return { produtos, carregando, erro }
}