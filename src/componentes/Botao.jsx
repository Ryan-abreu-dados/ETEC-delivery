function Botao({ children, tipo = 'button', classe = '', aoClicar, ...propriedades }) {
  return (
    <button className={classe} type={tipo} onClick={aoClicar} {...propriedades}>
      {children}
    </button>
  )
}

export default Botao
