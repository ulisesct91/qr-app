import { Card, Row, Col } from "react-bootstrap";

function DashboardWidgets({ restaurants }) {
  const total = restaurants.length;
  const activos = restaurants.filter((r) => r.status === "Activo").length;
  const inactivos = restaurants.filter((r) => r.status === "Inactivo").length;

  // 🔹 Simulación de MRR: cada plan Básico = 300 MXN, Estándar = 600 MXN
  const mrr = restaurants.reduce((acc, r) => {
    if (r.plan === "Básico") return acc + 300;
    if (r.plan === "Estándar") return acc + 600;
    return acc;
  }, 0);

  // 🔹 Mock de alertas: restaurantes con fecha alta > 20 días atrás = "a punto de expirar"
  const alertas = restaurants.filter((r) => {
    const created = new Date(r.createdAt);
    const hoy = new Date();
    const diff = (hoy - created) / (1000 * 60 * 60 * 24); // días
    return diff > 20 && r.status === "Activo";
  }).length;

  return (
    <Row className="mb-4">
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>Total Restaurantes</h5>
            <h2>{total}</h2>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>Activos</h5>
            <h2>{activos}</h2>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>Inactivos</h5>
            <h2>{inactivos}</h2>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <h5>MRR Aproximado</h5>
            <h2>${mrr} MXN</h2>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} className="mt-3">
        <Card className="text-center shadow-sm border-warning">
          <Card.Body>
            <h5>Alertas</h5>
            <p>{alertas} cuentas a punto de expirar</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default DashboardWidgets;
