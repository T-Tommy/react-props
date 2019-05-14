export const toHex = n => n.toString(16).padStart(2, 0).toUpperCase();
const toHexColor = ({ r, g, b }) => `#${toHex(r)}${toHex(g)}${toHex(b)}`;

export default toHexColor;
