
import React,{Component,Fragment} from 'react'
import './Videos.scss'
//component 

class Videos extends Component{
  render() {
    return(
      <Fragment>
        <div className="artTemp">
        <h1>Arte Temporal</h1>
        <p>-Atemporal es una continuación de la serie 
          " Co Identidades" , en el cual participan más personas
          en este diálogo que va construyendo un Tejido Colectivo
          que busca encaminarse hacia una totalidad.
        </p>
        </div>
        
        <div className="artTempVid">
            <iframe title="abi" src="https://player.vimeo.com/video/364906291" 
                width="640px"
                height="360px" 
                frameborder="0" 
                allow="autoplay; fullscreen"
                allowfullscreen>
            </iframe>
        </div>
        
        <div className="artTemp">
        <h1>J | R Co Identidades</h1>
        <p> -Pieza escénica que deambula sobre el existir de dos personas que se 
          preguntan en escena y en la vida " Cómo trabajo mi identidad?", y de cómo
          se desarrollan y conjuntan mediante sus respuestas, como lo habitan
          se adaptan y coexisten en este diálogo. Son solos que se acompañam en sus
          diferentes facetas, sensaciones, momentos, estados que les acontecen, premuras,
          conflictos que los envuelve esta sociedad, como se equilibra el uno con el otro,
          como guían su existencia y cómo van construyendo "Su Identidad Colectiva".

        </p>
        </div>
        <div className="artTempVid">
            <iframe title="abi" src="https://player.vimeo.com/video/367924180" 
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