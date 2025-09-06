import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./PlansSection.css";

const plans = [
  {
    id: 1,
    nombre: "Gratis",
    precio: "Gratis por 1 mes",
    beneficios: ["1 menú básico", "QR con marca", "Sin imágenes"],
    cta: "EMPEZAR GRATIS",
    destacado: false,
  },
  {
    id: 2,
    nombre: "Estándar",
    precio: "$99 MXN/mes",
    beneficios: [
      "Menús ilimitados",
      "Sin publicidad",
      "Soporte básico",
      "Personalización avanzada",
    ],
    cta: "SUSCRIBIRSE",
    destacado: true,
  },
];

function PlansSection() {
  return (
    <section className="plans-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="plans-title mb-3">
            Elige el <span className="text-primary">Plan Ideal</span> para tu
            Restaurante
          </h2>
          <p className="plans-subtitle">
            Comienza gratis o escala a un plan profesional por solo $99 al mes
          </p>
        </div>

        {/* Cards */}
        <Row className="justify-content-center">
          {plans.map((plan) => (
            <Col xs={12} md={6} lg={5} key={plan.id} className="mb-4">
              <Card
                className={`plan-card ${plan.destacado ? "plan-featured" : ""}`}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h4 className="plan-name">{plan.nombre}</h4>
                    <h3 className="plan-price">{plan.precio}</h3>
                    <ul className="plan-benefits list-unstyled mt-3">
                      {plan.beneficios.map((b, i) => (
                        <li key={i} className="benefit-item">
                          <span className="check-icon">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <Button
                      variant={plan.destacado ? "primary" : "outline-primary"}
                      size="lg"
                      className="w-100 fw-bold"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default PlansSection;
