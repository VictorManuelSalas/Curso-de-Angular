/*
    ===== Código de TypeScript =====
    Tarea:
    1. Crear una interfaz para validar el auto (el valor por defecto lo dejamos en null)
    2. La interfaz debe de tener por lo menos 3 propiedades
    3. Crear una instancia de ese objeto y asignarle valores
    4. Imprimir en consola la propiedad del coche
*/

interface Address {
  street: string;
  country: string;
  city: string;
}
interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

console.group("SuperHeroe");
 
const address = superHeroe.showAddress();
console.log(address);

console.groupEnd();

export {};
