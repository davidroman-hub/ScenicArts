
import React,{Component,Fragment} from 'react'
import './Videos.scss'
//component 

class Videos extends Component{
  render() {
    return(
      <Fragment>
        <div className="test">
        <h1>hola mundo</h1>
        </div>
        
        <div className="surf">
        <iframe title="abi" src="https://player.vimeo.com/video/364906291" 
         width="640px"
        height="360px" 
         frameborder="0" 
         allow="autoplay; fullscreen"
         allowfullscreen>
        </iframe>
        </div>
      </Fragment>

    )
  }
}

export default Videos