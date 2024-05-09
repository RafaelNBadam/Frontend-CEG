import { HeaderApp } from '../App';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Definindo o estilo do card
const InstitutionCardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const InstitutionName = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const InstitutionDescription = styled.p`
  font-size: 1rem;
`;

// Componente do Card da Instituição
const InstitutionCard = ({ institution }) => {
  return (
    <InstitutionCardWrapper>
      <InstitutionName>{institution.name}</InstitutionName>
      <InstitutionDescription>{institution.description}</InstitutionDescription>
    </InstitutionCardWrapper>
  );
};

// Definindo os PropTypes para o componente InstitutionCard
InstitutionCard.propTypes = {
  institution: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

// Componente da Lista de Instituições
const InstitutionList = ({ institutions }) => {
  return (
    <div>
      {institutions.map((institution, index) => (
        <InstitutionCard key={index} institution={institution} />
      ))}
    </div>
  );
};

// Definindo os PropTypes para o componente InstitutionList
InstitutionList.propTypes = {
  institutions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Exemplo de Uso
const institutions = [
  {
    name: 'Universidade XYZ',
    description: 'Uma universidade renomada oferecendo uma variedade de cursos.',
  },
  {
    name: 'Instituto ABC',
    description: 'Um instituto líder em pesquisa e inovação.',
  },
  // Adicione mais instituições conforme necessário
];

const App = () => {
  return (
    <div>
      <h1>Lista de Instituições</h1>
      <InstitutionList institutions={institutions} />
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