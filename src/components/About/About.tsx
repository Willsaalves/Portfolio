import { Container } from "./styles";
import WillianAlves from "../../assets/WillianAlves.jpg";

import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import javaIcon from "../../assets/java-icon.svg"

import ScrollAnimation from "react-animate-on-scroll";



export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Sobre mim</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Willian de Sá, desenvolvedor há 2 anos e meio, focado em backend e explorando o front para me tornar um fullstack developer.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Além do desenvolvimento personalizado, também ofereço serviços de manutenção em computadores, proporcionando uma abordagem personalizada para cada cliente.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          Então, se você precisa de um novo site ou apenas deseja renovar sua presença online atual, ficarei feliz em conversar e ver como posso ajudar. Vamos transformar juntos seus sonhos de site em realidade!!</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Aqui estão minhas principais skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
    
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={WillianAlves} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
