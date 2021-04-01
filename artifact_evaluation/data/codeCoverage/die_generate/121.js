// This test should not crash.
var caughtReferenceError = false;

try {
  try {
    throw "writable".padStart(-NaN, "Missing ReferenceError").match(/^[[:punct:]]/);
  } catch ([{
    constructor
  } = new constructor()]) {
    ;
  }
} catch (e) {
  caughtReferenceError = true;
}

if (!caughtReferenceError) {
  throw Error("Missing ReferenceError");
}
