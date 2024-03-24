import "./Abtme.css";
import Linkedin from "./icons8-linkedin-48.png";
import github from "./icons8-github-48.png"
import Navbar from "./Navbar";
import "./Navbar.css";

function Abtme() {

    return (
      <div>
<div className="navbar">
        <Navbar />
    </div>
      <div className="sobre-container">
          <h2 className="sobre-title">Sobre Mim</h2>
          <p className="sobre-description">
            Olá, eu sou Arthur Vinicius, tenho 19 anos e atualmente sou um estudante empolgado pelo universo da programação, desenvolvimento, tecnologia e inovação. Nesse momento estou cursando Sistemas para Internet na Universidade Católica de Pernambuco, no turno da manhã e com início em: 03/2023 e término em: 07/2025. Sou um desenvolvedor Back End em formação e com habilidades sólidas em Java com Spring Boot e NodeJS, mas também possuo conhecimentos na parte Full Stack desde Front End à Banco de Dados e Servidores. Além também de versionamento por Git e GitHub. Acredito que nessa longa jornada do sucesso, a criatividade, o aprendizado constante e a colaboração são fundamentais. A criatividade nos impulsiona além do comum, o aprendizado contínuo nos capacita a evoluir constantemente e a colaboração em equipe nos leva mais longe, juntos. São esses pilares que nos guiam na busca por realizações extraordinárias.
          </p>
          <div className="sobre-icons">
            <a href="www.linkedin.com/in/arthur-moraes-830815270" className="sobre-icon-link">
              <img src = {Linkedin} alt = "Icon Linkedin" />
             
            </a>
            <a href="https://github.com/lngg21" className="sobre-icon-link">
            <img src = {github} alt = "Icon Github" />
            
            </a>
          </div>
        </div>
      </div>
      );
    }
    
    export default Abtme;