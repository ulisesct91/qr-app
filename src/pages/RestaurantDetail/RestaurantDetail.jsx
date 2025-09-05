import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/restaurantes.json";
import templates from "../../data/templates.json";
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
import LogoutButton from "../../components/LogoutButton"; // 👈 botón logout

function RestaurantDetail() {
  const { slug } = useParams();
  const restaurante = data.find((r) => r.slug === slug);

  const [selectedTemplate, setSelectedTemplate] = useState(
    restaurante?.template || "classic"
  );

  if (!restaurante) {
    return <h2 className="text-center py-5">Restaurante no encontrado</h2>;
  }

  const menuUrl = `${window.location.origin}/menu/${restaurante.slug}`;

  return (
    <Container className="py-5">
      {/* Encabezado con nombre + logout */}
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <h1 className="mb-0">{restaurante.nombre}</h1>
          <LogoutButton /> {/* 👈 botón de cerrar sesión */}
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={4} className="text-center">
          <img
            src={restaurante.media.logo}
            alt={restaurante.nombre}
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </Col>
        <Col md={8}>
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

          {/* Redes sociales */}
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

          {/* Selector de template dinámico */}
          <div className="mt-4">
            <Form.Group controlId="templateSelect">
              <Form.Label>
                <strong>Selecciona el Template de Menú</strong>
              </Form.Label>
              <Form.Select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
              >
                {templates.map((tpl) => (
                  <option key={tpl.id} value={tpl.id}>
                    {tpl.nombre} — {tpl.descripcion}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>
        </Col>
      </Row>

      {/* QR y botón para ver menú */}
      <Row className="mt-5">
        <Col md={6} className="text-center">
          <h4>
            <FontAwesomeIcon icon={faQrcode} className="me-2" />
            Escanea el QR
          </h4>
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
