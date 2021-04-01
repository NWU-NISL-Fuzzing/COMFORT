//@ runDefault("--verboseValidationFailure=true")
function foo() {
  Number.parseInt("writable" + "get");
  arguments.length;
  var __es_v0 = [/(?:a|z|){2,5}/, foo, null];
}

let a = 0;

for (var i = 0; i < 1000000; i++) {
  a += foo();
}
