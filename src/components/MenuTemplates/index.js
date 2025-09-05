import MenuClassic from "./MenuClassic.jsx";
import MenuModern from "./MenuModern.jsx";
import MenuElegant from "./MenuElegant.jsx";

// Aquí vas importando nuevos templates
// clave => componente
export const templates = {
  classic: MenuClassic,
  modern: MenuModern,
  elegant: MenuElegant,
  // en el futuro: minimal, premium, funky, etc...
};
