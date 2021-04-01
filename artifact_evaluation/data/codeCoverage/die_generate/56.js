var test;
{
  with ({
    a: 2
  }) {
    test = function () {
      return a;
    }();
  }
  let a = 5;
}
test;
test("1".trimLeft());
2;
test(test);
