import React from 'react';
import '../../css/style.css';

export default function Contact() {
  return (
    <div id = "newform" class = "newform">
      <h1>Contact Page</h1>
      <p>
   Please contact me on
      </p>
<form>


<div class="form-group">
          <label for="name">Name</label>
          <input required type = 'text'
            class="form-input"
            id="name"
            placeholder="name"
          />
        </div>
        <br></br>
<div class="form-group">
          <label for="email">Email</label>
          <input required type = 'email'
            class="form-input"
            id="email"
            placeholder="email"
          />
        </div>
        <br></br>
<div class="form-group">
          <label for="name">Message</label>
          <input required type = 'text'
            class="form-input"
            id="message"
            placeholder="your message"
          />
        </div>



</form>

    </div>

    
  );
}
