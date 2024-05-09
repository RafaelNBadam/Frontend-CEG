import styled from 'styled-components';
import {SearchBar, SearchBar2} from './SearchBar';
import SrcButton from './ButtonGroup';
import PriceRangeSlider from './PriceSlider';

const SearchBars = styled.div`
display: flex;
gap: 20px;
margin-left: -10px;
`;

const CardContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
  width: 950px;
  height: 250px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 20px auto;
  margin-left: 100px;
  margin-top: 180px;
  gap: 20px;
`;

const SearchOpt = styled.div`
height: 100px;
display: flex;
justify-content: space-between;
`;
const Card = () => {
  return (
    <CardContainer>
      <SearchBars>
      <SearchBar />
      <SearchBar2 />
      </SearchBars>
      <SearchOpt>
      <PriceRangeSlider />
      <SrcButton />
      </SearchOpt>
    </CardContainer>
  );
}

export default Card;
