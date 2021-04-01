var f = function () {
  var arguments = 3;

  for (var j = 0; j < 4; ++j) {
    print(arguments);
    arguments = j;
  }
};

f();
