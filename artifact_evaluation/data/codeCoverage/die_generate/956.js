x = 30;

function foo() {
  x;
  30;
  delete 10;
  y = 20;
  Object.defineProperty(this, 'x', {
    value: 10
  });
  x;

  var __es_v0 = new Array(2);
}

foo();
