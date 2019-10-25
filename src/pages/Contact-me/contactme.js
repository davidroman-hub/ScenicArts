
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

 const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default ContactMe