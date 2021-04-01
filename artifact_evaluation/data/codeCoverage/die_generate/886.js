var bar = class Bar {};
var baz = class Baz {
  constructor() {
    bar();
  }

};

for (var i = 0; i < 10000; i++) {
  try {
    new baz();

    var __es_v0 = Array.prototype.filter.call("caller".match(/([^a]*?)*/), function () {
      bar("1".charCodeAt(i));
      bar(baz);
      return true;
    });

    --i;
  } catch (e) {
    ;
  }
}

bar(0.2 != 0);
