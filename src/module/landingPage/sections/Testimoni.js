import React, {useRef} from "react";
import { Col, Container, Row } from "reactstrap";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import rateImage from "../../../assets/img/Rate.png";
import testi2 from "../../../assets/img/testi2.png";
import testi3 from "../../../assets/img/testi3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Testimoni() {
  const swiperRef = useRef();
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
      
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
        >
          <div
            className="scroll-content d-md-inline-flex swiper-wrapper"
            id="cardWrapper" 
          >
            <SwiperSlide className="slide-content">
              <Card
                className="mb-3 swiper-slide"
                id="card-content"
                style={{ width: "540px", margin:"auto" }} sm={12}
              >
                <Row g={0} className="row-position">
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
            <SwiperSlide className="slide-content">
              <Card
                className="mb-3 swiper-slide"
                id="card-content"
                style={{ width: "540px", margin:"auto"  }} 
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
            <SwiperSlide className="slide-content">
              <Card
                className="mb-3 swiper-slide"
                id="card-content"
                style={{ width: "540px", margin:"auto" }} sm={12}
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
            <SwiperSlide className="slide-content"> 
              <Card
                className="mb-3 swiper-slide"
                id="card-content"
                style={{ width: "540px",margin:"auto" }} 
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
          </div>
          <div className="button-active">
            <button
              id="scroll-left"
              onClick={() =>swiperRef.current.slidePrev()}
              className="swipe-left swiper-navBtn"
            >
              {"<"}
            </button>
            <button
              id="scroll-right"
              onClick={() => swiperRef.current.slideNext()}
              className="swipe-right swiper-navBtn"
            >
              {">"}
            </button>
          </div>
        </Swiper>
    
    </div>
  );
}
