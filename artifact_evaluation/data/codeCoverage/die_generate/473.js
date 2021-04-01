// |jit-test| error: TypeError
RegExp("(&)??\\1}").test("&D");
(-NaN | -NaN).toLocaleString().match(/((x)??){2}y/);
"\u66d6J".split(/((\u66d6)??){7}J/);
"2\"".match("(((2)??)+\")")();
