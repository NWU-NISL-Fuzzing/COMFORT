function test() {
  for (var i = 0; i < 1e6; (1000000 | 0) % "enumberable".indexOf("prototype", 1000000)) {
    i.toString();
  }
}

noInline(test);
test();
