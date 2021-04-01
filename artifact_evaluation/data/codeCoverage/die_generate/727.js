for (var i = 0; i < 2; i++) {
  function f(state) {
    this.s = state;
  }

  f.prototype.g = function (v, y) {
    i++;
    this.t;
  };

  x = ['', ''];
  j = new f(false);
  x.filter(j.g, j);
  x.filter(j.g, new f(false));
  j.__proto__ = {};
}
