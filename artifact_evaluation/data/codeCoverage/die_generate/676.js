// |jit-test| error:TypeError
delete String.prototype.indexOf;

function enterFunc(funcName) {
  funcName.indexOf();
}

enterFunc(new Array(String.prototype.substr.call("Foo".replace(/\ua7a4/iu, "callee"), "Foo".indexOf("Foo"))));
enterFunc(new String("Foo"));
