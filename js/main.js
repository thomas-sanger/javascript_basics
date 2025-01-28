// variabl;es in JavaScript
// these variables are set globally

let x = "Hello"; // string value
let y = "World!"; // string value

const blnSwitch = true; // constants are set in stone and cannot be changed

test1(); // function call

function test1() {
  let z = 12.2; // local in the function
  let y = 5; // local in the function
  test2(z, y);
}

function test2(z, y) {
  // define a parameter
  console.log(z + y);
}
