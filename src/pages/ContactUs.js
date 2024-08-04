import React, { useEffect } from 'react';
import Page from '../components/Page';
import '../css/ContactUs.css'

const ContactForm = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <Page title ="Conatct US" >
    <div className="container22222">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            To Provide Feedback or report an issue, please fill out the form or contact via email or phone.
          </p>
          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>
              <p><a href="https://www.google.com/maps/place/SBCET,Benad+Road,Jhotwara,Jaipur+302013" target="_blank" rel="noopener noreferrer">
              SBCET, Benad Road, Jhotwara, Jaipur 302013</a></p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i>
              <p><a href="mailto:support@ankitiptv.com">support@ankitiptv.com</a></p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>
              <p><a href="tel:1023-456-789">1023-456-789</a></p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="/error">
                <i className="fab fa-facebook-f">F</i>
              </a>
              <a href="/error">
                <i className="fab fa-twitter">X</i>
              </a>
              <a href="/error">
                <i className="fab fa-instagram">I</i>
              </a>
              <a href="/error">
                <i className="fab fa-linkedin-in">L</i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
    </Page>
  );
};

export default ContactForm;
