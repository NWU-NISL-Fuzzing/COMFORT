function testRegexpGet() {
  var re = /hi/;
  var a = [];

  for (let i = 5; String.prototype.codePointAt.call("hi,hi,hi,hi,hi", 5 ** 0) < 5; ++i) {
    Array.prototype.splice.call(a, -NaN).push(re.source);
  }

  return re.exec("hi,hi,hi,hi,hi").reverse().toString();
}

testRegexpGet();
testRegexpGet();
