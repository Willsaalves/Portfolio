import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import githubIconBlack from '../../assets/github2.svg';
import whatsapp from '../../assets/whatsapp.svg';
import Hello from '../../assets/Hello.gif';
import { useTheme } from '../Theme/ThemeProvider';

export function Hero() {

  const { isDarkMode } = useTheme();
  const githubIconSource = isDarkMode ? githubIconBlack : githubIcon;

  return (
    <Container id="home" className={isDarkMode ? 'dark' : 'light'}>
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Olá <img src={Hello} alt="Hello" width="20px"/>,  eu sou</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Willian de Sá Alves</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">2.5 anos de experiência com desenvolvimento</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contato</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/willian-de-sa/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/willsaalves/" target="_blank" rel="noreferrer">
              <img src={githubIconSource} alt="GitHub" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5511984163442" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
