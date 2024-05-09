import styled from 'styled-components';
import { HeaderApp } from '../App';

const AboutPageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 15px;

`;

const App = () => {
  return (
    <AboutPageWrapper>
      <SectionTitle>Proposta do Site</SectionTitle>
      <Paragraph>
        Nosso site tem como objetivo fornecer uma plataforma para encontrar e explorar uma variedade de cursos oferecidos por diversas instituições. Queremos facilitar o acesso à educação e promover o aprendizado contínuo em diversas áreas de interesse.
      </Paragraph>

      <SectionTitle>Informações</SectionTitle>
      <Paragraph>
        O site está em constante desenvolvimento para adicionar novos recursos e melhorar a experiência do usuário. Valorizamos o feedback de nossos usuários para continuamente aprimorar nossos serviços.
      </Paragraph>
    </AboutPageWrapper>
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
