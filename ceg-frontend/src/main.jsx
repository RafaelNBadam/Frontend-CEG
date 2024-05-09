// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomeMain} from './pages/Home.jsx';
import './styles/SearchSlides.css';
import './index.css';
import { PageCourses } from './pages/PageCourses.jsx';
import { PageInstitutions } from './pages/PageInstitutions.jsx';
import { PageAbout } from './pages/PageAbout.jsx';
import { PageContact } from './pages/PageContact.jsx';
import { createRoot } from 'react-dom/client';
const NotFound = () => {
  return (
    <div>
      <h2>404 - Página não encontrada</h2>
      {/* Mensagem de erro ou redirecionamento */}
    </div>
  );
};

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/courses" element={<PageCourses />} />
        <Route path="/institutions" element={<PageInstitutions />} />
        <Route path="/contact" element={<PageContact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<RouterApp />);
export {NotFound, RouterApp};