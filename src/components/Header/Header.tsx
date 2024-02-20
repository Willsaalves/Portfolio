// Header.tsx
import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useTheme } from '../Theme/ThemeProvider';
import CV from '../../assets/Willian_resume.pdf';
import { useState } from 'react';

export function Header() {
  const [isActive, setActive] = useState(false);
  const { toggleTheme } = useTheme();

  function closeMenu() {
    setActive(false);
  }
  function toggleTheme1() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Willian "}</span>
          <span>{" Alves/>"}</span>
        </HashLink>

        <input
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch" onClick={() => { toggleTheme(); toggleTheme1(); }}>
          Toggle Theme
        </label>
      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          Sobre mim
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Projetos
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contato
        </NavHashLink>
        <a href={CV} download className="button">
          CV
        </a>
      </nav>

      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Router>
    </Container >
  );
}
