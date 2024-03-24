import Navbar from "./Navbar";
import "./NavbarHome.css";

function Home(){
    return(
<div className="main">

        <div className="txt">
            <h3>Bem-vindo ao nosso site!</h3>
            <h5>Olá! Aqui você encontrará uma jornada fascinante pelos Objetivos de Desenvolvimento Sustentável, um conjunto de metas ambiciosas que visam transformar nosso mundo até 2030. Prepare-se para explorar cada um dos 17 ODS, descobrindo como eles abordam os desafios mais prementes do nosso tempo, desde a erradicação da pobreza até a promoção da igualdade de gênero.</h5>

    </div>
        <div className="div">
            <Navbar />
    </div>
</div>
    )
} export default Home;