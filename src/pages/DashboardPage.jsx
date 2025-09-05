import DashboardLayout from "../layouts/DashboardLayout";
import DashboardWidgets from "../components/DashboardWidgets";
import { useState } from "react";

function DashboardPage() {
  const [restaurants] = useState([
    {
      id: 1,
      name: "Taquería El Güero",
      plan: "Básico",
      slug: "taqueria-el-guero",
      status: "Activo",
      createdAt: "2023-08-01",
    },
    {
      id: 2,
      name: "Restaurante La Parrilla",
      plan: "Estándar",
      slug: "la-parrilla",
      status: "Inactivo",
      createdAt: "2023-09-10",
    },
    {
      id: 3,
      name: "Mariscos Don Pepe",
      plan: "Básico",
      slug: "mariscos-don-pepe",
      status: "Activo",
      createdAt: "2023-07-20",
    },
  ]);

  return (
    <DashboardLayout>
      <h1 className="mb-4">Dashboard</h1>
      <DashboardWidgets restaurants={restaurants} />
    </DashboardLayout>
  );
}

export default DashboardPage;
