/**
 * TODO:
 * 1. Realizar una función que reciba un objeto con las propiedades
 *    'nombre', 'edad' y 'direccion' y retorne un string con el formato:
 */

export interface Product {
  descrition: string;
  price: number;
}

const phone: Product = {
  descrition: "Nokia A1",
  price: 151.0,
};

const tablet: Product = {
  descrition: "iPad Air",
  price: 350.0,
};

interface taxCalculationOptions {
  tax: number;
  products: Product[]; // de tipo interfaz de producto pero en arreglo
}

// Función que calcula el impuesto y el total de cada producto en el carrito de compras y que retornara un array de numeros
export function taxCalculation({
  products,
  tax,
}: taxCalculationOptions): [number, number] {
  // Retorna una tupla de numeros para que sepa que el primer elemento es el total y el segundo el impuesto
  // * Consejo: Cuando una funcion quieren que reciba mas de 3 parametros es mejor usar un objeto como parametro
  let total = 0;
  products.forEach(({ price }) => (total += price));

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [totalAmount, taxAmount] = taxCalculation({
  products: shoppingCart,
  tax,
});

console.group("Tax Calculation");
console.log("Total:", totalAmount);
console.log("Tax:", taxAmount);
console.groupEnd();

 
