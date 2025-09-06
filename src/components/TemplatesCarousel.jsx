// TemplatesCarousel.jsx - Versión mejorada
import React from "react";
import { Container, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TemplatesCarousel.css";

const templates = [
  {
    id: 1,
    nombre: "Elegante Clásico",
    imagen: "/images/templates/template1.PNG",
    descripcion:
      "Perfecto para restaurantes de alta cocina y ambiente sofisticado",
  },
  {
    id: 2,
    nombre: "Moderno Minimalista",
    imagen: "/images/templates/template2.PNG",
    descripcion: "Diseño limpio y contemporáneo para espacios modernos",
  },
  {
    id: 3,
    nombre: "Gourmet Premium",
    imagen: "/images/templates/template3.PNG",
    descripcion: "Para experiencias gastronómicas exclusivas y premium",
  },
  {
    id: 4,
    nombre: "Casual Friendly",
    imagen: "/images/templates/template4.PNG",
    descripcion: "Ambiente relajado, perfecto para restaurantes familiares",
  },
  {
    id: 5,
    nombre: "Fusión Creativa",
    imagen: "/images/templates/template5.PNG",
    descripcion: "Estilo único para conceptos gastronómicos innovadores",
  },
  {
    id: 6,
    nombre: "Mediterráneo",
    imagen: "/images/templates/template6.PNG",
    descripcion: "Inspirado en la cocina y ambiente mediterráneo",
  },
  {
    id: 7,
    nombre: "Urban Street",
    imagen: "/images/templates/template7.PNG",
    descripcion: "Perfecto para food trucks y comida urbana casual",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1200 },
    items: 4,
    slidesToSlide: 2,
  },
  laptop: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

// Botones de navegación personalizados
const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <button
        className={
          currentSlide === 0 ? "carousel-nav disabled" : "carousel-nav"
        }
        onClick={() => previous()}
        disabled={currentSlide === 0}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>
      <button className="carousel-nav" onClick={() => next()}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>
    </div>
  );
};

function TemplatesCarousel() {
  return (
    <section className="templates-carousel-section">
      <Container className="py-5">
        {/* Header Section */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title mb-4">
            Elige el <span className="text-primary">Template Perfecto</span>{" "}
            para tu Restaurante
          </h2>
          <p className="section-subtitle">
            Diseños profesionales creados especialmente para cada tipo de
            negocio gastronómico
          </p>
        </div>

        {/* Carousel */}
        <div className="templates-carousel-wrapper">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
            containerClass="templates-carousel-container"
            itemClass="template-carousel-item"
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<CustomButtonGroup />}
          >
            {templates.map((template) => (
              <div key={template.id} className="template-card">
                <div className="template-card-inner">
                  {/* Image Container */}
                  <div className="template-image-container">
                    <img
                      src={template.imagen}
                      alt={template.nombre}
                      className="template-image"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' fill='%23f8f9fa'%3E%3Crect width='100%25' height='100%25' fill='%23e9ecef'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236c757d' font-size='14'%3E${template.nombre}%3C/text%3E%3C/svg%3E`;
                      }}
                    />

                    {/* Hover Overlay */}
                    <div className="template-overlay">
                      <Button
                        variant="light"
                        size="sm"
                        className="preview-btn fw-bold"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="me-2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        VISTA PREVIA
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="template-content">
                    <h3 className="template-name">{template.nombre}</h3>
                    <p className="template-description">
                      {template.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* CTA Section */}
        <div className="templates-cta text-center mt-5">
          <Button
            variant="outline-primary"
            size="lg"
            className="fw-medium px-4 py-3"
          >
            Ver Todos los Templates
          </Button>
          <p className="small text-muted mt-3 mb-0">
            +15 diseños profesionales disponibles
          </p>
        </div>
      </Container>
    </section>
  );
}

export default TemplatesCarousel;
