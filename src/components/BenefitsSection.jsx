import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Smartphone, Zap, Palette } from "lucide-react";
import "./BenefitsSection.css";

const benefits = [
  {
    id: 1,
    icon: <Smartphone size={40} strokeWidth={1.5} />,
    titulo: "Digitaliza sin apps",
    descripcion:
      "Tus clientes solo escanean el código QR, sin necesidad de descargar nada.",
  },
  {
    id: 2,
    icon: <Zap size={40} strokeWidth={1.5} />,
    titulo: "Actualiza al instante",
    descripcion:
      "Cambia precios y platillos en segundos desde tu panel de control.",
  },
  {
    id: 3,
    icon: <Palette size={40} strokeWidth={1.5} />,
    titulo: "Diseños premium",
    descripcion:
      "Impresiona con menús elegantes y profesionales listos para tu restaurante.",
  },
];

function BenefitsSection() {
  return (
    <section className="benefits-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="benefits-title">
            ¿Por qué elegir <span className="text-primary">QR Fácil MX</span>?
          </h2>
          <p className="benefits-subtitle">
            Nuestra plataforma está pensada para hacerte la vida más fácil y que
            tu negocio crezca
          </p>
        </div>

        {/* Benefits */}
        <Row className="text-center">
          {benefits.map((benefit) => (
            <Col xs={12} md={4} key={benefit.id} className="mb-4">
              <div className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h5 className="benefit-title">{benefit.titulo}</h5>
                <p className="benefit-description">{benefit.descripcion}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default BenefitsSection;
