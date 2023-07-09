import React from 'react';
import {Col, Container, Row } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
import iconComplete from '../../../assets/img/icon_complete.png';
import iconPrice from '../../../assets/img/icon_price.png';
import iconDay from '../../../assets/img/icon_24hrs.png';
import iconProfessional from '../../../assets/img/icon_professional.png';
export default function WhyUs() {
    return (
    <div className="whyus" id="whyus">
        <Container fluid className="why-container" id="whyus">
          <Row >
            <h3 className="why-title">Why Us ?</h3>
            <h4 className="why-content">Mengapa harus pilih Binar Car Rental? </h4>
          </Row>
          <Row className='row-card'>
            <Col md={3}>
              <Card className='card-container'>
                <CardBody className='card-content'>
                  <img src={iconComplete} alt='icon-like' />
                  <h4 className="title-card">Mobil Lengkap</h4>
                  <p className="text-card">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </CardBody>
               </Card>
            </Col>
            <Col md={3}>
              <Card className='card-container'>
                <CardBody className='card-content'>
                  <img src={iconPrice} alt='icon-price' />
                  <h4 className="title-card">Harga Murah</h4>
                  <p className="text-card">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='card-container'>
                <CardBody className='card-content'>
                  <img src={iconDay} alt='icon-time'/>
                  <h4 className="title-card">Layanan 24 Jam</h4>
                  <p className="text-card">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className='card-container'>
                <CardBody className='card-content'>
                  <img src={iconProfessional} alt='icon-professional'/>
                  <h4 className="title-card">Sopir Professional</h4>
                  <p className="text-card">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>



    )
};