import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import './styles/Header.css'
import { MdOutlineMailOutline } from "react-icons/md";

function Header() {
  return (
    <>
   <div className='header'>
    <div className='logoHeader'>
  <img src="src/images/ceg-logo.png" alt="logo" className="logo"/>
   </div>

  <div className='menu'>
   <h1>Página Inicial</h1>
   <h1>Cursos</h1>
   <h1>Instituições</h1>
   <h1>Sobre</h1>
   <h1>Contatos</h1>
   </div>

  <div className='icons'>
   <MdOutlineMailOutline size={25}/>
   <h1>Login</h1>
   <h1>Cadastro</h1>
   </div>

   </div>
    </>
  )
}




const Slide = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

// Estilizar a imagem do slide

// Componente principal do slide
const SlideShow = ({ slides, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [slides.length, interval]);

  return (
    <div>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentSlide}>
          {slide}
        </Slide>
      ))}
    </div>
  );
};

SlideShow.propTypes = {
  slides: PropTypes.array.isRequired,
  interval: PropTypes.number.isRequired,
};

// Exemplo de uso
const App = () => {
  const slides = [
    <img className='slideshow' key="slide1" src="" alt="Slide 1" />,
    <img className='slideshow' key="slide2" src="" alt="Slide 2" />,
    <img className='slideshow' key="slide3" src="" alt="Slide 3" />,
  ];

  return (
    <div>
      <SlideShow slides={slides} interval={3000} />
    </div>
  );
};


export {Header, App};