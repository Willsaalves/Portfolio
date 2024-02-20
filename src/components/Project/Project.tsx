// Project.tsx
import { Container } from "./styles";
import Lottie from "lottie-react";
import EngDark from "../../assets/eng.json";
import EngLight from "../../assets/eng1.json";
import { useTheme } from '../Theme/ThemeProvider';

export function Project() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Container id="project" className={isDarkMode ? 'dark' : 'light'}>
      <h2>Meus Projetos</h2>
      <h4>Em Construção</h4>
      <div className="projects">
        <Lottie
          animationData={isDarkMode ? EngDark : EngLight}
          loop
          autoplay
        />
      </div>
    </Container>
  );
}
