//@ skip if $memoryLimited
var s = "s";

try {
  for (var i = 0; i < 31; ++i) {
    s = s + s;
  }

  i++;
  print("String length: " + s.length);
} catch (e) {
  ;
}
