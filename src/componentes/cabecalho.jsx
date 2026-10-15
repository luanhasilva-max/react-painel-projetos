function Cabecalho() {
  return (
    <header className="cabecalho">
      <div>
        <span className="etiqueta">painel de controle</span>
        <h1>Painel de Projetos</h1>
        <p>Organize e Acompanhe os Projetos da Turma.</p>
      </div>

      <a className="botao-adicionar" href="#projetos">
        ver projetos
      </a>
    </header>
  );
}

export default Cabecalho;
