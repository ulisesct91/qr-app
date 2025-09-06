// Landing.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Landing.css";
import TemplatesCarousel from "../../components/TemplatesCarousel";
import PlansSection from "../../components/PlansSection";
import BenefitsSection from "../../components/BenefitsSection";
import FinalCTA from "../../components/FinalCTA";

function Landing() {
  return (
    <>
      {/* NAVBAR */}
      <header className="landing-header">
        <Container fluid className="px-4">
          <div className="d-flex align-items-center justify-content-between py-3">
            <img
              src="/images/logos/logo-lineal-negro.png"
              alt="QR Fácil MX"
              className="logo"
            />
            <Button
              variant="primary"
              size="lg"
              className="fw-bold px-4 d-none d-md-block cta-button"
            >
              CREAR QR GRATIS
            </Button>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="landing-hero">
        <Container className="py-5">
          <Row className="align-items-center min-vh-hero">
            {/* Texto */}
            <Col xs={12} lg={6} className="mb-5 mb-lg-0 pe-lg-5">
              <div className="hero-content">
                <h1 className="hero-title mb-4">
                  Digitaliza tu Restaurante con{" "}
                  <span className="text-primary">Códigos QR</span> Profesionales
                </h1>

                <p className="hero-subtext mb-4">
                  Menús digitales elegantes que impresionan a tus clientes y
                  aumentan tus ventas.
                  <br />
                  <span className="fw-medium">
                    Sin apps, sin complicaciones.
                  </span>
                </p>

                <div className="hero-actions">
                  <Button
                    variant="primary"
                    size="lg"
                    className="fw-bold px-5 py-3 mb-3 cta-button-primary"
                  >
                    CREAR MI MENÚ GRATIS
                  </Button>
                </div>
              </div>
            </Col>

            {/* Imagen */}
            <Col xs={12} lg={6}>
              <div className="hero-image-container text-center">
                <img
                  src="/images/landing/mockup-phone.png"
                  alt="Menú digital profesional en smartphone"
                  className="img-fluid phone-mockup"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <TemplatesCarousel />
      <PlansSection />
      <BenefitsSection />
      <FinalCTA />
    </>
  );
}

export default Landing;
