function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <section className="resumo">
      <div className="indicador">
        <p>total de projetos</p>
        <strong>{total}</strong>
      </div>

      <div className="indicador">
        <p>concluídos</p>
        <strong>{concluidos}</strong>
      </div>

      <div className="indicador">
        <p>em desenvolvimento</p>
        <strong>{emDesenvolvimento}</strong>
      </div>
    </section>
  );
}

export default Resumo;