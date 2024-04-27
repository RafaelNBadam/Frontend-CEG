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
  <img src="https://cdn-icons-png.flaticon.com/512/3226/3226094.png" alt="logo" className="logo"/>
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
   </div>

   </div>
    </>
  )
}

const Slide = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

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
    <img key="slide1" src="https://media.istockphoto.com/id/1411422037/pt/foto/flamingo.jpg?s=2048x2048&w=is&k=20&c=PL4Xl_j4q8XdwzvbrdP3ZA-B6Wex0uPMfjCJTrcYIhU=" alt="Slide 1" />,
    <img key="slide2" src="https://media.istockphoto.com/id/508496270/pt/foto/flamingo-chileno.jpg?s=1024x1024&w=is&k=20&c=_UKGkl4zR2tp_Nj8dzSIuT25LmsJkox_yo5uPEK36rQ=" alt="Slide 2" />,
    <img key="slide3" src="https://media.istockphoto.com/id/1284299891/pt/foto/pink-flamingos.jpg?s=2048x2048&w=is&k=20&c=HCqsU5d5h6YYyzpXgSuuaTtZgXuvt4uNCVYK8EN_C6A=" alt="Slide 3" />,
  ];

  return (
    <div>
      <h1>Meu Slide Show</h1>
      <SlideShow slides={slides} interval={3000} />
    </div>
  );
};


export {Header, App};