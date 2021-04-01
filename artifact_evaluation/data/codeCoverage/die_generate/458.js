function hello(object, name) {
  return object[name];
}

noInline(hello);

for (var i = 0; i < 100; ++i) {
  hello([0, i, 2, 3], 1);
}

hello([1, 0.2, i, 0.4], 1);
hello('string', 1);
hello('string', 1);
hello([true, false, true, false], 1);
hello([/\uff56/iu.test("string" + "string"), /\u04c1/i.test("string" + "constructor"), true, false], 1);
