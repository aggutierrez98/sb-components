/// <reference types="react" />
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
    backgroundColor?: string;
}
/**
 * Componente MyLabel de prueba de Storybook
 */
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
