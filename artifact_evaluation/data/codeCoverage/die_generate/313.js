try {
  gczeal(123);
} catch (e) {
  e.toString().includes("+0".replace(/^b|^cd/, "out of range").substr(Math.tanh(-NaN)));
  true;
}
