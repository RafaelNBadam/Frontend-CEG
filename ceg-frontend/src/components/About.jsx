import styled from 'styled-components';
import { HeaderApp } from '../App';
import '../styles/Body.css';

const AboutPageWrapper = styled.div`
display: flex;
flex-direction: column;
width: 1541px; 
height: 950px;
border-radius: 8px;
  margin-top: 300px;
  margin-left: 0px;
  padding: 40px;
  background-color: #fff;
  gap: 20px;


`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: black;
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 1.3;
  margin-bottom: 15px;
color: black;
`;

const App = () => {
  return (
    <div className='banner'>
    <AboutPageWrapper>
      <img src='src/images/big-ceg-logo.png' className='logoAbout'></img>
      <Paragraph>
      Estamos aqui para ser sua vitrine! Oferecendo uma ampla gama de cursos <br />
      em diversos nichos para atender às suas necessidades de aprendizado e <br />
      desenvolvimento profissional.
      </Paragraph>

      <SectionTitle></SectionTitle>
      <Paragraph>
      Navegue por nossa seleção cuidadosamente curada de cursos, cada um <br />
      acompanhado de uma breve descrição que oferece uma visão geral do <br />
      conteúdo e dos objetivos do curso. Queremos que você tenha todas as <br />
      informações necessárias para tomar a decisão certa para o seu <br />
      crescimento pessoal e profissional.      
      </Paragraph>
    </AboutPageWrapper>
    </div>
  );
};

const Header = () => {
    return (
      <div>
        <HeaderApp />
      </div>
    );
  }
export {Header, App};
