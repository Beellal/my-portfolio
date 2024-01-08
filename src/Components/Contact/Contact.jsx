import React from 'react';
import './Contact.css';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
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

        <form action="" className="contact_form">
          <div className="contact_form-group">

            <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Insert Your name' />
            </div>

            <div className="contact_form-div">
              <input type="email" className="contact_form-input" placeholder='Insert Your email' />
            </div>


          </div>

          <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Insert Your subject' />
          </div>

          <div className="contact_form-div contact_form-area">
              <textarea name="" id="" cols="30" rows="10" 
              className='contact_form-input' placeholder='Write your message'>

              </textarea>
          </div>

          <button className="btn">Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact