import styled from 'styled-components';

const SearchInput = styled.input`
  width: 390px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 4px;
  margin-left: 0px;
  margin: 30px;
  color: black;
  background-color: #E5E5E5;
`;

  const SearchBar = () => {
  return (
  <div>
  <h1>Pesquise por cursos</h1>
  <SearchInput type="text" placeholder="Cursos" />
  </div>
  )
}
    const SearchBar2 = () => {
    return (
    <div>
    <h1>Pesquise por instituições</h1>
    <SearchInput type="text" placeholder="Instituições" />
    </div>
  )
  }
export {SearchBar, SearchBar2};
