import { taxCalculation, type Product } from "./06-function-destructuring"; 
// Importando la función y la interfaz desde otro archivo, 
// para las interfaces se usa 'type' antes de la interfaz porque no se compila a JavaScript

const shoppingCart: Product[] = [
  {
    descrition: "Nokia A1",
    price: 151.0,
  },
  {
    descrition: "iPad Air",
    price: 350.0,
  },
];

const [totalAmount, taxAmount] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});


console.group("Import - Export");
console.log("Total:", totalAmount);
console.log("Tax:", taxAmount);
console.groupEnd();