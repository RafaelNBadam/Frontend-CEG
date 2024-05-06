import './styles/Header.css'
import './styles/SlideShow.css'
import { MdOutlineMailOutline } from "react-icons/md";
import SlideShow from './components/SlideShow.jsx';
import Card from './components/Card.jsx';
function Header() {
  return (
    <>
   <div className='header'>
    <div className='logoHeader'>
  <img src="src/images/ceg-logo.png" alt="logo" className="logo"/>
   </div>

  <div className='menu'>
   <h1>Página Inicial</h1>
   <h1>Cursos</h1>
   <h1>Instituições</h1>
   <h1>Sobre</h1>
   <h1>Contatos</h1>
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
    <div className='Card'>
      <Card />
    </div>
  );
}



export {Header, App, MenuSearch};