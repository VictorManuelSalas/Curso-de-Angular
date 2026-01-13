/*
  Ejercicio de composición con clases en TypeScript
  ===================================================================

*/

/**
 * 📌 Nota sobre el diseño:
 *
 * Existen dos formas de modelar AdminUsuario:
 *
 * 1️⃣ HERENCIA (extends Usuario)
 *    - AdminUsuario *ES* un Usuario.
 *    - Hereda automáticamente propiedades y métodos del padre.
 *    - Permite polimorfismo (un AdminUsuario puede usarse donde se espera un Usuario).
 *    - Útil cuando la relación "es un" es clara y la jerarquía es estable.
 *
 * 2️⃣ COMPOSICIÓN (AdminUsuario recibe un Usuario)
 *    - AdminUsuario *TIENE* un Usuario.
 *    - No hereda métodos, delega el comportamiento al objeto Usuario.
 *    - Más flexible y menos acoplado.
 *    - Útil cuando se quiere evitar jerarquías rígidas o cuando los roles pueden cambiar.
 *
 * Regla general:
 * 👉 Usar herencia cuando "AdminUsuario es un Usuario".
 * 👉 Usar composición cuando "AdminUsuario tiene un Usuario".
 */

export class Usuario {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    protected activo: boolean // Cambiado a protected para que pueda ser accedido en la clase hija
  ) {}

  //Metodos
  public activar(): void {
    this.activo = true;
  }

  public desactivar(): void {
    this.activo = false;
  }

  public estaActivo(): boolean {
    return this.activo;
  }

  public mostrarInfo(): string {
    return `Usuario: ${this.name}, Email: ${this.email}, Activo: ${
      this.activo ? "Sí" : "No"
    }`;
  }
}

export class AdminUsuario {
  //Las clases hijas no necesita declarar las mismas propiedades de la clase padre, evita usar el private/public/protected en las propiedades heredadas
  constructor(public user: Usuario, public rol: string) {}

  //Metodos
  public cambiarRol(nuevoRol: string): void {
    this.rol = nuevoRol;
  }

  public mostrarInfo(): string {
    return `${this.user.mostrarInfo()}, Rol: ${this.rol}`;
  }
}
const user = new Usuario(1212, "Developer", "dev@example.com", true);
const admin = new AdminUsuario(user, "admin");
