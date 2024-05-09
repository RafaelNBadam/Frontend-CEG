import './styles/Header.css'
import './styles/SlideShow.css'
import './styles/Body.css'
import { MdOutlineMailOutline } from "react-icons/md";
import SlideShow from './components/SlideShow.jsx';
import Card from './components/Card.jsx';
import { Link } from 'react-router-dom'; // Importe o Link se estiver usando React Router

function HeaderApp() {
  return (
    <>
   <div className='header'>
    <div className='logoHeader'>
  <img src="src/images/ceg-logo.png" alt="logo" className="logo"/>
   </div>

  <div className='menu'>
   <Link to ="/">Página Inicial</Link>
   <Link to="/courses">Cursos</Link>
   <Link to='/institutions'>Instituições</Link>
   <Link to='/about'>Sobre</Link>
   <Link to='/contact'>Contatos</Link>
   </div>

  <div className='icons'>
   <MdOutlineMailOutline size={25}/>
   <h1>Login</h1>
   <h1>Cadastro</h1>
   </div>

   </div>
    </>
  )
}


const slidesData = [
  'Slide 1 Content',
  'Slide 2 Content',
  'Slide 3 Content'
];

const App = () => {
  return (
    <div className="SlideStyle">
      <h1>Meu Slideshow</h1>
      <SlideShow slides={slidesData} interval={3000} />
    </div>
  );
};

const MenuSearch = () => {
  return (
    <>
    <div className='banner'>
      <img src="src/images/banner_slider.jpg" alt=""/>
    </div>
    <div className='Card'>
      <Card />
    </div>
  </>
  );
}



export {HeaderApp, App, MenuSearch};