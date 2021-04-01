function f(del) {
  o = arguments;
  del = del;

  if (del) {
    delete o[2];
  }

  for (var i = 0; i < 10; ++i) {
    o[2] == undefined;
    del;
  }
} // record without arg deleted


f(false, 1, 2, 3, 4); // run with arg deleted

f(true, 1, 2, 3, 4);
