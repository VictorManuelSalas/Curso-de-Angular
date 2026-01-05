console.group("Objects, Interfaces and Arrays");
//Arreglo de puros strings
const stringArray: string[] = ["One", "Two", "Three"];

//Arreglo de puros números
const numberArray: number[] = [1, 2, 3, 4, 5];

//Arreglo de booleanos
const booleanArray: boolean[] = [true, false, true, true];

//Arreglo de objetos
const objectArray: object[] = [{}, { name: "John" }, { age: 30 }];

//Arreglo de dos tipos - strings y números
const mixedArray: (string | number)[] = ["One", 2, "Three", 4, 5];

//Arreglo de múltiples tipos - strings, booleanos y números
const skills: (string | boolean | number)[] = [
  "Batch",
  "Counter",
  "Healing",
  true,
  123,
];

//Arreglo de arreglos con 2 elementos con types definidos - cada elemento es una tupla de [number, string]
const tupleArray: [number, string][] = [
  [1, "One"],
  [2, "Two"],
  [3, "Three"],
];

// * Objects

//* Las interfaces nos permiten definir la estructura de un objeto
interface Character {
  name: string;
  hp: number;
  skills: string[]; // propiedad obligatoria
  homeTown?: string; // Propiedad opcional (puede o no estar presente)
  age: number | undefined | null; // Propiedad que puede ser number o undefined (debe estar presente)
}

const strider: Character = {
  name: "Strider",
  hp: 30,
  skills: ["Swordsmanship", "Leadership", "Tracking"],
  age: null,
};

strider.homeTown = "Rivendell"; // Asignando valor a la propiedad opcional
console.table(strider);

// * Interfaces anidadas
interface Game {
  title: string;
  description: string;
  genre: string[];
  characters: Character[];
}

const game: Game = {
  title: "The Lord of the Rings",
  description: "An epic fantasy adventure",
  genre: ["Fantasy", "Adventure"],
  characters: [
    {
      name: "Frodo Baggins",
      hp: 20,
      skills: ["Stealth", "Courage"],
      age: 50,
    },
    strider,
  ],
};

console.table(game);

console.groupEnd();
export {};
