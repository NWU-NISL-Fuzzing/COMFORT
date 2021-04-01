/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var expect = "global";
var actual = expect;

function f([actual]) {
  ;
  Number.isInteger(-NaN % -NaN);
}

expect = expect;
expect = expect;
f(["local"]);
reportCompare(expect, actual, "ok");
