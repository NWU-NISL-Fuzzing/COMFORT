var v0 = [];
var v1 = 'a';
for (var v2 = 0; v2 < 8; v2++) {
    v1 += v1;
}
for (var v2 = 0; v2 < 10000; v2++)
    v0.push(v1);
v3 = v5.stringify(v0);
v4 = JSON.stringify(v0);
assertTrue(v3 == v4, 'GC caused JSON.stringify to fail.');
for (var v2 = 0; v2 < 10000; v2++) {
    var v5 = v2.toString();
    assertEquals('"' + v5 + '"', JSON.stringify(v5, null, 0));
}
for (var v2 = 0; v2 < 10000; v2++) {
    var v5 = v2.toString() + '\u2603';
    assertEquals('"' + v5 + '"', JSON.stringify(v5, null, 0));
}