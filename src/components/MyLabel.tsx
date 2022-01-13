import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label?: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Colores del boton
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Si desea todo el texto capitalizado
   */
  allCaps?: boolean;
  /**
   * Selector del color de la fuente
   */
  fontColor?: string;
}

/**
 * Componente MyLabel de prueba de Storybook
 */
export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} ${allCaps && "caps"}`}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};
