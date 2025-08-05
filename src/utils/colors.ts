const colors: { [key: string]: string } = {
  CN: "#e74c3c", IN: "#ff9f40", US: "#3498db", ID: "#2ecc71", BR: "#f1c40f", PK: "#9b59b6", NG: "#1abc9c", BD: "#34495e", RU: "#e67e22", MX: "#16a085", JP: "#c0392b", PH: "#8e44ad", ET: "#d35400", VN: "#27ae60", EG: "#2980b9", DE: "#7f8c8d", TR: "#e74c3c", IR: "#f39c12", TH: "#a569bd", GB: "#5499c7"
};

export const getCountryColor = (code: string): string => {
  if (colors[code]) return colors[code];
  let hash = 0;
  for (let i = 0; i < code.length; i++) hash = code.charCodeAt(i) + ((hash << 5) - hash);
  return `hsl(${hash % 360}, ${65 + (hash % 20)}%, ${45 + (hash % 15)}%)`;
};