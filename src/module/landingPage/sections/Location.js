import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Location() {
    return (
        <div className="section-lokasi" id="section-lokasi">
        <Container fluid>
          <Row>
            <Col md={{size: 10 , offset: 1}} >
              <h2 className="header-lokasi">Sewa Mobil di (Lokasimu) Sekarang!</h2>
              <p className="text-lokasi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className="button-lokasi mx-auto">Mulai Sewa Mobil</button>
            </Col>
          </Row>
        </Container>
      </div>
    )
}