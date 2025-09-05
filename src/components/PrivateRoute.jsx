import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// Lista blanca de correos autorizados
const allowedEmails = ["ulisesct91@gmail.com", "david.toscanoruiz@gmail.com"];

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p className="text-center mt-5">Cargando...</p>;
  }

  // Si no hay usuario, redirigimos al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si el email no está en la lista blanca, acceso denegado
  if (!allowedEmails.includes(user.email)) {
    return (
      <h2 className="text-center mt-5 text-danger">
        Acceso denegado. Este usuario no tiene permisos de administrador.
      </h2>
    );
  }

  // Si todo bien, renderizamos la ruta
  return children;
}

export default PrivateRoute;
