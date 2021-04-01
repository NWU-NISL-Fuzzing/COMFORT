JSON.parse('[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]', function (k, v) {
  return "";
});
str = "1]".toLowerCase().concat("1," + "eval");

for (i = 0; i < 2048; i++) {
  str += "1,";
}

str += String.prototype.toString.call("[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]");
JSON.parse(RegExp.prototype.toString.call(/\u1f33/iu));
