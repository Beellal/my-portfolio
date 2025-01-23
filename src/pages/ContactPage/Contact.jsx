import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  //S'affiche pendant 5 secondes et disparaisse , le retour apres soumission
  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => {
        setDone(false);
        // Réinitialiser les champs après l'envoi réussi
        setNom('');
        setEmail('');
        setMessage('');
        setError('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  });

  const handleEnvoi = () => {
    // Logique d'envoi
    if (!nom || !email || !message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

   
    setDone(true);
  };


  
  const sendEmail = (e) => {
    e.preventDefault();
    if (!nom || !email || !message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return; }

    emailjs
      .sendForm(
        "service_8n3dnu4",
        "template_j676d9o",
        form.current,
        "HOZ8zcdbHwbyu14WA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setError('');
        },
        (error) => {
          console.log(error.text);
          setError("Une erreur s'est produite lors de l'envoi du formulaire.");
        }
      );
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title" style={{ color: darkMode ? "White" : "" }}>
        Get In Touch
      </h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3
            className="contact_title"
            style={{ color: darkMode ? "rgb(255, 76, 97)" : "" }}
          >
            Parlons de tout !
          </h3>
          <p className="contact_details">
            Préférez-vous une approche différente ? Envoyez-moi un e-mail.
          </p>
        </div>

        <form
          action=""
          className="contact_form"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                name="from_name"
                type="text"
                className="contact_form-input to_name from_name"
                placeholder="Entrer votre nom"
                onChange={(e) => setNom(e.target.value)}
                value={nom}
              />
            </div>

            <div className="contact_form-div">
              <input
                name="user_email"
                type="email"
                className="contact_form-input"
                placeholder="Entrer votre e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>

          {/* <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Insérez votre sujet"
            />
          </div> */}

          <div className="contact_form-div contact_form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact_form-input "
              placeholder="Rédigez votre message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>

          <button className="btn" type="submit" onClick={handleEnvoi}>
            Envoyer le message
          </button>
          <br />
          
        </form>
        <h3 className="confirme">
            {done && "Merci de m'avoir contacter !"}
            {error && <p className="error_message">{error}</p>}
        </h3>
      </div>
    </section>
  );
};

export default Contact;
