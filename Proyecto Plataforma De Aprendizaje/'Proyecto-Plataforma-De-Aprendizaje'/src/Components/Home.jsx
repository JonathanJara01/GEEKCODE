import React from 'react';


//COMPONENTES
import Publicidad from './Publicidad';
import Videos from './Videos';

const Home = () => {
  return (
    <div>
        <div className="row animate__animated animate__rubberBand">
            <h1 className="display-3">GEEKHOME</h1>
            <p className="text-justify">ACA ESTAN TODOS LOS CURSOS GEEK</p>
        </div>
        <div>
          <Videos />
        </div>
        <div>
          <Publicidad />
        </div>
    </div>
  )
}

export default Home