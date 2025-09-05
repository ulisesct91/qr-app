import DashboardLayout from "../layouts/DashboardLayout";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";
import { useState, useRef } from "react";
import RestaurantFormModal from "../components/RestaurantFormModal";

const mockRestaurants = [
  {
    id: 1,
    name: "Taquería El Güero",
    representative: "Pedro López",
    email: "pedro@guero.com",
    phone: "555-1234",
    plan: "Básico",
    slug: "taqueria-el-guero",
    color: "#ff0000",
    status: "Activo",
    createdAt: "2023-09-01",
  },
];

function RestaurantDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState(mockRestaurants);
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  const [showEditModal, setShowEditModal] = useState(false);
  const qrRef = useRef();

  if (!restaurant) {
    return (
      <DashboardLayout>
        <h2>Restaurante no encontrado</h2>
      </DashboardLayout>
    );
  }

  const publicUrl = `https://miapp.com/${restaurant.slug}`;

  const handleUpdate = (updatedRestaurant) => {
    setRestaurants((prev) =>
      prev.map((r) =>
        r.id === restaurant.id ? { ...r, ...updatedRestaurant } : r
      )
    );
  };

  const handleSuspend = () => {
    setRestaurants((prev) =>
      prev.map((r) =>
        r.id === restaurant.id ? { ...r, status: "Inactivo" } : r
      )
    );
  };

  const handleDelete = () => {
    if (window.confirm("¿Seguro que quieres eliminar este restaurante?")) {
      setRestaurants((prev) => prev.filter((r) => r.id !== restaurant.id));
      navigate("/restaurants"); // volver a la lista
    }
  };

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${restaurant.slug}-qr.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <DashboardLayout>
      <h1>Detalles de Restaurante</h1>

      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <h4>Datos principales</h4>
              <p>
                <b>Nombre:</b> {restaurant.name}
              </p>
              <p>
                <b>Representante:</b> {restaurant.representative || "-"}
              </p>
              <p>
                <b>Email:</b> {restaurant.email}
              </p>
              <p>
                <b>Teléfono:</b> {restaurant.phone || "-"}
              </p>
              <p>
                <b>Plan:</b> {restaurant.plan}
              </p>
              <p>
                <b>Slug:</b> {restaurant.slug}
              </p>
              <p>
                <b>Estado:</b> {restaurant.status}
              </p>
              <p>
                <b>Fecha alta:</b> {restaurant.createdAt}
              </p>
              <div
                className="mt-2"
                style={{
                  width: "40px",
                  height: "20px",
                  backgroundColor: restaurant.color,
                  border: "1px solid #ccc",
                }}
              ></div>
              <div className="d-flex gap-2 mt-3">
                <Button
                  variant="warning"
                  onClick={() => setShowEditModal(true)}
                >
                  Editar
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleSuspend}
                  disabled={restaurant.status === "Inactivo"}
                >
                  Suspender
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  Eliminar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-3">
            <Card.Body className="text-center" ref={qrRef}>
              <h4>QR del menú</h4>
              <QRCodeCanvas value={publicUrl} size={180} />
              <div className="mt-3">
                <Button variant="primary" onClick={downloadQR}>
                  Descargar QR
                </Button>
              </div>
              <div className="mt-3">
                <a href={publicUrl} target="_blank" rel="noreferrer">
                  {publicUrl}
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal de edición */}
      <RestaurantFormModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        handleSave={handleUpdate}
        existingSlugs={restaurants.map((r) => r.slug)}
        initialData={restaurant}
        mode="edit"
      />
    </DashboardLayout>
  );
}

export default RestaurantDetailsPage;
