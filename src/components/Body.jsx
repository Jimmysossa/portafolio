import React from 'react'
import '../styles/Body.css'
import Carrusel from './utils/Carrusel'

const Body = () => {
  return (
    <div id='#1'>
      <section className='inicio section' id='1'>
        <img className='perfil' src="/perfil.jpeg" alt="perfil del programador Jimmy Sossa" />
        <h1 className='nombre'>Jimmy Jhosseph Sossa Diaz</h1>
        <h2 className='titulo'>Frontend Developer</h2>
      </section>
      <section className='section' id='2'>
        <h3>Habilidades</h3>
        <Carrusel/>
      </section>

    </div>
  )
}

export default Body