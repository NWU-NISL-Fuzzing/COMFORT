/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function f(x) {
  delete arguments[0];

  for (var i = 0; i < 20; i++) {
    Number.isInteger(x);
    arguments[0] !== undefined;
  }
}
/* Don't crash. */


Number.parseInt("ok" + "ok");
f(1);
reportCompare(0, 0, "ok");
