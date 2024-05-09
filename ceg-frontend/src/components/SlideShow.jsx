import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Slide = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

const SlideImage = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.borderRadius || '0'};
  margin: ${props => props.marginTop || '0'} ${props => props.margin || 'auto'} 0 ${props => props.marginLeft || 'auto'};
`;

const SlideShow = ({ slides, interval, imageSize, imageBorderRadius, imageMargin, marginTop, marginLeft }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, interval);
  
      return () => clearInterval(intervalId);
    }, [slides.length, interval]);
  
    return (
      <SlideContainer>
        {slides.map((slide, index) => (
          <Slide key={index} active={index === currentSlide}>
            <SlideImage 
              src={slide} 
              alt={`Slide ${index}`} 
              width={imageSize}
              height={imageSize}
              borderRadius={imageBorderRadius}
              margin={imageMargin}
              marginTop={marginTop}
              marginLeft={marginLeft}
            />
          </Slide>
        ))}
      </SlideContainer>
    );
};

SlideShow.propTypes = {
  slides: PropTypes.array.isRequired,
  interval: PropTypes.number.isRequired,
  imageSize: PropTypes.string,
  imageBorderRadius: PropTypes.string,
  imageMargin: PropTypes.string,
  marginTop: PropTypes.string,
  marginLeft: PropTypes.string
};

SlideShow.defaultProps = {
  imageSize: 'auto',
  imageBorderRadius: '0',
  imageMargin: '0',
  marginTop: '0',
  marginLeft: 'auto'
};

export default SlideShow;
