import React from "react";
import { Component } from "react";
import {Col, Container, Row } from "reactstrap";
import { Card, CardBody, CardColumns } from "reactstrap";
import App from "../../../App";
export default function WhySection() {
    return (
    <div className="whyus" id="whyus">
        <Container fluid className="whyus" id="whyus">
          <Row>
            <h3 className="why-title">Why Us ?</h3>
            <h4 className="why-content">Mengapa harus pilih Binar Car Rental? </h4>
          </Row>
          <Row>
            <col md={3}>
              <Card>
                <CardBody>
                  <img src={require("../../../assets/img/icon_complete.png")} />
                  <h4 className="title-card">Mobil Lengkap</h4>
                  <p className="text-card">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </CardBody>
               </Card>
            </col>
            <col md={3}>
              <Card>
                <CardBody>
                  <img src={require("../../../assets/img/icon_price.png")} />
                  <h4 className="title-card">Harga Murah</h4>
                  <p className="text-card">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </CardBody>
              </Card>
            </col>
            <col md={3}>
              <Card>
                <CardBody>
                  <img src={require("../../../assets/img/icon_24hrs.png")} />
                  <h4 className="title-card">Layanan 24 Jam</h4>
                  <p className="text-card">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </CardBody>
              </Card>
            </col>
            <col md={3}>
              <Card>
                <CardBody>
                  <img src={require("../../../assets/img/icon_professional.png")}/>
                  <h4 className="title-card">Sopir Professional</h4>
                  <p className="text-card">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </CardBody>
              </Card>
            </col>
          </Row>
        </Container>
    </div>



    )
};