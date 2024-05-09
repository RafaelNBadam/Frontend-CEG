import './styles/Header.css'
import './styles/SlideShow.css'
import { MdOutlineMailOutline } from "react-icons/md";
import SlideShow from './components/SlideShow.jsx';
import Card from './components/Card.jsx';
<<<<<<< Updated upstream
function Header() {
=======
import { Link } from 'react-router-dom'; // Importe o Link se estiver usando React Router
import Image1 from './images/1-slide.png';
import Image3 from './images/3-slide.png';
function HeaderApp() {
>>>>>>> Stashed changes
  return (
    <>
   <div className='header'>
    <div className='logoHeader'>
  <img src="src/images/ceg-logo.png" alt="logo" className="logo"/>
   </div>

  <div className='menu'>
<<<<<<< Updated upstream
   <h1>Página Inicial</h1>
   <h1>Cursos</h1>
   <h1>Instituições</h1>
   <h1>Sobre</h1>
   <h1>Contatos</h1>
=======
   <Link className='link' to ="/">Página Inicial</Link>
   <Link className='link' to="/courses">Cursos</Link>
   <Link  className='link' to='/institutions'>Instituições</Link>
   <Link className='link' to='/about'>Sobre</Link>
   <Link className='link' to='/contact'>Contatos</Link>
>>>>>>> Stashed changes
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
  Image1,
  Image3,
];


const App = () => {
    return (
      <div className="SlideStyle">
        <SlideShow 
          slides={slidesData} 
          interval={3000} 
          imageSize="250px" 
          imageBorderRadius="10px" 
          imageMargin="20px"
          marginTop="-80px"
          marginLeft="70px"
        />
      </div>
    );
  };
const MenuSearch = () => {
  return (
    <div className='Card'>
      <Card />
    </div>
  );
}

<<<<<<< Updated upstream


export {Header, App, MenuSearch};
=======
export {HeaderApp, App, MenuSearch};
>>>>>>> Stashed changes
