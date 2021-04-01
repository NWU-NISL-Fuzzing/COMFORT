/* Don't assert. */
function f() {
  NaN++;
  --NaN;
  Infinity--;
  ++Infinity;
  undefined++;
  --undefined;
  ++Math;
  Math--;

  var __es_v0 = new Set("wrappedJSObject");
}

f();
f();
