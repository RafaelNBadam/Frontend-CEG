import PropTypes from 'prop-types'; // Importando PropTypes
import styled from 'styled-components';
import { HeaderApp } from '../App';

const CourseListWrapper = styled.div`
  margin-top: 110px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CourseCardWrapper = styled.div`
  width: calc(33.33% - 110px);
  height: auto; /* Altura ajustável conforme necessário */
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 16px;
  background-color: white;
  box-sizing: border-box;
  margin-top: 80px;
  margin: 40px;
  
`;

const CourseTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: black;
  margin-top: 20px
`;

const CourseDescription = styled.p`
  font-size: 0.9rem;
  display: flex;
  margin-bottom: 8px;
  color: black;
  margin-top: 40px;
`;


const CourseImage = styled.img`
display: block;
width: 130px;
height: 130px;
justify-content: center;
margin: 0 auto;
margin-top: 20px;
`;

// Componente do Card do Curso
const CourseCard = ({ course, link }) => {
  return (
    <CourseCardWrapper>
      <CourseTitle>{course.title}</CourseTitle>
      <CourseDescription>{course.description}</CourseDescription>
      <a href={link}>
      <CourseImage src={course.image} alt={course.title} />
      </a>
    </CourseCardWrapper>
  );
};

// Definindo os PropTypes para o componente CourseCard
CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}).isRequired,
link: PropTypes.string.isRequired,
};

// Componente da Lista de Cursos
const CourseList = ({ courses }) => {
  return (
    <CourseListWrapper>
      {courses.map((course, index, link) => (
        <CourseCard key={index} course={course} link={link} />
      ))}
    </CourseListWrapper>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,

};

// Exemplo de Uso
const courses = [
  {
    title: 'Desenvolvimento Web Full Stack ',
    description: 'curso voltado para jovens negros, negras e indígenas no 2º ou 3º ano do ensino médio em escolas públicas ou recém-formados com até 21 anos.',
    image: '/fullstack_image.jpg',
    link:'https://docs.google.com/forms/d/e/1FAIpQLSdbFnJlZGOVLbNqiIYwRKnp8LzgdkHK81JrowCyU4IgUy0-_A/viewform'
  },
  {
    title: 'Desenvolvimento Profissional',
    description: 'Você sabia que há importância do desenvolvimento de sua carreira profissional? Isso porque o desenvolvimento profissional é um meio do investimento em autoconhecimento.',
    image: '/devprofissional_image.jpg',
    link:'https://www.ev.org.br/cursos/desenvolvimento-profissional'
  },
  {
    title: 'Serviços Cloud AWS',
    description: 'Neste curso você irá aprender muito sobre o mundo do armazenamento cloud, focado no AWS Cloud, da Amazon.',
    image: '/aws_cloud.png',
    link:'https://comunidade.ada.tech/cursos/1eed0404-3d39-6c50-24ed-74091009f891'
  },
  {
    title: 'Microsoft Excel 2016 - Básico',
    description: 'Aqui você aprenderá sobre o Excel a sua escolha, seja o básico, o avançado ou o completo.',
    image: '/Excel_logo.png',
    link:'https://www.ev.org.br/cursos/microsoft-excel-2016-basico'
  },
  {
    title: 'Básico Sobre Funcionamento Do Computador',
    description: 'Aqui você aprenderá sobre o funcionamento do computador, o que o faz e como ele funciona. Basicamente, o básico!',
    image: '/computer_course.jpg',
    link:'https://comunidade.ada.tech/cursos/65757051-1636-4c95-8cb3-fd14198d741b'
  },
  {
    title: 'Maquiagem para pele negra',
    description: 'O objetivo deste curso é aperfeiçoar os profissionais da área em técnicas de maquiagem específicas para pele negra. Você conhecerá produtos e técnicas específicos para maquiar a pele negra, e aprenderá como harmonizar cores.',
    image: '/black_makeup.jpg',
    link:'https://www.ead.senac.br/cursos-livres/maquiagem-para-pele-negra-webtv/'
  },
  {
    title: 'Moda e-commerce',
    description: 'Este curso tem como objetivo oportunizar atividades profissionais aos interessados em e-commerce de moda, por meio de conhecimentos e habilidades relativas ao processo de vendas on-line, de forma a atender às demandas de mercado consumidor.',
    image: '/ecommerce_course.png',
    link:'https://www.ead.senac.br/cursos-livres/moda-e-commerce/'
  },
  {
    title: 'Introdução ao UX/UI Design',
    description: 'Vamos mergulhar juntos em métodos de pesquisa que revelam as verdadeiras necessidades dos usuários',
    image: '/uxui_course.jpg',
    link:'https://potenciatech.com.br/play/curso/16256814'
  },
  {
    title: 'Lógica de Programação',
    description: 'Essa é a sua chance de desenvolver habilidades práticas e aprender a base essencial antes de escrever seu primeiro código de programação.',
    image: '/ldp_logo.jpg',
    link:'https://potenciatech.com.br/play/curso/30194921'
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
      <CourseList courses={courses} />
    </div>
  );
};

export  {Header, App};
