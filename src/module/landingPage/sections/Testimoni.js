import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import rateImage from "../../../assets/img/Rate.png";
import testi2 from "../../../assets/img/testi2.png";
import testi3 from "../../../assets/img/testi3.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

export default function Testimoni() {
  const swiper = useSwiper();
  return (
    <div className="testimonial" id="testimonial">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="title-testi">Testimonial</h2>
            <p className="text-testi">
              Berbagai review positif dari para pelanggan kami
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="scroll-container swiper" id="cardContainer">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div
            className="scroll-content d-md-inline-flex swiper-wrapper"
            id="cardWrapper"
          >
            <SwiperSlide>
              <Card
                className="mb-3 swiper-slide"
                id="card-content"
                style={{ maxWidth: "540px" }}
              >
                <Row g={0}>
                  <Col md={4}>
                    <img
                      src={testi2}
                      className="img-fluid rounded-start"
                      alt="profile-testimoni"
                    />
                  </Col>
                  <Col md={8}>
                    <CardBody>
                      <CardTitle>
                        <img src={rateImage} alt="rating" />
                      </CardTitle>
                      <CardText className="card-text1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est iure iusto magnam neque cum, sapiente eum non ipsa
                        rerum praesentium veritatis consequuntur sunt voluptates
                        expedita ut ipsam dolorum provident sequi?
                      </CardText>
                      <CardText>
                        <small className="text-muted">John Dee 32,Bromo</small>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                className="mb-3 swiper-slide"
                id="card-content"
                style={{ maxWidth: "540px" }}
              >
                <Row g={0}>
                  <Col md={4}>
                    <img
                      src={testi3}
                      className="img-fluid rounded-start"
                      alt="profile-testimoni"
                    />
                  </Col>
                  <Col md={8}>
                    <CardBody>
                      <CardTitle>
                        <img src={rateImage} alt="rating" />
                      </CardTitle>
                      <CardText className="card-text1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est iure iusto magnam neque cum, sapiente eum non ipsa
                        rerum praesentium veritatis consequuntur sunt voluptates
                        expedita ut ipsam dolorum provident sequi?
                      </CardText>
                      <CardText>
                        <small className="text-muted">John Dee 32,Bromo</small>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                className="mb-3 swiper-slide"
                id="card-content"
                style={{ maxWidth: "540px" }}
              >
                <Row g={0}>
                  <Col md={4}>
                    <img
                      src={testi2}
                      className="img-fluid rounded-start"
                      alt="profile-testimoni"
                    />
                  </Col>
                  <Col md={8}>
                    <CardBody>
                      <CardTitle>
                        <img src={rateImage} alt="rating" />
                      </CardTitle>
                      <CardText className="card-text1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est iure iusto magnam neque cum, sapiente eum non ipsa
                        rerum praesentium veritatis consequuntur sunt voluptates
                        expedita ut ipsam dolorum provident sequi?
                      </CardText>
                      <CardText>
                        <small className="text-muted">John Dee 32,Bromo</small>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </SwiperSlide>
          </div>
          <div className="button-active">
            <button
              id="scroll-left"
              onClick={() => swiper.slidePrev()}
              className="swipe-left swiper-navBtn"
            >
              {"<"}
            </button>
            <button
              id="scroll-right"
              onClick={() => swiper.slideNext()}
              className="swipe-right swiper-navBtn"
            >
              {">"}
            </button>
          </div>
        </Swiper>
      </Container>
    </div>
  );
}
