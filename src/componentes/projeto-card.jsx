import StatusBadge from "./statusbadge";
import TecnologiaTag from "./tecnologiatag";

function ProjetoCard({
  titulo,
  descricao,
  responsavel,
  status,
  tecnologias,
  destaque,
  nota
}) {
  return (
    <article className={`projeto-card ${destaque ? "destaque" : ""}`}>
      {destaque && <strong>projeto em destaque</strong>}

      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>responsável: {responsavel}</p>

      <StatusBadge status={status} />

      <div className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>

      <p>nota: {nota}/10</p>

      {nota >= 7 ? (
        <span className="aprovado">projeto aprovado</span>
      ) : (
        <span className="pendente">em avaliação</span>
      )}
    </article>
  );
}

export default ProjetoCard;