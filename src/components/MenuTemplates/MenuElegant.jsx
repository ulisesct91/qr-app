import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// 🎨 Estilos elegantes
const SectionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 2px solid #d4c9b6;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  color: #2c2c2c;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemName = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: #333;
`;

const ItemDesc = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin: 0;
`;

const ItemPrice = styled.span`
  font-weight: 700;
  color: #2c5e3f;
  font-size: 1rem;
`;

function MenuElegant({ productos }) {
  return (
    <Container className="py-4">
      {productos.map((categoria, idx) => (
        <div key={idx} className="mb-5">
          <SectionTitle>{categoria.categoria}</SectionTitle>
          <Row>
            {categoria.items.map((item, i) => (
              <Col xs={12} md={6} lg={4} key={i} className="mb-4">
                <div>
                  <div className="d-flex justify-content-between align-items-start">
                    <ItemName>{item.nombre}</ItemName>
                    <ItemPrice>${item.precio}</ItemPrice>
                  </div>
                  <ItemDesc>{item.descripcion}</ItemDesc>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default MenuElegant;
