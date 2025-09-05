import { Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido */}
      <div className="content flex-grow-1 p-4">
        <Container fluid>{children}</Container>
      </div>
    </div>
  );
}

export default DashboardLayout;
