import React from "react";

const CardAluno = ({ nome, status }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>{nome}</h3>
      <p
        style={{
          color: status === "Aprovado" ? "blue" : "red",
          fontWeight: "bold",
        }}
      >
        {status}
      </p>
    </div>
  );
};

export default CardAluno;
