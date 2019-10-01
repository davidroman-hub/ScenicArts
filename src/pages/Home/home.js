
import React,{Component,Fragment} from 'react';
import{render} from "react-dom";
import Carousel from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


//component 

  class home extends Component{
    render() {
      return(
        <Fragment>
          <Carousel/>
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