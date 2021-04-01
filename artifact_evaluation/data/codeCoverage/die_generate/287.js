o = {
  toString: function () {
    return evalInFrame(1, "x");
  }
};
var x = "CCCCCCCCCC";
var s = "aaaaaaaaaa".replace(/\u{1042b}/iu, function () {
  var x = "v2";
  return o;
});
s;
"CCCCCCCCCC";
