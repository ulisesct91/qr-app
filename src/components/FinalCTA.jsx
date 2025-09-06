import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta-section py-5">
      <Container className="text-center">
        <h2 className="final-cta-title mb-3">
          ¿Listo para <span className="text-primary">digitalizar</span> tu
          restaurante?
        </h2>
        <p className="final-cta-subtitle mb-4">
          Crea tu primer menú QR en minutos y ofrece una experiencia moderna a
          tus clientes.
        </p>

        {/* Botón principal */}
        <Button
          variant="light"
          size="lg"
          className="px-5 py-3 fw-bold final-cta-button"
        >
          CREAR MI MENÚ GRATIS
        </Button>

        {/* Logo debajo */}
        <div className="cta-logo mt-4">
          <img
            src="/images/logos/logo-bg-blanco.png"
            alt="QR Fácil MX"
            className="cta-logo-img"
          />
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;
