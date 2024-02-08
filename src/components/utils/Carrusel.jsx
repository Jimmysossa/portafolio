import React from 'react'
import "./Carrusel.css"

const Carrusel = () => {
  return (
    <div>
       <h3>Duras:</h3>
        <figure className="slider_skills">
          <img src="../css3.png"  alt="hard skill"/>
          <img src="../html5.png" alt="hard skill"/>
          <img src="../JavaScript.png" alt="hard skill"/>
          <img src="../react.png" alt="hard skill"/>
          <img src="../Git.png" alt="hard skill"/>
        </figure>
        <div>
          <button className="btn_prev">{'<'}</button>
          <button className="btn_next">{'>'}</button>
        </div>
    </div>
  )
}

export default Carrusel