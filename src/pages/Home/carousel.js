import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel.scss"
import Scenic01 from './images/vari.jpg'
import Scenic02 from './images/cori.jpg'
import Scenic03 from './images/Scenic03.jpg'
import Scenic04 from './images/Scenic04.jpg'
import Scenic05 from './images/Scenic05.jpg'
import Scenic06 from './images/Scenic06.jpg'
import Scenic07 from './images/Scenic07.jpg'
import Scenic08 from './images/Scenic08.jpg'
import Scenic09 from './images/Scenic09.jpg'
import Scenic10 from './images/Scenic10.jpg'

export default () => (
  <Carousel className="carousel" autoPlay>
    
  
    <div>
      <img alt="Variaciones" src={Scenic10} />
      
    </div>
    <div>
      <img  alt="Coreograficas" src={Scenic02} />
      
    </div>
    <div>
      <img  alt="03" src={Scenic03} />
      
    </div>
    <div>
      <img alt="04" src={Scenic04} />
      
    </div>
    <div>
      <img alt="05" src={Scenic05} />
     
    </div>
    <div>
      <img alt="06" src={Scenic06} />
     
    </div>
    <div>
      <img  alt="06"src={Scenic07} />
      
    </div>
    <div>
      <img alt="07" src={Scenic08} />
      
    </div>
    <div>
      <img alt="08" src={Scenic09} />
      
    </div>
    <div>
      <img alt="09" src={Scenic01} />
      
    </div>
    {/* <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div> */}
   
    
  </Carousel>
);
