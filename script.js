const hello = str => str + "hello";

const space = str => str + " ";

const world = str => str + "world";

const exclamationAsync = async str =>
  new Promise((resolve, reject) => setTimeout(() => resolve(str + "!"), 300));

const toUppercase = str => str.toUpperCase();

const str = "";

const msg1 = world(space(hello(str)));
const msg2 = str |> hello |> space |> world;
const msg3 = str |> hello |> space |> world |> exclamationAsync |> await |> toUppercase;

console.log("msg1:", msg1); // => msg1: hello world
console.log("msg2:", msg2); // => msg2: hello world
console.log("msg3:", msg3); // => msg3: HELLO WORLD!