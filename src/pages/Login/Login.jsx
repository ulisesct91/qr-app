import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 🔹 Login con email y contraseña
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin"); // redirige al panel admin
    } catch (err) {
      setError("Credenciales inválidas o usuario no registrado.");
    }
  };

  // 🔹 Login con Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/admin");
    } catch (err) {
      setError("Error al iniciar sesión con Google.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-4 border rounded shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleEmailLogin}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-3">
            Ingresar
          </Button>
        </Form>

        <Button variant="danger" onClick={handleGoogleLogin} className="w-100">
          Ingresar con Google
        </Button>
      </div>
    </Container>
  );
}

export default Login;
