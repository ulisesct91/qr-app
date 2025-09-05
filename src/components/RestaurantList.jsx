import { Table, Button } from "react-bootstrap";

function RestaurantList({ restaurants }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
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
              <Button size="sm" variant="info" className="me-2">
                Ver
              </Button>
              <Button size="sm" variant="warning" className="me-2">
                Editar
              </Button>
              <Button size="sm" variant="danger">
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
