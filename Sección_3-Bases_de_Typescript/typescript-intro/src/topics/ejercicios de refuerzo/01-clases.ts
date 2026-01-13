export class Usuario {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    private active: boolean
  ) {}

  public activar(): boolean {
    return (this.active = true);
  }

  public desactivar(): boolean {
    return (this.active = false);
  }

  public mostrarInfo(): string {
    return `Usuario: ${this.name}, Email: ${this.email}, Activo: ${
      this.active ? "Sí" : "No"
    }`;
  }

  public estaActivo(): boolean {
    return this.active;
  }
}

const user1 = new Usuario(1, "Dev", "test@gmail.com", true);
const user2 = new Usuario(2, "Dev2", "test2@gmail.com", true);
console.log(user1.mostrarInfo());
console.log(user2.mostrarInfo());

user1.desactivar();
console.log(user1.estaActivo());
/**
 *   

 

❓ Preguntas de auto-evaluación

Respóndelas mentalmente o escríbelas:

¿Para qué sirve el constructor? Sirve para inicializar las propiedades de la clase al momento de crear una instancia

¿Qué significa private en una propiedad? Es una propiedad en la cual define si la propiedad podra ser accesible fuera de la clase, en este caso no sera posible.

¿Por qué usamos this? Se usa para definir el valor de las propiedades de la clase

¿Qué ventaja tiene usar clases frente a objetos simples? Las clases permiten reutilizar código, crear múltiples instancias con la misma estructura, encapsular lógica, controlar el acceso a los datos y mantener el código más ordenado y escalable
 */
