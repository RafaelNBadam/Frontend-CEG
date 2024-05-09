import styled from 'styled-components';
import { HeaderApp } from '../App';
import '../styles/Body.css';
import '../styles/contact.css';

const ContactInfo = styled.div`
margin: 0 auto;
height: 500px;
width: 1000px;
border-radius: 20px;
background-color: rgba(98, 59, 98, 0.4);
display: flex;
`;

const ContactTitle = styled.h3`
display: flex;
  font-size: 1.3rem;
  margin-bottom: 15px;
  margin-top: 20px;
  margin-left: 390px;
`;

const ContactItem = styled.div`
opacity: 1;
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
  <div>
<ContactTitle>Informações de Contato</ContactTitle>
<div className='avatars'>
<img src='/Rafael_avatar.png' alt="avatar" className='RafaelAvatar'></img>
<img src='/Vitoria_avatar.png' alt="avatar" className='VitoriaAvatar'></img>
<img src='/MVick_avatar.png' alt="avatar" className='MVickAvatar'></img>
</div>
<div className='rafael_div'>
  <a href='https://github.com/RafaelNBadam'>
<img src='/public/github_logo.png' alt="logo" className='logo_card' />
</a>
<a href='mailto:rafanascimento2003@hotmail.com?subject=CEG site&body=Olá, gostaria de saber mais sobre o CEG'>
<img src='/public/gmail_logo.png' alt="logo" className='logo_card'/>
</a>
<a href='https://www.linkedin.com/in/rafael-nascimento-badam/'>
<img src='/public/linkedin_logo.png' alt="logo" className='logo_card'/>
</a>
<h1 className='RafaelString' style={{color: 'white'}}>Rafael</h1>
</div>
<div className='mvick_div'>
<a href='https://github.com/mariavick'>
<img src='/public/github_logo.png' alt="logo" className='logo_card' />
</a>
<a href='mailto:mariavivibibi120@gmail.com?subject=CEG site&body=Olá, gostaria de saber mais sobre o CEG'>
<img src='/public/gmail_logo.png' alt="logo" className='logo_card'/>
</a>
<a href='https://www.linkedin.com/in/mariavick/'>
<img src='/public/linkedin_logo.png' alt="logo" className='logo_card'/>
</a>
<h1 className='MVickString' style={{color: 'white'}}>Maria Vitória</h1>
</div>
<div className='vickbarb_div'>
<a href='https://github.com/victoriavasconcelos'>
<img src='/public/github_logo.png' alt="logo" className='logo_card' />
</a>
<a href='mailto:victoriabarbosa618@gmail.com?subject=CEG site&body=Olá, gostaria de saber mais sobre o CEG'>
<img src='/public/gmail_logo.png' alt="logo" className='logo_card'/>
</a>
<a href='https://www.linkedin.com/in/victoriabarbosaa/'>
<img src='/public/linkedin_logo.png' alt="logo" className='logo_card'/>
</a>
<h1 className='VickBarbString' style={{color: 'white'}}>Vitória Barbosa</h1>
</div>
<ContactItem></ContactItem>
<ContactItem></ContactItem>
<ContactItem></ContactItem>
  </div>
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