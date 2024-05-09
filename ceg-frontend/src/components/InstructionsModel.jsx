import styled from 'styled-components';
import PropTypes from 'prop-types'; // Importando PropTypes
const CardContainer = styled.div`
  width: 200px;
  height: 520px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: white;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const Name = styled.h2`
  margin-top: 90px;
  font-size: 18px;
  color: black;
  `;

const Description = styled.p`
  margin-top: 50px;
  font-size: 14px;
  color: black;
`;

const Card = ({ image, name, description, link }) => {
    return (
      <CardContainer>
        <a href={link}>
          <Image src={image} alt={name} />
        </a>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </CardContainer>
    );
  };

  Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

export default Card;
