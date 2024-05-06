import { useState } from 'react';
import styled from 'styled-components';

const StyledPriceRangeSlider = styled.div`
  .toggleContainer {
    margin-left: 320px;
    margin-top: 50px;
    display: inline-block;
    position: fixed;
    width: 60px;
    height: 34px;
  }

  .toggleSlider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #347C36;
    border-radius: 34px;
    transition: .4s;
  }

  .toggleSlider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: .4s;
  }

  input:checked + .toggleSlider {
    background-color: #EFEFEF;
  }

  input:checked + .toggleSlider:before {
    transform: translateX(26px);
  }

  .newString {
    display: ${(props) => (props.isOn ? 'none' : 'block')};
  }
`;

function PriceRangeSlider() {
  const [price, setPrice] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  const handleToggle = () => {
    setIsOn(!isOn);
    // Aqui você pode adicionar a lógica para selecionar "grátis" quando o botão é ligado
    if (!isOn) {
      setPrice(0); // Define o preço como 0 quando o botão é ligado (grátis)
    }
  };

  return (
    <StyledPriceRangeSlider isOn={isOn}>
      <label className='newString' htmlFor="priceRange">Defina o preço</label>
      <label className="toggleContainer">
        <input type="checkbox" onClick={handleToggle} />
        <span className="toggleSlider"></span>
      </label>
      <div>
        <input
          className="PrcSlider"
          type="range"
          min="0"
          max="1000"
          value={price}
          id="priceRange"
          onChange={handleSliderChange}
          disabled={isOn} // Desabilita o slider quando "grátis" está selecionado
        />
        <span className='PrcValue'>R$ {price}</span>
        <h1 className='gratuito'>Grátis</h1>
      </div>
    </StyledPriceRangeSlider>
  );
}

export default PriceRangeSlider;
