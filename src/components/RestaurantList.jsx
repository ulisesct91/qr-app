import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RestaurantList({ restaurants, onToggleStatus, onDelete }) {
  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Plan</th>
          <th>Slug</th>
          <th>Estado</th>
          <th>Fecha de alta</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((r) => (
          <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.plan}</td>
            <td>{r.slug}</td>
            <td>{r.status}</td>
            <td>{r.createdAt}</td>
            <td>
              <Link to={`/restaurants/${r.id}`}>
                <Button size="sm" variant="info" className="me-2">
                  Ver detalles
                </Button>
              </Link>

              <Button
                size="sm"
                variant={r.status === "Activo" ? "secondary" : "success"}
                className="me-2"
                onClick={() => onToggleStatus(r.id)}
              >
                {r.status === "Activo" ? "Suspender" : "Activar"}
              </Button>

              <Button size="sm" variant="danger" onClick={() => onDelete(r.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default RestaurantList;
