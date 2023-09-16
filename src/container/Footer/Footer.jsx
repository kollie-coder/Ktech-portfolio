import React, { useState, useRef } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import emailjs from "@emailjs/browser";
import './Footer.scss';

export const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [message, setMessage] = useState('');

  const [isFormSubmitted, setIsFormSubmitted] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone_no = (e) => {
    setPhone_no(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const form = useRef();

  
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lk2m3w7', 'template_1on0r6r', form.current, 'AprOJoqwXQ_lv4d0_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('');
      setEmail('');
      setPhone_no('');
      setMessage('');
  
    setLoading(false);
    setIsFormSubmitted(false);
  
}



  return (
    <>
    <h2 className="head-text">Contact me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt ="email" />
        <a href="mailto:apotiolasegun@gmail.com" className="p-text">apotiolasegun@gmail</a>

      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt ="mobile" />
        <a href="tel: +(234)8180-735-263" className="p-text"> +(234)8180-735-263</a>

      </div>
    </div>
     <form ref={form} onSubmit={sendEmail} className="app__footer-form">
    {isFormSubmitted ?
      <div>
     
      <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} required onChange={handleName}/>
     
    
      <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} required onChange={handleEmail}/>
     
     
      <input className="p-text" type="tel" placeholder="Your Phone Number" name="phone_no" value={phone_no} required onChange={handlePhone_no}/>
     
    
      <textarea 
      className="p-text"
      placeholder="Your Message"
      value={message}
      name="message"
      required
      onChange={handleMessage}
      />
     
     <button type="submit" className="p-text" value="Send">
      {loading ? 'Sending' : 'Send Message'}</button>
    </div> : 
    <div>
        <h3 className="head-text">Thank you for getting in touch!</h3>    
    </div>
    
  }

  </form>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  'app__whitebg',
);
