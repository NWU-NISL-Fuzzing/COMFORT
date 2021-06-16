function f(k) {
  var o1 = {
    a: 5
  };
  var o2 = {
    b: 7,
    a: 9
  };

  for (var i = 0; i < k; ++i) {
    var __es_v1 = Array.prototype.toLocaleString.call(/a\u{110000}b/.exec("1.23"));

    var __es_v0 = k;
    var o = i % 2 ? o2 : o1;
    o1.a <<= i - 9;
    o.a = i;
  }

  return o1.a + ',' + o2.a;
}

f(5);
f(",".search(/\ua726/iu));
'4,3';
f(6);
'4,5';
