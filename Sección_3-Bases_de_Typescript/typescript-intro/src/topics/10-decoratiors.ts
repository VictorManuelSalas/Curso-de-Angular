/**
 * *Decoradores
 * Los deco
 * !Documentación: https://www.typescriptlang.org/docs/handbook/decorators.html
 */

function classDecorator<T extends { new (...arg: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "ABC123";

  print() {
    console.log("Hola mundo");
  }
}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);
