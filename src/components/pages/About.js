import React from 'react';
import myimage from  '../../images/icon.JPG';

export default function About() {
  return (
    <div>
      <h1>About me</h1>

      <img src ={myimage} alt="icon"/>
      <p>
      I am semi-retired professional with passion seeing software serving the business need for right data being available easy and efficiently to answer those questions to prosper.   </p>
      <p>
      Last five years I have been working pro bono as a trustee for a small pension fund. </p>
    </div>
  );
}
