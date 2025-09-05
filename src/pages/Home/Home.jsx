import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/restaurantes.json";
import { Container, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">
        <FontAwesomeIcon icon={faUtensils} className="me-2 text-primary" />
        Restaurantes
      </h1>

      <div className="table-responsive">
        <Table striped bordered hover className="align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>Logo</th>
              <th>Nombre</th>
              <th>Tagline</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((restaurante) => (
              <tr key={restaurante.id}>
                <td className="text-center">
                  <img
                    src={restaurante.media.logo}
                    alt={restaurante.nombre}
                    style={{
                      maxWidth: "80px",
                      height: "auto",
                    }}
                  />
                </td>
                <td>{restaurante.nombre}</td>
                <td>{restaurante.tagline}</td>
                <td className="text-center">
                  <Link to={`/restaurante/${restaurante.slug}`}>
                    <Button variant="primary" size="sm">
                      Ver detalles
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Home;
