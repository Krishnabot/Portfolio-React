import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uz945tq', 'template_iq7v88q', form.current, 'PU1Fo1Ro9TD7ws9sE')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
      <div className="contact__options">
        <article className="contact__option">
        <MdOutlineMailOutline className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>libraryismyparadise@gmail.com</h5>
          <a href="mailto:libraryismyparadise@gmail.com" target='_blank'>Send me a Email</a>
        </article>
        <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Krishna Acharya</h5>
          <a href="https://m.me/wolverinekrishna" target='_blank'>Send me a DM</a>
        </article>
        <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+9779816398914</h5>
          <a href=" https://wa.me/9779816398914" target='_blank'>Send me a Whatsapp</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder="Your Full Name"  required />
        <input type='email' name = 'email' placeholder="Your Email Address" required />
        <textarea name='message' placeholder='Your Messege' rows="7" required></textarea>
        <button type="submit"className='btn btn-primary'>Get in Touch</button>
      </form>
       </div>

    </section>
  )
}

export default Contact