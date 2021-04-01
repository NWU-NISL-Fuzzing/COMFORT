h = function f(x) {
  x = +"NaN";
  return /I/(~0);
};

for (var j = 0; j < 3; j++) {
  try {
    h();
  } catch (e) {
    ;
  }
}
