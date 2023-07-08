import React from "react";
import { useState } from "react";
import { Accordion, Col, Container, Row } from "reactstrap";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
function FAQ() {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <section className="section-question" id="faq">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="title-question">Frequently Asked Question</h2>
            <p className="text-question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              magnam suscipit assumenda doloribus veritatis asperiores,
              reprehenderit alias quia cumque tempora? Perspiciatis animi
              laudantium rerum quibusdam dolorem. Ipsum velit voluptate
              sapiente.
            </p>
          </Col>
          <Col md={6}>
            <Accordion open={open} toggle={toggle}>
              <AccordionItem>
                <AccordionHeader targetId="1">
                  <strong>Apa saja syarat yang dibutuhkan?</strong>
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  <p>-KTP</p>
                  <p>-SIM A</p>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">
                  <strong> Berapa hari minimal sewa mobil lepas kunci?</strong>
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  Maksimal untuk sewa mobil lepas kunci adalah 7 Hari
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">
                  <strong>
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </strong>{" "}
                  '
                </AccordionHeader>
                <AccordionBody accordionId="3">
                  Waktu ideal untuk booking sewa mobil adalah 7 hari sebelum
                  penyewaan
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">
                  <strong>Apakah Ada biaya antar-jemput? </strong>
                </AccordionHeader>
                <AccordionBody accordionId="4">
                  Untuk antar jemput akan dikenakan biaya apabila jarak tempuh
                  antar lokasi berjarak lebih dari 3km
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="5">
                  <strong>Bagaimana jika terjadi kecelakaan? </strong>
                </AccordionHeader>
                <AccordionBody accordionId="5">
                  Bila terjadi kecelakaan dengan menggunakan service sopir
                  pribadi kami , biaya pengobatan akan kami tanggung sesuai
                  dengan keadaan yang bersangkutan. apabila terjadi kecelakaan
                  dikarenakan kelalaian pribadi maka biaya akan ditanggung
                  sepenuhnya oleh customer.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default FAQ;