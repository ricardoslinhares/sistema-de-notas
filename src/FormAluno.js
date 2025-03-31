import React, { useState } from "react";

const FormAluno = ({ adicionarAluno }) => {
  const [nome, setNome] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || nota1 === "" || nota2 === "") return;

    const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    const status = media >= 7 ? "Aprovado" : "Reprovado";

    adicionarAluno({ nome, status });
    setNome("");
    setNota1("");
    setNota2("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nome do aluno"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nota 1"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nota 2"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        required
      />
      <button type="submit">Criar</button>
    </form>
  );
};

export default FormAluno;
