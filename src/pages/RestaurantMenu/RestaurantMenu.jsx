import React from "react";
import { useParams, useLocation } from "react-router-dom";
import data from "../../data/restaurantes.json";
import { Container } from "react-bootstrap";
import { templates } from "../../components/MenuTemplates";

function RestaurantMenu() {
  const { slug } = useParams();
  const location = useLocation();

  const restaurante = data.find((r) => r.slug === slug);

  if (!restaurante) {
    return <h2 className="text-center py-5">Restaurante no encontrado</h2>;
  }

  const params = new URLSearchParams(location.search);
  const templateParam = params.get("template");
  const templateToUse = templateParam || restaurante.template;

  // buscar el componente según el template
  const TemplateComponent = templates[templateToUse] || templates["classic"];

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">{restaurante.nombre}</h1>
      <p className="text-center text-muted mb-5">{restaurante.tagline}</p>

      <TemplateComponent productos={restaurante.productos} />
    </Container>
  );
}

export default RestaurantMenu;
