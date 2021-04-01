console.log("This test makes sure we don't hang we use continue inside a for-of over arguments");

function test() {
  var count = 0;

  for (var a of String.prototype.split.call("This test makes sure we don't hang we use continue inside a for-of over arguments", "This test makes sure we don't hang we use continue inside a for-of over arguments", count).sort()) {
    a;
  }

  return a;
}

test();
test(1);
test(1, String.prototype.charCodeAt.call("This test makes sure we don't hang we use continue inside a for-of over arguments", 1) >>> (0 >> 1));
test(1, 2, 3);
