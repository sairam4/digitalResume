
import React from "react";
import { motion } from "framer-motion";

import { FaBolt, FaLightbulb, FaComments, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowDown } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import ContactPic from '../Resources/contactpic.png';
import './Contact.css';

const Contact = () => {
  const linkedInLink = 'https://www.linkedin.com/in/khalid-mehtab-khan-0982b1173/';
  const gitHubLink = 'https://github.com/Kahl-d';
  const twitterLink = 'https://twitter.com/ashvatthamaa';
  const instagramLink = 'https://www.instagram.com/ashvatthama.__/';

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-container">
      <motion.div
        className="contact-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={ContactPic} className="contact-pic" alt="Contact" />
        <h1>I'd love to work with you</h1>
        <p>Here are some of my previous work reviews</p>
        <div className="contact-reviews">
          <motion.div
            className="review"
            whileHover={{ scale: 1.1 }}
          >
            <FaBolt />
            <span>Quick at resolution</span>
          </motion.div>
          <motion.div
            className="review"
            whileHover={{ scale: 1.1 }}
          >
            <FaLightbulb />
            <span>Innovative</span>
          </motion.div>
          <motion.div
            className="review"
            whileHover={{ scale: 1.1 }}
          >
            <FaComments />
            <span>Great communication</span>
          </motion.div>
        </div>
      </motion.div>

      <div className="contact-bottom">
        <motion.div
          className="contact-section"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="contact-info">
            <div className="contact-item">
              <div className="inner-item">
                <span className="info-head">You can e-mail me here</span>
                <span className="info-info">email.khalidmkhan@gmail.com</span>
              </div>
              <div className="btn" onClick={() => handleClick('mailto:email.khalidmkhan@gmail.com')}>
                <FaSquareArrowUpRight className="take-arrow" />
              </div>
            </div>
            <div className="contact-item">
              <div className="inner-item">
                <span className="info-head">Give me a call</span>
                <span className="info-info">+1 404 263 7813</span>
              </div>
              <div className="btn" onClick={() => handleClick('tel:+14042637813')}>
                <FaSquareArrowUpRight className="take-arrow" />
              </div>
            </div>
            <div className="contact-item">
              <div className="inner-item">
                <span className="info-head">You can find me in</span>
                <span className="info-info">San Francisco</span>
              </div>
              <div className="btn" onClick={() => handleClick('https://www.google.com/maps/place/San+Francisco')}>
                <FaSquareArrowUpRight className="take-arrow" />
              </div>
            </div>

            <div className="social-profiles">
              <motion.div
                className="social-profile-item"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub className="icons" onClick={() => handleClick(gitHubLink)} />
              </motion.div>
              <motion.div
                className="social-profile-item"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin className="icons" onClick={() => handleClick(linkedInLink)} />
              </motion.div>
              <motion.div
                className="social-profile-item"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter className="icons" onClick={() => handleClick(twitterLink)} />
              </motion.div>
              <motion.div
                className="social-profile-item"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram className="icons" onClick={() => handleClick(instagramLink)} />
              </motion.div>
            </div>
            <div className="resume-div">
              <span>Download Resume</span>
              <FaArrowDown />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <form className="contact-form">
            <div className="form-top">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone" required />
            </div>
            <div className="form-mid">
              <span>Reason for contact</span>
              <div className="radio-options">
                <div>
                  <input type="radio" name="reason" value="work" required />
                  <label>Work</label>
                </div>
                <div>
                  <input type="radio" name="reason" value="collab" required />
                  <label>Collaboration</label>
                </div>
                <div>
                  <input type="radio" name="reason" value="other" required />
                  <label>Other</label>
                </div>
              </div>
            </div>
            <div className="form-bottom">
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
