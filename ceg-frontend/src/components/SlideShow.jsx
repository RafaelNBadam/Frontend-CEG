import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Slide = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;
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

  export default SlideShow;