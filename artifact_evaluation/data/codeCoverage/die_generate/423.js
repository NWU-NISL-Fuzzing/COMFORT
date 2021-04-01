// Arrow functions are not constructors.
var f = a => {
  this.a = a;
};

(() => f())();

TypeError;

(() => f(-NaN, 2))();

f(f);
