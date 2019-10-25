
// import React,{Component,Fragment} from 'react'
// import axios from 'axios'
// import './ContactMe.scss'

// //component 

// const API_PATH = 'http://localhost:3000/Contact-me/api/index.php';

// class ContactMe extends Component{
// constructor(props){
//   super(props);
//   this.state = {
//     fname: '',
//     lname:'',
//     email:'',
//     message:'',
//     mailSent:false,
//     error:null
//   }
// }

// // handleForSubmit( event ){
// //   event.preventDefault();
// //   console.log(this.state)
// // }

// handleForSubmit = e =>{
//   e.preventDefault();
//   axios({
//     method: 'post',
//     url: `${API_PATH}`,
//     headers:{'content-type': 'application/json'},
//     data:this.state
//   })

//   .then(result =>{
//     this.setState({
//       mailSent:result.data.sent
//     })
//   })
//     .catch( error => this.setState({error: error.message}))
// };


//   render() {
//     return(
//       <Fragment>
//       <div className="ContactMe" >
//         <p className="contactMe">Contactame</p>
//         <div>
//           <form name='contact' method='POST' data-netlify='true'>
            
            
//             <label> Nombre: </label>
//             <input type="text" id="name" name="name" 
//                   placeholder="Tu nombre.."
//                   value = {this.state.fname}
//                   onChange = {e => this.setState({
//                     fname:e.target.value})}
//                   />
           
           
//             <label> Apellido: </label>
//             <input type="text" id="lname" name="LastName" 
//                   placeholder="Tu Apellido.."
//                   value = {this.state.lname}
//                   onChange = { e => this.setState({
//                     lname: e.target.value})}
//                   />      

//             <label>Email: </label>
//             <input type="email" id="email" name="email"
//                   placeholder="Para que pueda contactarte ;)"
//                   value = {this.state.email}
//                   onChange = {e => this.setState ({
//                     email: e.target.value})}
//                   />    
            
            
            
//             <label>Comentarios: </label>
//             <textarea id="message" name="message" 
//             placeholder="Dime lo que quieres saber de mi! y si 
//             te interesa trabajar conmigo.." 
//             value = {this.state.message}
//             onChange = {e => this.setState ({
//                 message: e.target.value
//             })}
//             ></textarea>        
//             <input type="submit" onClick = { e =>this.handleForSubmit(e)}  value="Envialo!"/>          
//           </form>
//           <div>
//           {this.state.mailSent &&
//           <div> Thanks you for contacting me</div>
//           }
//           </div>
//         </div>
//       </div>
//       </Fragment>
//     )
//   }
// }

 import React,{Component} from 'react'

class ContactMe extends Component{
  render() {
      return(
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  <input type="hidden" name="bot-field" />  <input type="hidden" name="form-name" value="contact" />  <div className="field half first">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="6" />
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input type="reset" value="Clear" />
    </li>
  </ul>
</form>
      )
    }
  }


export default ContactMe