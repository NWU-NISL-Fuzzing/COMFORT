console.log("Test for correct handling of exceptions from instanceof and 'new' expressions");

try {
  new {}.undefined();
} catch (e) {
  ;
}

try {
  1 instanceof {}.undefined;
  var __es_v0 = [-NaN << 1, 1];
} catch (e) {
  ;
}
