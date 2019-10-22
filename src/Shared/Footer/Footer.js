import React from 'react'
import './Footerstyles.scss'


function FooterV() {
    return (
        <footer>
                <div className = 'social'>
                {/* <h1> Abigail C</h1>
                <h3> Sigueme en mis redes sociales</h3> */}
               
                    <li><a link='https://www.instagram.com/variacionescoreograficas/' target='_blank'>
                     < i className='fa fa-instagram'/>
                    </a>
                    </li>
                    <a hrfe='https://www.facebook.com/feriadeartesescenicas/' target='_blank'>
                     < i className='fa fa-facebook'/>
                    </a>
                    <a hrfe='https://www.flickr.com/photos/abigailcalavera/' target='_blank'>
                     < i className='fa fa-flickr'/>
                    </a>

                    
{/*                    
                    <a hrfe='#' className='fa fa-twitter'></a> 
                   
                  
                    <a hrfe='#' className='fa fa-instagram'></a> */}
                                  
               
                </div>    
        
        </footer>
       
    )
}

export default FooterV