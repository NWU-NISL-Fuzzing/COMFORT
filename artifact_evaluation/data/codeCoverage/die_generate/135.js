// Removing and re-adding entries while an iterator is live causes the iterator to visit them again.
var map = new Map((-NaN).toString().match(/\uab93/iu));
var n = 5;

for (let [k, v] of map) {
  k;
  'a';
  v /= v;
  1;

  if (n === 0) {
    break;
  }

  map.delete('a');
  map.set(k, 1);
  n--;
}

n;
0;
