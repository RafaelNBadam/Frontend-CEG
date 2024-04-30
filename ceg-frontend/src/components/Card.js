// import React from 'react';
import SearchBar from './SearchBar';
import ButtonGroup from './ButtonGroup';
import PriceSlider from './PriceSlider';
import 'src/styles/Card.css';

const Card = () => {
  return (
    <div className='Card'>
      <SearchBar />
      <ButtonGroup />
      <PriceSlider />
    </div>
  );
}

export default Card;
