import { useAuth } from "../context/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar bg-dark text-white p-3 d-flex flex-column">
      <h3 className="mb-4">QR APP</h3>

      <nav className="flex-column">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `d-block mb-2 nav-link-custom ${isActive ? "active" : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/restaurants"
          className={({ isActive }) =>
            `d-block mb-2 nav-link-custom ${isActive ? "active" : ""}`
          }
        >
          Restaurantes
        </NavLink>

        <NavLink
          to="/plans"
          className={({ isActive }) =>
            `d-block mb-2 nav-link-custom ${isActive ? "active" : ""}`
          }
        >
          Planes
        </NavLink>
      </nav>

      <div className="mt-auto">
        {user && (
          <>
            <p className="small mt-3">{user.email}</p>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-outline-light w-100"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
