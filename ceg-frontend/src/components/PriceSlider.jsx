import { useState } from "react";
import styled from "styled-components";

const StyledPriceRangeSlider = styled.div`
  .newString {
    position: fixed;
    margin-top: 20px;
  }
  .PrcSlider {
    position: fixed;
    display: flex;
    margin-top: -30px;
    margin-left: 0px;
    width: 15%;
    height: 28px;
    background: #ddd;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .PrcSlider:hover {
    opacity: 1;
  }

  .PrcSlider::-webkit-slider-thumb {
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
    appearance: none;
  }

  .PrcSlider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
  }

  .PrcValue {
    position: fixed;
    display: flex;
    margin-top: -28px;
    margin-left: 260px;
  }

  .toggleContainer {
    position: fixed;
    display: flex;
    margin-left: 360px;
    margin-top: 50px;
    display: inline-block;
    position: relative;
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
    background-color: #ccc;
    border-radius: 34px;
    transition: 0.4s;
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
    transition: 0.4s;
  }

  input:checked + .toggleSlider {
    background-color: #4caf50;
  }

  input:checked + .toggleSlider:before {
    transform: translateX(26px);
  }

  .newString {
    display: ${(props) => (props.isOn ? "none" : "block")};
  }

  .FreeString{
    display: flex;
    position: fixed;
    margin-top: -29px;
    margin-left: 430px;
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
      <div>
        <label className="newString" htmlFor="priceRange">
          Defina o preço
        </label>
        <div className='toggleContainer'>
        <label>
          <input type="checkbox" onClick={handleToggle} />
          <span className="toggleSlider"></span>
        </label>
        </div>
        <div>
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
          </div>
          <div className="PrcValue">
          <span>R$ {price}</span>
        </div>
        </div>
        <div>
        <span className="FreeString">Gratuito</span>
        </div>
      </div>
    </StyledPriceRangeSlider>
  );
}

export default PriceRangeSlider;
