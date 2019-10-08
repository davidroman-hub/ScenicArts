
import React,{Component,Fragment} from 'react';
import './home.scss'
//import{render} from "react-dom";
import Carousel from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import carousel from './carousel';
import logoss from './images/dancingA.png'


//component 

  // class home extends Component{
  //   render() {
  //     return(
  //       <Fragment>
  //         <Carousel></Carousel>
  //       </Fragment>
  //     )
  //  }
  // }

  class home extends Component{
     render() {
         return(
           <Fragment>
             <div className="AbigailScenic">
            <img  alt="logos"/* width="250px" height="160px"*/src={logoss} />
            </div>
             
             <div className="Introduccion">
              
              <h1> ABIGAIL CALAVERA </h1>
              <h2> Artista escénica </h2>
              <p>Coreógrafa, 
                investigadora, bailarina y fotógrafa. 
                Comenzó a incursionar en variados estilos de danza,
                técnicas y entrenamientos desde el año 2004,
                transitando a través de las Danzas Polinesias,
                Danza Oriental, Danza Folclórica,
                Teatro Físico, Capoeira y las Técnicas Somáticas.
                Su formación escénica se ha desarrollado entre la danza
                contemporánea, la Investigación Coreográfica, 
                la Creación Dancística, 
                La Experimentación Sonora y las Artes Visuales. </p>
              <p></p>
              <p>Actualmente, trabaja en las “Variaciones Coreográficas”,
                 proyecto interdisciplinario que se ha formado dentro de la investigación y la búsqueda para generar nuevos espacios, 
                 abrir el campo y las estructuras escénicas para crear nuevas 
                 experiencias estéticas desde una perspectiva que nos pueda dirigir 
                 a la grandeza de una totalidad.
              </p>
              <p></p>
              <p>“El movimiento es dialogar con tu espíritu y construye un cuerpo critico que se plantea donde esta y a donde va. 
                  La Coreografía es hablar a partir de lo que te  mueve y te acontece, 
                  es fluir y aligera mi existencia. 
                  Es una visionaria de la composición natural”.  </p>


             </div>
           <Carousel></Carousel>
           </Fragment>
         )
      }
     }
// const home = () => (
//   <div>
//     <Carousel />
//   </div>
//   <div>
//    <h1>hola mundo</h1> 
//   </div>
// );


export default home