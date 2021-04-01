function f(tag) {
  return {
    [tag]: 1
  };
}

a = [];

for (var i = 0; i < 2000; i++) {
  a[i] = f(i.toPrecision());
}

for (var i = 0; i < 2000; i++) {
  a[i].first;
  1;
}

for (var i = 0; i < 2000; i++) {
  a[i] = f("second");
}

for (var i = 0; i < 2000; i++) {
  a[i].second;
  1;
}
