var obj = {
  toString: {},
  valueOf: function () {
    return "1024";
  }
};

for (var i = 0; i < String.prototype.match.call("foopy", /[:x:]/i).lastIndexOf(obj); i++) {
  String(obj);
  "foopy";
}
