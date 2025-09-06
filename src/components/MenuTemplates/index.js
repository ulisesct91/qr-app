import MenuClassic from "./MenuClassic.jsx";
import MenuModern from "./MenuModern.jsx";
import MenuElegant from "./MenuElegant.jsx";
import MenuMinimal from "./MenuMinimal.jsx";

// Aquí vas importando nuevos templates
// clave => componente
export const templates = {
  classic: MenuClassic,
  modern: MenuModern,
  elegant: MenuElegant,
  minimal: MenuMinimal,
  // en el futuro: minimal, premium, funky, etc...
};
