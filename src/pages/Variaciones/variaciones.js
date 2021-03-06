import React,{Component,Fragment} from 'react'
import './variaciones.scss'
import DancingB from './photos/dancingB.jpg'
import Conejos from './photos/Conejos.jpg'
//component 

class Variaciones extends Component{
  render() {
    return(
      <Fragment>
        <div className="variaciones">
        <h1> VARIACIONES COREOGRÁFICAS</h1>
        <p>Desde el año 2012 Abigail Calavera comenzó
           su propuesta escénica en “Flor Calavera”,
            en el cual trabajaba con danza contemporánea y música
             experimental, surgiendo de una urgencia de 
             transmutar la monotonía del diario 
             y la diversidad que en ella existe</p>
        </div>
       <div className="variaciones">
         <p>De aquí las Variaciones germinaron en el 2017 y 
           actualmente es un laboratorio escénico experimental 
           en donde desarrolla el trabajo creativo a partir de la
            pregunta “¿Cómo Trabajas tu Identidad?” cómo punto de 
            partida y en el cuál propone mezclas y fusiones orgánicas a 
            través de la improvisación de movimiento y la experimentación sonora, 
            en el aborda también la interdisciplina como un camino de estudio constante,
            y se centra en la búsqueda de generar nuevos espacios, abrir el campo, la 
            escucha y las estructuras escénicas para crear otras experiencias estéticas
             al espectador desde una perspectiva que nos pueda dirigir a la grandeza de 
              una totalidad. </p>
              <p><img alt="xochimilco1" /*width="800px" height="1400px" float="left" display="flex"*/  src={DancingB}/></p>
       </div>
        <div className="variaciones">
          <p>No interesa el intercambio cultural tejer redes para
             amplificar nuestra sintonía y función, construir a partir 
             de lo que sucede afuera.
          </p>
          <p>
          En la composición coreográfica 
          dirige Abigail Calavera y en colaboración 
          musicalizan las piezas Carian Paz, Gabriel Tepichin,
           David Morales y Los 400 Conejos Ebrios.
          </p>
          <p>
            <img alt="400Conejos" src={Conejos}></img>
          </p>
          <p>
          En sus volúmenes y en la presentación de cada 
          “Variación” invitamos a proyectos escénicos a
           compartir este enfoque volviéndolo así, encuentros de 
           danzas y experimentaciones en un espacio que busca la 
           comunión artística. 
          </p>
          
          </div>
      </Fragment>
    )
  }
}

export default Variaciones