import React from "react";
import { Container, Row , Col} from "reactstrap";
import iconFacebook from"../../../assets/img/icon_facebook.png";
import iconInstagram from"../../../assets/img/icon_instagram.png";
import iconTwitter from"../../../assets/img/icon_twitter.png";
import iconMail from"../../../assets/img/icon_mail.png";
import iconTwitch from"../../../assets/img/icon_twitch.png";
export default function Footer() {
    return (
        <Footer className="footer-section" id="footer-id">
        <Container fluid>
          <Row>
            <Col md={3}>
              <p className="title-alamat">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p className="title-alamat">binarcarrental@gmail.com</p>
              <p className="title-alamat">081-233-334-808</p>
            </Col>
            <Col md={3}>
              <a href="#service" className="link-href">our service</a>
              <a href="#whyus" className="link-href">Why Us</a>
              <a href="#testimonial" className="link-href">Testimonial</a>
              <a href="#faq" className="link-href">FAQ</a>
            </Col>
            <Col md={3}>
              <p className="text-sosmed">Connect With Us</p>
              <a href="" className="logo-sosmed">
                <img src={iconFacebook} />
              </a>
              <a href="" className="logo-sosmed">
                <img src={iconInstagram}/>
              </a>
              <a href="" className="logo-sosmed">
                <img src={iconTwitter}/>
              </a>
              <a href="" className="logo-sosmed">
                <img src={iconMail}/>
              </a>
              <a href="" className="logo-sosmed">
                <img src={iconTwitch}/>
              </a>
            </Col>
            <Col md={3}>
              <p className="text-copyright">Copyright Binar 2023</p>
              <button className="button-copyright">
                <a href="#hero" className="tag-binar ">Binar</a>
              </button>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
};