import DashboardLayout from "../layouts/DashboardLayout";
import RestaurantList from "../components/RestaurantList";

function DashboardPage() {
  // Mock data temporal
  const restaurants = [
    {
      id: 1,
      name: "Taquería El Güero",
      plan: "Básico",
      slug: "taqueria-el-guero",
      status: "Activo",
      createdAt: "2023-09-01",
    },
    {
      id: 2,
      name: "Restaurante La Parrilla",
      plan: "Estándar",
      slug: "la-parrilla",
      status: "Inactivo",
      createdAt: "2023-09-10",
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="mb-4">Restaurantes</h1>
      <RestaurantList restaurants={restaurants} />
    </DashboardLayout>
  );
}

export default DashboardPage;
