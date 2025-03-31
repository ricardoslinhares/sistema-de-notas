import React, { useState } from "react";
import CardAluno from "./CardAluno";
import FormAluno from "./FormAluno";

function App() {
  const [alunos, setAlunos] = useState([]);

  const adicionarAluno = (aluno) => {
    setAlunos([...alunos, aluno]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sistema de Notas</h1>
      <FormAluno adicionarAluno={adicionarAluno} />
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {alunos.map((aluno, index) => (
          <CardAluno key={index} nome={aluno.nome} status={aluno.status} />
        ))}
      </div>
    </div>
  );
}

export default App;
