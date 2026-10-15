import { useState } from "react";
import Cabecalho from "./componentes/cabecalho";
import Rodape from "./componentes/rodape";
import Resumo from "./componentes/resumo";
import Secao from "./componentes/secao";
import ProjetoCard from "./componentes/projeto-card";
import "./app.css";

function App() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: "sistema de estoque",
      descricao: "controle de produtos.",
      responsavel: "ana",
      status: "Concluído",
      tecnologias: ["React", "Node.js"],
      destaque: true,
      nota: 9
    },
    {
      id: 2,
      titulo: "loja virtual",
      descricao: "venda de produtos online.",
      responsavel: "carlos",
      status: "Em desenvolvimento",
      tecnologias: ["HTML", "CSS"],
      destaque: true,
      nota: 8
    },
    {
      id: 3,
      titulo: "aplicativo de tarefas",
      descricao: "organização de tarefas.",
      responsavel: "mariana",
      status: "Concluído",
      tecnologias: ["React", "CSS"],
      destaque: false,
      nota: 7
    },
    {
      id: 4,
      titulo: "sistema escolar",
      descricao: "cadastro de alunos.",
      responsavel: "pedro",
      status: "Em desenvolvimento",
      tecnologias: ["JavaScript", "MySQL"],
      destaque: false,
      nota: 6
    },
    {
      id: 5,
      titulo: "portal de notícias",
      descricao: "publicação de notícias.",
      responsavel: "juliana",
      status: "Planejamento",
      tecnologias: ["HTML", "CSS"],
      destaque: false,
      nota: 5
    },
    {
      id: 6,
      titulo: "controle financeiro",
      descricao: "controle de receitas e despesas.",
      responsavel: "lucas",
      status: "Concluído",
      tecnologias: ["React", "Node.js"],
      destaque: true,
      nota: 10
    }
  ]);

  const total = projetos.length;

  const concluidos = projetos.filter(
    (p) => p.status === "Concluído"
  ).length;

  const emDesenvolvimento = projetos.filter(
    (p) => p.status === "Em desenvolvimento"
  ).length;

  function adicionarProjeto() {
    const novoProjeto = {
      id: Date.now(),
      titulo: "novo projeto",
      descricao: "projeto da turma.",
      responsavel: "equipe",
      status: "Planejamento",
      tecnologias: ["React"],
      destaque: false,
      nota: 0
    };

    setProjetos([...projetos, novoProjeto]);
  }

  return (
    <main className="painel">
      <Cabecalho />

      <Resumo
        total={total}
        concluidos={concluidos}
        emDesenvolvimento={emDesenvolvimento}
      />

      <Secao titulo="projetos da turma">
        <div className="grade-projetos" id="projetos">
          {projetos.map((p) => (
            <ProjetoCard key={p.id} {...p} />
          ))}
        </div>
      </Secao>

      <div className="area-adicionar">
        <button
          className="botao-adicionar"
          onClick={adicionarProjeto}
        >
          adicionar projeto
        </button>
      </div>

      <Rodape />
    </main>
  );
}

export default App;