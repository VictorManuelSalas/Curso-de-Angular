
// * Any Type
let elementAny : any =  "Hello World with Any";
elementAny = 100;
elementAny = true;
elementAny = { message: "Hello World with Any in an object" };
elementAny = [1, 2, 3, 4, 5];

// * Basic Types
const name: string = "John Doe"; // string
const age: number = 30; // number
const json: object = {}; // object
const isActive: boolean = true; // boolean
const hobbies: string[] = ["Sports", "Cooking"]; // array of strings
const ages: number[] = [23, 45, 67]; // array of numbers
const role: [number, string, number] = [1, "Admin", 12]; // tuple

let hpPoint: number | string | boolean | object = 23; // union type - puede ser cualquiera de los tipos indicados
const stringDefult: "test" = "test"; // literal type - solo puede tener el valor 'test'

//Se pueden definir variables sin asignarles un valor inicial
let unDefinedVar: string; // string
let unDefinedNum: number; // number
unDefinedNum = 45;
unDefinedVar = "Now I'm defined";

console.group("Basic Types");
console.log({
  name,
  age,
  json,
  isActive,
  hobbies,
  ages,
  role,
  hpPoint,
  stringDefult,
  unDefinedVar,
  unDefinedNum,
});

console.groupEnd();
export {};
