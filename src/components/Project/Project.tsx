
import { Container } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";
import { useTheme } from '../Theme/ThemeProvider';
import externalLink from "../../assets/external-link.svg"

// Componente de projeto que usa o tema
export function Project() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Container id="project" >
      <h2 style={{ color: isDarkMode ? 'black' : 'white' }}>My Projects</h2>
      <div className="projects">



        <ScrollAnimation animateIn="flipInX">
          <div className="project " style={{ backgroundColor: isDarkMode ? '#000444' : '#d7dff9' }}>
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffff " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://willsaalves.github.io/PortfolioBruna/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio Bruna Galozzi</h3>
              <p>
                Este Portfólio foi desenvolvido para atender às necessidades de uma blogueira que busca fechar parcerias com lojas e conquistar novos clientes
              </p>
            </div>

          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
    <div className="project">
      <header>
        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <div className="project-links">
          <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
            <img src={externalLink} alt="Visit site" />
          </a>
        </div>
      </header>
      <div className="body">
        <h3>MadeWithLuv - HomeDecor Site</h3>
        <p>
        This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
        </p>
      </div>
      <footer>
        <ul className="tech-list">
          <li>Wordpress</li>
          <li>Woocommerce</li>
        </ul>
      </footer>
    </div>
  </ScrollAnimation>

  <ScrollAnimation animateIn="flipInX">
    <div className="project">
      <header>
        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <div className="project-links">
          <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
            <img src={externalLink} alt="Visit site" />
          </a>
        </div>
      </header>
      <div className="body">
        <h3>MedicalBooks - Book Selling Site</h3>
        <p>
        This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
        </p>
      </div>
      <footer>
        <ul className="tech-list">
          <li>Wordpress</li>
          <li>Woocommerce</li>
        </ul>
      </footer>
    </div>
  </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
    <div className="project">
      <header>
        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <div className="project-links">
          <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
            <img src={externalLink} alt="Visit site" />
          </a>
        </div>
      </header>
      <div className="body">
        <h3>SmartCorners - Real Estate Properties Site</h3>
        <p>
        This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
        </p>
      </div>
      <footer>
        <ul className="tech-list">
          <li>Wordpress</li>               
        </ul>
      </footer>
    </div>
  </ScrollAnimation> */}




        {/* <ScrollAnimation animateIn="flipInX">
    <div className="project">
      <header>
        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <div className="project-links">
          <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
            <img src={externalLink} alt="Visit site" />
          </a>
        </div>
      </header>
      <div className="body">
        <h3>Mitul Industries - Manufacturing Industries Site</h3>
        <p>
        This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
        </p>
      </div>
      <footer>
        <ul className="tech-list">
          <li>Wordpress</li>
        </ul>
      </footer>
    </div>
  </ScrollAnimation> */}




      </div>
    </Container>
  );
}
