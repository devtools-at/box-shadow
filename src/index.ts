/**
 * CSS Box Shadow Generator
 * Generate CSS box shadow code
 *
 * Online tool: https://devtools.at/tools/box-shadow
 *
 * @packageDocumentation
 */

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function generateShadowCSS(shadow: Shadow): string {
  const { horizontal, vertical, blur, spread, color, opacity, inset } = shadow;
  const rgba = hexToRgba(color, opacity);
  const insetStr = inset ? "inset " : "";
  return `${insetStr}${horizontal}px ${vertical}px ${blur}px ${spread}px ${rgba}`;
}

// Export for convenience
export default { encode, decode };
