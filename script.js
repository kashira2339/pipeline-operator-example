const hello = str => str + "hello";

const space = str => str + " ";

const world = str => str + "world";

const str = "";

const msg = str |> hello |> space |> world;

console.log(msg);
