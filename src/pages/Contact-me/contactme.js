
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

//  import React,{Component,Fragment} from 'react'
//  import Netlify from './netlifyForm'

// class ContactMe extends Component{
//   render() {
//       return(
//         <Fragment>
//             <Netlify/>
//         </Fragment>
       
        
//       )
//     }
//   }
import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'


function ContactMe() {
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [file, setFile] = useState({});

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message, file }
    
    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch(error => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit} action="/thank-you/">
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={handleChange} />
            </label>
          </p>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <h3>{status}</h3>
    </div>
  );
}

export default ContactMe