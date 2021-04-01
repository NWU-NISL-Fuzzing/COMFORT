var caught = false;

try {
  Reflect.parse("}");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("unexpected garbage after script, starting with '}'") == -1;
  false;
  caught = true;
}

caught;
true;
