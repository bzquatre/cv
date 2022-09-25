import React from 'react'

export default function Contact() {
    function validate(){
          console.log('zakaria')
    }
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
          <form id="contactform">
          <label htmlFor="name">Full name*</label>
          <input type="text" name="name" id="name" placeholder="Your name" maxLength={100} required="" />
          <label htmlFor="name">Email address*</label>
          <input type="email" name="email" id="email" placeholder="Email address" maxLength={100} required="" />
          <label htmlFor="message">Message*</label>
          <textarea name="message" id="message" placeholder="Your message here..." maxLength={250} required=""></textarea>
          </form>
          <button type="submit" onClick={validate()}>SUBMIT</button>
          </section>
        </td>
    </>
  )
}
