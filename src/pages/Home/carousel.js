import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./carousel.scss";
import sceniC1 from './images/sceniC1.jpg'
import sceniC2 from './images/sceniC2.jpg'
import sceniC3 from './images/sceniC3.jpg'
import sceniC4 from './images/sceniC4.jpg'
import sceniC5 from './images/sceniC5.jpg'
import sceniC6 from './images/sceniC6.jpg'


export default () => (
  <Carousel className="carousel" autoPlay>
    
  
    <div>
      <img alt="foto1"src={sceniC1} />
      <p className="legend">variaciones</p>
    </div>
    <div>
      <img src={sceniC2} />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src={sceniC3} />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src={sceniC4} />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src={sceniC5} />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img src={sceniC6} />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img src={sceniC1} />
      <p className="legend">Legend 8</p>
    </div>
    {/* <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div> */}
   
    
  </Carousel>
);
