import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg1 from "../assets/img/contact/1.jpg";
import contactImg2 from "../assets/img/contact/2.jpg";
import contactImg3 from "../assets/img/contact/3.jpg";
import contactImg4 from "../assets/img/contact/4.jpg";
import contactImg5 from "../assets/img/contact/5.jpg";
import contactImg6 from "../assets/img/contact/6.jpg";
import contactImg7 from "../assets/img/contact/7.jpg";
import contactImg8 from "../assets/img/contact/8.jpg";
import contactImg9 from "../assets/img/contact/9.jpg";
import contactImg10 from "../assets/img/contact/10.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import "../App.css";
import TrackVisibility from 'react-on-screen';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const form = useRef();

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      await emailjs.sendForm('service_n0iy0ro', 'template_d3xgvsd', e.target, '4wqpCWVzh8wiohwIp');
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      setButtonText("Send");
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  }

  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const email = 'jasminephannd@gmail.com'
  const phone = '0416653565'

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
};

  return (
    <div>
      <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div className="gd-carousel-wrapper">
              <Carousel responsive={responsive} infinite={true} slidesToSlide={1} autoPlay={true} autoPlaySpeed={3000} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={contactImg2} alt="Outdoor 2" />
                </div>
                <div className="item">
                  <img src={contactImg3} alt="Outdoor 3" />
                </div>
                <div className="item">
                  <img src={contactImg5} alt="Outdoor 5" />
                </div>
                <div className="item">
                  <img src={contactImg7} alt="Outdoor 7" />
                </div>
                <div className="item">
                  <img src={contactImg8} alt="Outdoor 8" />
                </div>
                <div className="item">
                  <img src={contactImg9} alt="Outdoor 9" />
                </div>
                <div className="item">
                  <img src={contactImg10} alt="Outdoor 10" />
                </div>
              </Carousel>
            </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <Row>
                  <Col size={12} className="px-1">
                  <button
                    className="icon-button"
                    onMouseEnter={() => setShowEmail(true)}
                    onMouseLeave={() => setShowEmail(false)}
                    onClick={() => handleCopy(email)}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="fa-icon"/>
                    {showEmail ? email : ''}
                  </button>
                </Col>
                <Col size={12} className="px-1">
                  <button
                    className="icon-button"
                    onMouseEnter={() => setShowPhone(true)}
                    onMouseLeave={() => setShowPhone(false)}
                    onClick={() => handleCopy(phone)}
                  >
                    <FontAwesomeIcon icon={faPhone} className="fa-icon"/>
                    {showPhone ? phone : ''}
                  </button>
                  </Col>
                </Row>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="text" value={formDetails.firstName} name="firstName" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="text" value={formDetails.lastName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="email" value={formDetails.email} name="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input required type="tel" value={formDetails.phone} name="phone" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea required rows="6" value={formDetails.message} placeholder="Message" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit" className="button"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                  <Col>
                      <a className="cv" href="https://www.dropbox.com/scl/fi/1ac88sievf68l0joikzz9/Phan-Nguyen-Ngoc-Doan_CV.pdf?rlkey=hbijpt86yuhqbil5u6at53ybt&dl=0" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><span>Download my CV</span><ArrowDownCircle size={25} /></a>
                  </Col>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
          
  )
}
