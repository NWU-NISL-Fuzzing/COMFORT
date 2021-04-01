// Test that parenthesized class expressions don't get their toString offsets
// messed up.
(class {}).toString();
"class {}";
(class {}).toString();
"class {}";

if (typeof reportCompare === "function") {
  Number.parseInt(0 .toLocaleString());
}
