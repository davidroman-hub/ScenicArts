
import React,{Component,Fragment} from 'react'
import './ContactMe.scss'
//component 

class ContactMe extends Component{
  render() {
    return(
      <Fragment>
      <div className="ContactMe" >
        <p className="contactMe">Contactame</p>
        <div>
          <form action = "/action_page.php">
            <label> Nombre: </label>
            <input type="text" id="fname" name="FirstName" 
                  placeholder="Tu nombre.."/>
            <label> Apellido: </label>
            <input type="text" id="lname" name="LastName" 
                  placeholder="Tu Apellido.."/>      

            <label>Email: </label>
            <input type="email" id="email" name="email"
                  placeholder="Para que pueda contactarte ;)"/>    
            <label>Comentarios: </label>
            <textarea id="subject" name="subject" placeholder="Dime lo que quieres saber de mi! y si te interesa trabajar conmigo.."></textarea>        
            <input type="submit" value="Envialo!"/>          
          </form>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default ContactMe