import React from "react";
import CardAluno from "./CardAluno";

function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <CardAluno nome="João da Silva" status="Aprovado" />
      <CardAluno nome="Maria Oliveira" status="Reprovado" />
    </div>
  );
}

export default App;
