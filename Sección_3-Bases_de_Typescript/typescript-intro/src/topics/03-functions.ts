console.group("Functions");

/* 
Las funciones en TypeScript permiten definir los tipos de datos de los 
parámetros y el tipo de dato que retornan

 * Todos los tipos son validos en los parametros y en el retorno de las funciones
 * Si una función no retorna ningún valor, se puede usar el tipo 'void'
 * Las funciones pueden tener parámetros opcionales o con valores por defecto
*/

// * Función con parámetros any y tipo de retorno any
function resNumbers(a: any, b: any): any {
  return `The result is: ${a - b}`;
}
resNumbers(1, 2);

// * Función con parámetros numericos y tipo de retorno numerico
function addNumbers(a: number, b: number): number {
  return a + b;
}
const result: string = addNumbers(1, 2).toString(); //Es buena practiva definir el tipo de dato de las variables
console.log("Result of addNumbers:", result);

// * Función flecha con parámetros string y tipo de retorno number
const addNumbersArrow = (a: string, b: string): number =>
  parseInt(a) + parseInt(b);

console.log("Result of addNumbersArrow:", addNumbersArrow("3", "4"));

// * Función con parámetros opcionales y por defecto, siempre los opcionales van al final
const multiply = (
  firstNumber: number,
  base: number = 1,
  secundNumber?: number
): number => {
  return firstNumber * base;
};

console.log("Result of multiply:", multiply(2, 5));

//*Funcion que no retorna ningún valor (void)

interface Character {
  name: string;
  hp: number;
  showHp: () => boolean; // definicion de un metodo dentro de la interface que retornq un boolean
}

// * Función que recibe un objeto y un numero de parametro
// Para definir el type de un objeto se usa las interfaces

const healCharacter = (character: Character, amount: number) => {
  if (character.hp < 100) {
    character.hp += amount;
  }
};

const strider: Character = {
  name: "Strider",
  hp: 10,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
    return true;
  },
};

healCharacter(strider, 20);
healCharacter(strider, 10);
healCharacter(strider, 60); 

strider.showHp();
console.groupEnd();

export {};
