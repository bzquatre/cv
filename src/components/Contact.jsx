import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export default function Contact() {
  const [username,setUserName]=useState("")
  const [useremail,setUserEmail]=useState("")
  const [message,setMessage]=useState("")
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0oa4dmk', 'template_n9v1duu', form.current, 'OqhnCHu1unhERspSx')
      .then((result) => {
          setUserEmail('');setUserName('');setMessage('')
          alert("message send ")
      }, (error) => {
          alert(error.text); 
      });
  };
  return (
    <>
    <td>
          <div className="author_content">
          <h1 className="title">Love to hear form you</h1>
          <p>I always love to hear from you. You guys can reach me through my email address as a primary option or through filling the contact form.</p>
          </div>
          <footer>© bzquatre</footer>
        </td>
        <td>
          <section className="contact">
          <form id="contactform" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full name*</label>
          <input type="text" name="user_name" id="name" value={username} onChange={(e)=>{setUserName(e.value)}} placeholder="Your name" maxLength={100} required="" />
          <label htmlFor="name">Email address*</label>
          <input type="email" name="user_email" id="email" value={useremail} onChange={(e)=>{setUserEmail(e.value)}} placeholder="Email address" maxLength={100} required="" />
          <label htmlFor="message">Message*</label>
          <textarea name="message" id="message" value={message} onChange={(e)=>{setMessage(e.value)}} placeholder="Your message here..." maxLength={250} required=""></textarea>
          <button type="submit" >SUBMIT</button>
          </form>
          
          </section>
        </td>
    </>
  )
}
