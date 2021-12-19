import React from "react";
import "./styles.scss";

interface Props {
  name: string;
  profisao: string;
  materia: string;
  descricao: string;
  nameButton: string;
}
const Materia: React.FC<Props> = ({
  name,
  profisao,
  materia,
  descricao,
  nameButton,
}) => {
  return (
    <div className="materia">
      <img
        src="https://avatars.githubusercontent.com/u/45695326?v=4"
        alt={name}
      />
      <h2>{name}</h2>

      <h3>{profisao}</h3>
      <p>{materia}</p>
      <div className="conteudo">
        <p>{descricao}</p>
      </div>

      <button>{nameButton}</button>
    </div>
  );
};

export default Materia;
