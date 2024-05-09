import PropTypes from 'prop-types'; // Importando PropTypes
import styled from 'styled-components';
import { HeaderApp } from '../App';
// Definindo o estilo do card
const CourseCardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const CourseTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
`;

// Componente do Card do Curso
const CourseCard = ({ course }) => {
  return (
    <CourseCardWrapper>
      <CourseTitle>{course.title}</CourseTitle>
      <CourseDescription>{course.description}</CourseDescription>
    </CourseCardWrapper>
  );
};

// Definindo os PropTypes para o componente CourseCard
CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

// Componente da Lista de Cursos
const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

// Definindo os PropTypes para o componente CourseList
CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Exemplo de Uso
const courses = [
  {
    title: 'Curso de React',
    description: 'Aprenda a criar aplicações web com React.',
  },
  {
    title: 'Curso de JavaScript Avançado',
    description: 'Aprofunde seus conhecimentos em JavaScript.',
  },
  // Adicione mais cursos conforme necessário
];

const Header = () => {
  return (
    <div>
      <HeaderApp />
    </div>
  );
}
const App = () => {
  return (
    <div>
      <h1>Lista de Cursos</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export  {Header, App};
