import React from "react";
import { Container, Row, Col } from "reactstrap";
import iconFacebook from "../../assets/img/icon_facebook.png";
import iconInstagram from "../../assets/img/icon_instagram.png";
import iconTwitter from "../../assets/img/icon_twitter.png";
import iconMail from "../../assets/img/icon_mail.png";
import iconTwitch from "../../assets/img/icon_twitch.png";
export default function Footer() {
  return (
    <div className="footer-section" id="footer-id">
      <Container fluid>
        <Row>
          <Col md={4}>
            <p className="title-alamat">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </p>
            <p className="title-alamat">binarcarrental@gmail.com</p>
            <p className="title-alamat">081-233-334-808</p>
          </Col>
          <Col md={2} className="space-between">
            <a href="#service" className="link-href">
              Our service
            </a>
            <a href="#whyus" className="link-href">
              Why Us
            </a>
            <a href="#testimonial" className="link-href">
              Testimonial
            </a>
            <a href="#faq" className="link-href">
              FAQ
            </a>
          </Col>
          <Col md={3}>
            <p className="text-sosmed">Connect With Us</p>
            <a href="/facebook" className="logo-sosmed">
              <img src={iconFacebook} alt="icon-facebook" />
            </a>
            <a href="/insagram" className="logo-sosmed">
              <img src={iconInstagram} alt="icon-instagram" />
            </a>
            <a href="/twitter" className="logo-sosmed">
              <img src={iconTwitter} alt="icon-twitter" />
            </a>
            <a href="/mail" className="logo-sosmed">
              <img src={iconMail} alt="icon-mail" />
            </a>
            <a href="/twitch" className="logo-sosmed">
              <img src={iconTwitch} alt="icon-twitch" />
            </a>
          </Col>
          <Col md={3}>
            <p className="text-copyright">Copyright Binar 2023</p>
            <button className="button-copyright">
              <a href="#hero" className="tag-binar ">
                Binar
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
