import React from 'react';
import myimage from  '../../images/icon.PNG';

export default function About() {
  return (
    <div className = 'main'>
   
      <img class = "myimage" src ={myimage} alt="icon"/>
     <aside>
      <p>
      Anna is an application developer and business systems analyst.  
      </p>
      </aside>
    </div>
  );
}
