import React, { useRef, useState } from 'react';
import './Contact.css';
import { themeContext } from "../../Context";
import { useContext } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8n3dnu4', 'template_j676d9o', form.current, 'HOZ8zcdbHwbyu14WA')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title" style={{ color: darkMode ? "White" : "" }}>Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title" style={{ color: darkMode ? "rgb(255, 76, 97)" : "" }}>Parlons de tout !</h3>
          <p className="contact_details">Préférez-vous une approche différente ? Envoyez-moi un e-mail.</p>
        </div>

        <form action="" className="contact_form" ref={form} onSubmit={sendEmail}>
          <div className="contact_form-group">

            <div className="contact_form-div">
              <input type="text" className="contact_form-input to_name from_name" placeholder='Entrer votre nom' />
            </div>

            <div className="contact_form-div">
              <input type="email" className="contact_form-input" placeholder='Entrer votre e-mail' />
            </div>


          </div>

          <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Insérez votre sujet' />
          </div>

          <div className="contact_form-div contact_form-area">
              <textarea name="" id="" cols="30" rows="10" 
              className='contact_form-input message' placeholder='Rédigez votre message'>

              </textarea>
          </div>

          <button className="btn" type='submit'>Envoyer le message</button>
          <br />
          <span className='confirme'>{done && "Merci de m'avoir contacter !"}</span>

        </form>
      </div>
    </section>
  )
}

export default Contact