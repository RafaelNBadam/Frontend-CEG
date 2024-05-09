import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header, App, MenuSearch} from './App.jsx'
import './styles/SearchSlides.css'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className='SrcSlides'>
    <MenuSearch className="Search" />
    <App className="Slides" />
    </div>
<<<<<<< Updated upstream
  </React.StrictMode>,
)
=======
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
>>>>>>> Stashed changes
