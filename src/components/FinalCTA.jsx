import React from "react";
import { Container, Button } from "react-bootstrap";
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
        <Button
          variant="primary"
          size="lg"
          className="px-5 py-3 fw-bold final-cta-button"
        >
          CREAR MI MENÚ GRATIS
        </Button>
      </Container>
    </section>
  );
}

export default FinalCTA;
