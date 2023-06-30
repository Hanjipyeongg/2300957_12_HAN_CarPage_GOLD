import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import checklist from '../../../assets/img/Group 53.png';
import womanImage from '../../../assets/img/img_service.png';
import App from '../../../App';
export default function ServiceSection(){
return (
    <Container fluid>
        <Row>
          <Col md={6}>
            <img src={womanImage} alt="woman_img"/>
          </Col>
          <Col md={6}>
            <h3 className="title-service"> Best Car Rental for any kind of trip in Semarang!</h3>
            <p className="text-service">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <ul className="p-0">
              <li className="list-unstyled">
                <img src={checklist} alt="checklist"/>
                <p className="benefit d-inline-block">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </li>
              <li className="list-unstyled">
                <img src={checklist} alt="checklist" />
                <p className="benefit d-inline-block">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </li>
              <li className="list-unstyled">
                <img src={checklist} alt="checklist" />
                <p className="benefit d-inline-block">Sewa Mobil Jangka Panjang Bulanan </p>
              </li>
              <li className="list-unstyled">
                <img src={checklist} alt="checklist" />
                <p className="benefit d-inline-block">Gratis Antar - Jemput Mobil di Bandara</p>
              </li>
              <li className="list-unstyled">
                <img src={checklist} alt="checklist" />
                <p className="benefit">Layanan Airport Transfer / Drop In Out</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
)
};