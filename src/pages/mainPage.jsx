import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logoImg from "../components/assets/logo-square.png.jpg";
import Directions from "../directions";

export default function MainPage() {
  return (
    <div className="bg-main">
      {/* <div className="bg-logo" aria-hidden="true" /> */}
      <Container className="content">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={7} className="text-center">
            <Image
              src={logoImg}
              alt="LANA CLINIC"
              className="brand-logo mb-2"
            />
            <div className="brand-wordmark">LANA CLINIC</div>
            <p className="brand-tagline">Contact Us</p>{" "}
            <span className="d-flex w-100 justify-content-center">
              <Directions />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
