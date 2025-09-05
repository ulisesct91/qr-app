import React from "react";
import { useParams, Link } from "react-router-dom";
import demos from "../../data/demos.json";
import { Container, Button } from "react-bootstrap";
import { templates as templateComponents } from "../../components/MenuTemplates";
import styled from "styled-components";

const FloatingButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  border-radius: 50px;
  padding: 0.75rem 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

function DemoMenu() {
  const { id } = useParams();
  const demo = demos.find((d) => d.slug === id);

  if (!demo) {
    return <h2 className="text-center py-5">Demo no encontrado</h2>;
  }

  const TemplateComponent =
    templateComponents[demo.template] || templateComponents["classic"];

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">{demo.nombre}</h1>
      <p className="text-center text-muted mb-5">{demo.tagline}</p>

      <TemplateComponent productos={demo.productos} />

      {/* Botón flotante para explorar más */}
      <Link to="/">
        <FloatingButton variant="primary">Ver más estilos</FloatingButton>
      </Link>
    </Container>
  );
}

export default DemoMenu;
