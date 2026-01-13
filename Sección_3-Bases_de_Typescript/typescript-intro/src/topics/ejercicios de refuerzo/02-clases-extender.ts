/**
 * 📘 Contexto
 * En tu app ahora existen usuarios normales y usuarios administradores.
 * Todos los usuarios comparten datos básicos, pero los administradores tienen permisos extra.
 */

/**
 * 🧩 Parte 1: Clase Base Usuario
 * *Requisitos
 * !Crea una clase Usuario con:
 * * *Propiedades
 * id → number
 * nombre → string
 * email → string
 * activo → private boolean
 *
 * * *Métodos
 * activar(): void
 * desactivar(): void
 * estaActivo(): boolean
 * mostrarInfo(): string
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

/**
 * 🧩 Parte 2: Clase hija AdminUsuario
 * *Requisitos
 * !Crea una clase AdminUsuario que:
 * * *Extienda de Usuario
 * * *Agregue una propiedad nueva:
 * rol → string (ej: "admin")
 *
 *
 * * *Constructor de AdminUsuario
 * Debe:
 * Recibir todos los datos del Usuario
 * Recibir además rol
 * Llamar a super(...) correctamente
 *
 * * Métodos adicionales
 * cambiarRol(nuevoRol: string): void
 * * mostrarInfo():
 * Debe sobrescribir el método del padre
 * Debe incluir el rol
 */

export class AdminUsuario extends Usuario {
  //Las clases hijas no necesita declarar las mismas propiedades de la clase padre, evita usar el private/public/protected en las propiedades heredadas
  constructor(
    id: number,
    name: string,
    email: string,
    activo: boolean,
    public rol: string
  ) {
    super(id, name, email, activo);
  }

  //Metodos
  public cambiarRol(nuevoRol: string): void {
    this.rol = nuevoRol;
  }

  public mostrarInfo(): string {
    return `${super.mostrarInfo()}, Rol: ${this.rol}`; 
    // Para llamadar un metodo del padre se usa super.nombreMetodo() porque si no se haria una llamada recursiva infinita "loop ♾️"
    /**
     * 🧠 Regla mental fácil de recordar
     * 🔹 this → yo (la clase actual)
     * 🔹 super → mi papá (la clase padre)
     */
  }
}
const user = new Usuario(1212, "Developer", "dev@example.com", true);
const admin = new AdminUsuario(
  1212,
  "Manuel",
  "manuel@example.com",
  true,
  "admin"
);

console.log(user.mostrarInfo());
console.log(admin.mostrarInfo());
admin.desactivar();
console.log(admin.mostrarInfo());

/**
 * ❓ Preguntas de auto-evaluación
 * ¿Para qué sirve extends? Sirve para crear una clase que hereda propiedades y metodos de otra clase
 * ¿Qué hace super()? Sirve para mandar a llamadar al constructor de la clase padre, solo se usa cuando en la clase hija se define el constructor con nuevas propiedades
 * ¿Cuándo usarías herencia y cuándo no? Se usa cuando se tiene una clase que contiene casi las mismas cosas que otra clase (Pregunate si el AdminUser es un Usuario)
 * ¿Qué pasa si una clase hija no llama a super()? Si este no se manda a llamar cuando se genera con contructor la clase hija, en typescript marcara error
 */
