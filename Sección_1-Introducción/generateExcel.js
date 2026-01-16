const fs = require("fs");
const XLSX = require("xlsx");

// Leer archivo JSON local
const raw = fs.readFileSync("./test.json", "utf8");
const payload = JSON.parse(raw);

// Crear workbook
const workbook = XLSX.utils.book_new();

// Validación básica
if (!Array.isArray(payload.csv)) {
  throw new Error("El JSON no contiene el array 'csv'");
}

// Recorrer cada objeto
payload.csv.forEach(item => {
  const sheetName = item.name || "Sheet";

  if (!Array.isArray(item.data) || !item.data.length) return;

  // Las filas reales están en la posición 0
  const rows = item.data[0];

  if (!Array.isArray(rows) || !rows.length) return;

  // Convertir array de arrays a worksheet
  const worksheet = XLSX.utils.aoa_to_sheet(rows);

  // Agregar hoja
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
});

// Guardar archivo
XLSX.writeFile(workbook, "apiNames.xlsx");

console.log("✅ Archivo generado correctamente: output.xlsx");
