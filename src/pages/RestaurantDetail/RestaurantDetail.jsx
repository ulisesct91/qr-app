import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/restaurantes.json";
import { Container, Row, Col, Button, ListGroup, Form } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faUser,
  faCreditCard,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function RestaurantDetail() {
  const { slug } = useParams();
  const restaurante = data.find((r) => r.slug === slug);

  // estado local para template seleccionado
  const [selectedTemplate, setSelectedTemplate] = useState(
    restaurante?.template || "classic"
  );

  if (!restaurante) {
    return <h2 className="text-center py-5">Restaurante no encontrado</h2>;
  }

  const menuUrl = `${window.location.origin}/menu/${restaurante.slug}`;

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={4} className="text-center">
          <img
            src={restaurante.media.logo}
            alt={restaurante.nombre}
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </Col>
        <Col md={8}>
          <h1>{restaurante.nombre}</h1>
          <p className="text-muted">{restaurante.tagline}</p>

          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="me-2 text-danger"
              />
              {restaurante.sucursales[0].direccion}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
              {restaurante.sucursales[0].telefono}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faUser} className="me-2 text-primary" />
              Encargado: {restaurante.encargado.nombre} (
              {restaurante.encargado.telefono})
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon
                icon={faCreditCard}
                className="me-2 text-warning"
              />
              Métodos de pago: {restaurante.metodos_pago.join(", ")}
            </ListGroup.Item>
          </ListGroup>

          <div className="mt-3">
            {restaurante.redes.instagram && (
              <a
                href={restaurante.redes.instagram}
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            )}
            {restaurante.redes.facebook && (
              <a
                href={restaurante.redes.facebook}
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            )}
            {restaurante.redes.tiktok && (
              <a
                href={restaurante.redes.tiktok}
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            )}
          </div>

          {/* Selector de template */}
          <div className="mt-4">
            <Form.Group controlId="templateSelect">
              <Form.Label>
                <strong>Selecciona el Template de Menú</strong>
              </Form.Label>
              <Form.Select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
              >
                <option value="classic">Classic</option>
                <option value="modern">Modern</option>
                <option value="elegant">Elegant</option>
              </Form.Select>
            </Form.Group>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6} className="text-center">
          <h4>
            <FontAwesomeIcon icon={faQrcode} className="me-2" />
            Escanea el QR
          </h4>
          {/* El QR apunta al menú con el template seleccionado */}
          <QRCodeCanvas
            value={`${menuUrl}?template=${selectedTemplate}`}
            size={200}
          />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Link to={`/menu/${restaurante.slug}?template=${selectedTemplate}`}>
            <Button variant="primary" size="lg">
              Ver Menú ({selectedTemplate})
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default RestaurantDetail;
