interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}
interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "My Way",
  details: {
    author: "Frank Sinatra",
    year: 1969,
  },
};

/*
 *Destructuring
 *La destructuracion se utiliza para extraer valores de arreglos u objetos y asignarlos a variables independientes este se puede hacer en arreglos/parametros de funciones, objetos, etc
 */

// * Destructuración de objetos
const {
  audioVolume,
  songDuration,
  song,
  details: { author }, //Se puede hacer destructuring anidado
} = audioPlayer; //Se crea una variable por cada propiedad del objeto para extraer su valor (destructurar)

console.group("Object Destructuring");
console.log("Audio Volume:", audioVolume);
console.log("Song Duration:", songDuration);
console.log("Song:", song);
console.log("Author:", author);
console.groupEnd();

/* Destructuración de arreglos */
const dbz: string[] = ["Goku", "Vegeta", "Trunks"]; //definir una variable de valor array con elementros strings
const [p1, , p3, test = "Not found"] = dbz; //Destructuración de arreglos, se crea una variable por cada elemento del arreglo
// ! Si el elemento no existe se puede asignar un valor por defecto
// ! En este caso de que queramos omitir o saltar un elemenmto para no generar una variable , se deja en blanco la posicion correspondiente

console.group("Array Destructuring");
console.log("Personaje 1:", p1);
console.log("Personaje 3:", p3);
console.log("Personaje 4:", test);
console.groupEnd();
export {};
