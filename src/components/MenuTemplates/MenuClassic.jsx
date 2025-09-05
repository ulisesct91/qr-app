import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function MenuClassic({ productos }) {
  return (
    <div>
      {productos.map((categoria, idx) => (
        <Card key={idx} className="mb-4">
          <Card.Header as="h5">{categoria.categoria}</Card.Header>
          <ListGroup variant="flush">
            {categoria.items.map((item, i) => (
              <ListGroup.Item key={i}>
                <div className="d-flex justify-content-between">
                  <span>
                    <strong>{item.nombre}</strong> - {item.descripcion}
                  </span>
                  <span>${item.precio}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default MenuClassic;
