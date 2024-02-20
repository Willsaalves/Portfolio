import styled from "styled-components";
import Lottie from "lottie-react";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  h4 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Ajuste a altura conforme necessário para centralizar verticalmente na tela inteira */
  }

  .project {
    padding: 2rem 1.8rem;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #fff;

    &:hover {
      transform: translateY(-5px);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3.6rem;
      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      a > img {
        width: 5.0rem;
      }
    }

    h3 {
      margin-bottom: 2rem;
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;
      a {
        color: #fff;
        border-bottom: 1px solid var(--pantone);
        transition: color 0.25s;

        &:hover {
          color: var(--pantone);
        }
      }
    }

    footer {
      margin-top: auto;
      .tech-list {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 1.4rem;
        opacity: 0.6;
      }
    }
  }



  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;

export const StyledLottie = styled(Lottie)`
  // Adicione estilos personalizados para o Lottie, se necessário
`;
