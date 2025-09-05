import { useState, useEffect } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";

function RestaurantFormModal({
  show,
  handleClose,
  handleSave,
  existingSlugs,
  initialData = null,
  mode = "create",
}) {
  const [form, setForm] = useState({
    name: "",
    representative: "",
    email: "",
    phone: "",
    plan: "Básico",
    slug: "",
    logo: null,
    color: "#000000",
  });

  const [slugError, setSlugError] = useState("");
  const [logoPreview, setLogoPreview] = useState(null);

  // Cargar datos iniciales si es edición
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
      if (initialData.logo instanceof File === false && initialData.logo) {
        setLogoPreview(initialData.logo); // si ya hay un logo (url/base64)
      }
    }
  }, [initialData]);

  // Autogenerar slug desde nombre (solo si estamos creando)
  useEffect(() => {
    if (mode === "create" && form.name) {
      const autoSlug = form.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      setForm((prev) => ({ ...prev, slug: autoSlug }));
    }
  }, [form.name, mode]);

  // Verificar unicidad slug
  useEffect(() => {
    if (form.slug && existingSlugs.includes(form.slug)) {
      if (!initialData || form.slug !== initialData.slug) {
        setSlugError("Este slug ya está en uso");
        return;
      }
    }
    setSlugError("");
  }, [form.slug, existingSlugs, initialData]);

  // Manejo de inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setForm((prev) => ({ ...prev, [name]: file }));
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (slugError) return;
    handleSave(form);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {mode === "create" ? "Crear Restaurante" : "Editar Restaurante"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          {/* Campos iguales que antes */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre del restaurante *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre del representante</Form.Label>
            <Form.Control
              type="text"
              name="representative"
              value={form.representative}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email del owner *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Plan inicial</Form.Label>
            <Form.Select name="plan" value={form.plan} onChange={handleChange}>
              <option value="Básico">Básico</option>
              <option value="Estándar">Estándar</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              type="text"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              isInvalid={!!slugError}
            />
            <Form.Control.Feedback type="invalid">
              {slugError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Logo</Form.Label>
            <Form.Control type="file" name="logo" onChange={handleChange} />
            {logoPreview && (
              <div className="mt-2">
                <Image
                  src={logoPreview}
                  alt="Logo Preview"
                  width={80}
                  height={80}
                  rounded
                />
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Color primario</Form.Label>
            <Form.Control
              type="color"
              name="color"
              value={form.color}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            {mode === "create" ? "Guardar" : "Actualizar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RestaurantFormModal;
