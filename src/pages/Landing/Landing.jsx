import React from "react";
import { Link } from "react-router-dom";
import demos from "../../data/demos.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Landing() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">
        Descubre cómo se vería tu menú digital
      </h1>
      <p className="text-center text-muted mb-5">
        Explora nuestros estilos de menús digitales y elige el que más se adapte
        a tu restaurante.
      </p>

      <Row>
        {demos.map((demo) => (
          <Col key={demo.id} xs={12} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>{demo.nombre}</Card.Title>
                  <Card.Text className="text-muted">{demo.tagline}</Card.Text>
                </div>
                <div className="text-center mt-3">
                  <Link to={`/demo/${demo.slug}`}>
                    <Button variant="primary">Ver demo</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Landing;
