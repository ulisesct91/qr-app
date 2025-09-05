import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // redirige al login
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <Button variant="outline-danger" onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
}

export default LogoutButton;
