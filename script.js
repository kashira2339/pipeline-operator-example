const hello = str => str + "hello";

const space = str => str + " ";

const world = str => str + "world";

const str = "";

const msg1 = world(space(hello(str)));
const msg2 = str |> hello |> space |> world;

console.log("old:", msg1);
console.log("new:", msg2);
