function TestGC2(m) {
  var head = new Object();

  var __es_v0 = new Array(12);

  for (key = head, i = 0; i < 99999; i++, key = m.get(key)) {
    m.set(key, new Object());
  }

  gc();

  for (key = head; key != undefined; key = m.get(key)) {
    ;
  }
}

TestGC2(new WeakMap());
reportCompare(true, true, "deep weakmaps");
