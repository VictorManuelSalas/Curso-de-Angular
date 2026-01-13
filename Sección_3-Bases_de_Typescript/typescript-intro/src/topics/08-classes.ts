/**
 * Clases en TypeScript
 * Las clases son plantillas para crear objetos con propiedades y métodos predefinidos.
 * Se definen utilizando la palabra clave 'class' seguida del nombre de la clase.
 */

//Forma 1 de crear una clase
export class Person {
  // Propiedades de la clase - Cuando es public, es accesible desde fuera de la clase
  public name: string; // Propiedad requerida
  private address: string; // Propiedad opcional

  //El constructor es un método especial para inicializar objetos de la clase
  constructor(name: string, address: string = "No address") {
    this.name = name;
    this.address = address;
  }

  /*
  Otra fomra de definir el construnctor y evitar la declaracion de propiedades: 
  *constructor(public name: string, public address: string = "No address") {}
*/
  //Metodo para mostrar información de la persona
  public displayInfo(): string {
    return `Name: ${this.name}, Address: ${this.address}`;
  }
}

const spiderman = new Person("Peter Parker", "New York City");
console.log(spiderman);
//console.log(spiderman.address); // Error: La propiedad 'address' es privada y no se puede acceder desde fuera de la clase

// ------------ Herencia de clases ------------
export class SuperHero extends Person {
  /**
   * Cuando en una clase hija que se extiende de una clase padre, si se define un constructor en la clase hija,
   * es obligatorio llamar al constructor de la clase padre utilizando la palabra clave 'super()'.
   * Esto asegura que las propiedades heredadas de la clase padre se inicialicen correctamente.
   */
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    address: string
  ) {
    super(realName, address); // Llamada al constructor de la clase padre
  }
}
const ironMan = new SuperHero("Iron Man", 45, "Tony Stark", "Malibu, California");
console.log(ironMan);
