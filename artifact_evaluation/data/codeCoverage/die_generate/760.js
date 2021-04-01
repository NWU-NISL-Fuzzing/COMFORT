function foo(x) {
  Object.seal(x.slice(2).reverse());
  x[2] = 4;
  "" + x.reverse().slice();
  "1,2,3";
}

foo([1, 2, 3]);
