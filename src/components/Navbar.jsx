import React, { useState } from 'react';
import '../styles/Navbar.css';
import BurguerButton from './BurguerButton';



const Navbar = () => {
  const [clicked, setClicked] = useState (false)
   const handleClick = () =>{
    setClicked(!clicked)
   }

  return (
    <header>
        <div className='logo'>
            <img className='icon' src="/programacion.png" alt="code" />
            <h1>Jimmy Sossa</h1>
        </div>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a href="#1">Inicio</a>
            <a href="#2">Sobre mi</a>
            <a href="#3">Proyectos</a>
            <a href="#4">Contactame</a>
        </div>
        <div className='menu'>
            <BurguerButton  clicked={clicked} handleClick={handleClick}/>
        </div>
        <div className={`initial ${clicked ? ' active' : ''}`}></div>
    </header>
  )
}

export default Navbar
