import React from 'react'
import NetlifyForm from 'react-netlify-form'
 
export default () => (
<NetlifyForm name='Contact Form' method='POST' data-netlify="true">
  {({ loading, error, success }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {success &&
        <div>Thank you for contacting us!</div>
      }
      {!loading && !success &&
        <div>
          <input type='text' name='Name' required />
          <textarea name='Message' required />
          <button>Submit</button> 
    
        </div>
      }
    </div>
  )}
</NetlifyForm>

);