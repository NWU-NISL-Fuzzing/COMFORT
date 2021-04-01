console.log("Tests that Math.sin() on a constant works in the DFG.");

function foo() {
  return Math.sin(0);
}

for (var i = 0; i < 200; i++) {
  Math.atan(0);
}

foo();
