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
  </React.StrictMode>,
)
