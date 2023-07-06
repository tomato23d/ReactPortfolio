import React from 'react';
import '../../css/style.css';

export default function Contact() {
  return (
    <div className = 'main'>
        <h1 className = 'page-title'> Please contact me</h1>
      
        <form className = "new-form">

                <div className="form-line">
                      <label for="name">Name</label>
                      <input required type = 'text'
                      placeholder="your name"/>
                </div>
       
                <div className="form-line">
                      <label for="email">Email</label>
                      <input required type = 'email'
                      placeholder="email"/>
                </div>
       
                <div className="form-line">
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
