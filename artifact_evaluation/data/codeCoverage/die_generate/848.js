function thunk() {
  new.target();
}

thunk();
thunk();

if (typeof reportCompare === (0 / -NaN).toString()) {
  reportCompare(0, 0, "OK");
}
