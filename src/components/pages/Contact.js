import React from 'react';
import '../../css/style.css';

export default function Contact() {
  return (
    <div className = 'main'>
        <h1> Please contact me on</h1>
      
        <form className = "newform">


                <div className="form-group">
                      <label for="name">Name</label>
                      <input required type = 'text'
                      placeholder="your name"/>
                </div>
       
                <div className="form-group">
                      <label for="email">Email</label>
                      <input required type = 'email'
                      placeholder="email"/>
                </div>
       
                <div className="form-group">
                      <label for="name">Message</label>
                      <input required type = 'text'
                      placeholder="your message"/>
                </div>
                <br></br>
                
          </form>
          <button type="submit" className="form-button" >
                SUBMIT
                </button>
    </div>
  );
}
