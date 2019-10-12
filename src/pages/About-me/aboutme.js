
import React,{Component,Fragment} from 'react'
import './AboutMe.scss'
import Ensamble from './Photos/Ensamble1.jpg'
import FlorCalavera from'./Photos/FlorCalavera2.jpg'
import Contextos from './Photos/Contextos.jpg'
import mezCal from './Photos/mezcalR.jpg'
//component 

class AboutMe extends Component{
  render() {
    return(
      <Fragment>
        <div className="AboutMe">
          <h1>ABIGAIL CALAVERA</h1>
          <h2>Artista escénica</h2>
          <h3>Ciudad de México | 29 de Marzo de 1992</h3>
          <p>Coreógrafa, investigadora,
            bailarina y fotógrafa. 
            Comenzó a incursionar en variados 
            estilos de danza, técnicas y entrenamientos
            desde el año 2004, transitando a través de 
            las Danzas Polinesias, Danza Oriental,
            Danza Folclórica, Danza Clásica, Teatro Físico,
            Capoeira, Improvisación de Contacto,
            Yoga, Técnica Tof, Chi Kung
             y las Técnicas Somáticas. También ha realizado 
             trabajos de meditación en Marruecos
             (Marrakech, Ait Ben Haddou Ouarzazate, Merzouga y Montes Atlas) 
             y en Madrid, España en el programa “África Mágica” el 31 de Mayo de 2013.
          </p>
          <p>
            <img alt="Ensamble" src={Ensamble}/>
          </p>
          <p>
           Su formación escénica se ha desarrollado entre la danza 
           contemporánea, la Investigación Coreográfica, la Creación
           Dancística, La Experimentación Sonora y las Artes Visuales. 
           Actualmente, trabaja en las “Variaciones Coreográficas”, 
           proyecto interdisciplinario que se ha ido formando desde 
           el año 2012 dentro de la investigación y la búsqueda de generar
           nuevos espacios, abrir el campo y las estructuras escénicas
           para crear nuevas experiencias estéticas desde una perspectiva 
           que nos pueda dirigir a la grandeza de una totalidad.
          </p>
          <p>
            <img alt="FlorCalavera" src={FlorCalavera}/>
          </p>
          <p>
          Egresada del Centro de Investigación Coreográfica del Instituto
          Nacional de Bellas Artes y Literatura CICO-INBA. Estudio danza
          contemporánea en la escuela de Iniciación Artística no. 2 EIA
          No.2 - INBA. Directora artística de las “Variaciones
          Coreográficas”. Fundadora de la “COMUNIDAD DE ARTES ESCENICAS 
          Y VISUALES”, proyecto que plantea el uso de espacios públicos 
          para presentar eventos culturales de música, danza, pintura y
          plástica de manera independiente, originaria de Xochimilco CDMX,
          el cual lleva desde el año 2013 de trabajo y desarrollo de 
          autogestión, transitando en las distintas sedes de la Ciudad de
          México, trabaja junto con Carian Paz en esta misión que busca
          impulsar la cultura y las artes de Xochimilco. 
          </p>
        <p>
          <img alt="Contextos" src={Contextos}/>
        </p>
        </div>
        <p>
        Dentro de su trabajo visual, estudió video arte en la antigua ENAP 
        de la UNAM con el profesor Sergio Medrano y en algunos talleres de
        fotografía y video de los diferentes espacios culturales e 
        independientes de la Ciudad de México. Desde el año 2006 colabora 
        como fotógrafa y asistente de producción en “Ftc Studio”, asistiendo
        a muchos eventos sociales, como conciertos de música, danza, teatro,
        graduaciones, entre otros más.
        </p>
        <div className="mezcalPhoto">
          <img alt="Mezcal" src={mezCal}/>
        </div>
        <p>

          hola mundo

        </p>
      </Fragment>
    )
  }
}

export default AboutMe