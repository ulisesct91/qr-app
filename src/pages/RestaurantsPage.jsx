import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import RestaurantList from "../components/RestaurantList";
import RestaurantFormModal from "../components/RestaurantFormModal";
import { Button } from "react-bootstrap";

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([
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
    {
      id: 2,
      name: "Restaurante La Parrilla",
      representative: "María Pérez",
      email: "maria@parrilla.com",
      phone: "555-5678",
      plan: "Estándar",
      slug: "la-parrilla",
      color: "#00ff00",
      status: "Inactivo",
      createdAt: "2023-09-10",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleSave = (newRestaurant) => {
    setRestaurants((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newRestaurant,
        status: "Activo",
        createdAt: new Date().toISOString().split("T")[0],
      },
    ]);
  };

  const handleToggleStatus = (id) => {
    setRestaurants((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "Activo" ? "Inactivo" : "Activo" }
          : r
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este restaurante?")) {
      setRestaurants((prev) => prev.filter((r) => r.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Restaurantes</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          + Crear Restaurante
        </Button>
      </div>

      <RestaurantList
        restaurants={restaurants}
        onToggleStatus={handleToggleStatus}
        onDelete={handleDelete}
      />

      <RestaurantFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSave}
        existingSlugs={restaurants.map((r) => r.slug)}
      />
    </DashboardLayout>
  );
}

export default RestaurantsPage;
