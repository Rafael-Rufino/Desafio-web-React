import React from "react";
import "../styles/dashboard.scss";
import logo from "../assets/images/logo-sdie.svg";
import leftBack from "../assets/images/icons/back.svg";
import Materia from "../components/Materia";
import {
  FaChalkboard,
  FaClipboardList,
  FaRegCommentAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export const Dashboard: React.FC = () => {
  var color = {
    color: "red",
  };
  return (
    <div id="area-restrita-estudante">
      <div id="container">
        <header className="page-header">
          <div className="top-bar-container">
            <a href="/">
              <img src={leftBack} alt="Voltar" />
            </a>
            <img src={logo} alt="SDIE" />
          </div>
          <div className="header-content">
            <div className="conteudo-top">
              <strong>Área disponivel ao Estudante</strong>
            </div>
          </div>
        </header>
        <div className="containerDashboard">
          <aside>
            <div className="perfil">
              <img
                src="https://avatars.githubusercontent.com/u/45695326?v=4"
                alt="foto"
              />
              <p>Rafael Rufino dos Santos</p>
            </div>
            <ul>
              <li>
                <a className="active" href="/">
                  <FaChalkboard size="20" />
                  Materias
                </a>
              </li>
              <li>
                <a href="/">
                  <FaClipboardList size="20" />
                  Lista de Presença
                </a>
              </li>
              <li>
                <a href="/">
                  <FaChalkboard size="20" /> Aulas
                </a>
              </li>
              <li>
                <a href="/">
                  <FaRegCommentAlt size="20" />
                  Mural de Dúvidas
                </a>
              </li>
              <li>
                <a href="/" style={color}>
                  <FaSignOutAlt size="20" color="red" />
                  Logouf
                </a>
              </li>
            </ul>
          </aside>
          <main>
            <div className="title">
              <h1>Materias disponiveis</h1>
            </div>

            <div className="materia-unica">
              <Materia
                name="Felipe Silva"
                profisao="Professor"
                materia="Quimica"
                descricao="Aula de Físico-Química. Utiliza a Quimica para a
                  construção de suas bases teóricas"
                nameButton="Acessar"
              />
              <Materia
                name="Diego fernandes"
                profisao="Professor"
                materia="Matematica"
                descricao="Aula de Matematica. Utiliza a matemática para a
                  construção de suas bases teóricas"
                nameButton="Acessar"
              />
              <Materia
                name="Luz alberto"
                profisao="Professor"
                materia="Português"
                descricao="Aula de Português. Utiliza a Português para a
                  construção de suas bases teóricas"
                nameButton="Acessar"
              />
              <Materia
                name="Daniel Bruno"
                profisao="Professor"
                materia="Biologia"
                descricao="Aula de Biologia. Utiliza a Biologia para a
                  construção de suas bases teóricas"
                nameButton="Acessar"
              />
              <Materia
                name="Daniel Bruno"
                profisao="Professor"
                materia="Biologia"
                descricao="Aula de Biologia. Utiliza a Biologia para a
                  construção de suas bases teóricas"
                nameButton="Acessar"
              />
              <Materia
                name="Daniel Bruno"
                profisao="Professor"
                materia="Biologia"
                descricao="Aula de Biologia. Utiliza a Biologia para a
                  construção de suas bases teóricas"
                nameButton="Acessar"
              />
            </div>
          </main>
        </div>
        <footer>
          <p>Copyright - Todos os direitos reservados</p>
        </footer>
      </div>
    </div>
  );
};
