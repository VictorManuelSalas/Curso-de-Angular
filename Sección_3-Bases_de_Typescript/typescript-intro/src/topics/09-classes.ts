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

Crea un método estaActivo() que retorne true o false

Evita acceder directamente a activo desde fuera de la clase

❓ Preguntas de auto-evaluación

Respóndelas mentalmente o escríbelas:

¿Para qué sirve el constructor?

¿Qué significa private en una propiedad?

¿Por qué usamos this?

¿Qué ventaja tiene usar clases frente a objetos simples?
 */
