import React from 'react';
import prueba1 from './Images/prueba 1.jpg'
import prueba2 from './Images/prueba 2.png'

const Publicidad = () => {
  return (
    <div className="animate__animated animate__rubberBand" >
<div className=" row col-sm-12 col-md-6 col-lg-6 col-xl-12">
<img src={prueba1} className="rounded float-start" alt="prueba1"/>
</div>
<div className=" row col-sm-12 col-md-6 col-lg-6 col-xl-12" >
<img src={prueba2} className="rounded float-end" alt="prueba2"/>
</div>
    </div>
  )
}

export default Publicidad