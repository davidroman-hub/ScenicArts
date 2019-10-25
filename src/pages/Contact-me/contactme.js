
import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import './ContactMe.scss'

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
      .then(() => setStatus("Gracias por tu mensaje!!"))
      .catch(error => setStatus("No se ha enviado tu mensaje!"));

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
    <div className="ContactMe">
    <form onSubmit={handleSubmit} action="/thank-you/">
          <p>
            <label>
              Tu Nombre: <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Tu Email: <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Mensaje: <textarea name="message" value={message} onChange={handleChange} />
            </label>
          </p>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Haz click aqui para agregar algun archivo ...</p> :
                <p className='files'>click aqui para adjuntar una foto</p>
            }
          </div>
          <p>
            <button type="submit">Envialo!</button>
          </p>
        </form>
        <h3>{status}</h3>
    </div>
  );
}

export default ContactMe