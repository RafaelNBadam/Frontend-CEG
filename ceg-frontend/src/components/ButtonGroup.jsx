import styled from 'styled-components';

const Button = styled.button`
  background: #347C36;
  color: white;
  width: 150px;
  height: 40px;
  border: none;
  padding: 10px 15px;
  margin-top: 50px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:hover {
    background: #0069d9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  }

  &:focus {
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SrcButton = () => {
  return (
    <>
      <Button>Pesquisar</Button>
    </>
  );
}

export default SrcButton;
