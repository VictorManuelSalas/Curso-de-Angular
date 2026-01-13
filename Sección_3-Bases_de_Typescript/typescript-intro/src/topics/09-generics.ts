/**
 *
 * Generics
 *
 * Los generics nos permiten crear componentes reutilizables que trabajan con una variedad de tipos de datos en lugar de un solo tipo.
 */

// !Any no se usa ya que este le quita cualquier restrincion de tipo a la variable, por ello se usa los genericos
export function whatsMyType(argument: any) {
  return argument;
}

const amIString = whatsMyType("Hola Mundo");
const amINumber = whatsMyType(100);
const amIBoolean = whatsMyType(true);
console.log({ amIString, amINumber, amIBoolean });
//-------------------------------------------------------------

//Asi es la forma correcta de usar los genericos
/**
 *
 * La "T" es una convención comúnmente utilizada para representar un "Tipo" genérico.
 * Sin embargo, puedes usar cualquier letra o nombre que desees, como "U", "V", "MyType", etc.
 *
 *
 */
export function betterWhatsMyType<T>(argument: T): T {
  return argument;
}

//Aqui se puede definir el tipo de dato que se le va a pasar a la funcion mendiate <> pero igual puede o no agregarlo
let amIString2 = betterWhatsMyType("Hola Mundo");
let amINumber2 = betterWhatsMyType<number>(100);
let amIBoolean2 = betterWhatsMyType<boolean>(true);
let amIArray2 = betterWhatsMyType<number[]>([1, 6, 3, 8]);
console.log(
  amIString2.split(" "),
  amINumber2.toFixed(),
  amIBoolean2,
  amIArray2.join(", ")
);
