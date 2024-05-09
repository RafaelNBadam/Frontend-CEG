import styled from 'styled-components';
import { HeaderApp } from '../App';
import '../styles/Body.css'

const ContactInfo = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 40px;
background-color: grey;
`;

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
`;

const ContactItem = styled.div`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const BodyContact = () => {
    return(
        <div className='banner'>
            <img src='src/images/banner_slider.jpg' alt="banner" className='bannerimg'/>
        </div>
    )}

const App = () => {
    return (
        <div>
<ContactInfo>
<ContactTitle>Informações de Contato</ContactTitle>
<ContactItem>Email: contato@exemplo.com</ContactItem>
<ContactItem>Telefone: (XX) XXXX-XXXX</ContactItem>
<ContactItem>Endereço: Rua Exemplo, 123 - Cidade, Estado</ContactItem>
</ContactInfo>
        </div>
    );
  }

const Header = () => {
    return (
      <div>
        <HeaderApp />
      </div>
    );
  }

  export {BodyContact,Header, App};