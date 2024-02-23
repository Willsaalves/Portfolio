import React from 'react';
import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedin from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import githubIconBlack from '../../assets/github2.svg'; // Novo ícone do GitHub para o modo escuro
import whatsapp from '../../assets/whatsapp.svg';
import instagramIcon from '../../assets/instagram.svg';
import { useTheme } from '../Theme/ThemeProvider';

export function Footer() {
  const { isDarkMode } = useTheme();
  const githubIconSource = isDarkMode ? githubIconBlack : githubIcon;

  return (
    <Container className="footer">
      <a href="https://allmylinks.com/will-saalves" target="_blank" rel="noreferrer" className="logo">
        <span>www.willsaalves.in</span>
      </a>
      <div>
        <p>
          Este site foi feito com <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

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
        <a href="https://www.instagram.com/willsaalves" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
