import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function MenuModern({ productos }) {
  return (
    <div>
      {productos.map((categoria, idx) => (
        <div key={idx} className="mb-5">
          <h3 className="mb-3">{categoria.categoria}</h3>
          <Row>
            {categoria.items.map((item, i) => (
              <Col xs={12} md={6} lg={4} key={i} className="mb-4">
                <Card className="h-100 shadow-sm">
                  {item.imagen && (
                    <Card.Img
                      variant="top"
                      src={item.imagen}
                      alt={item.nombre}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <strong>${item.precio}</strong>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
}

export default MenuModern;
