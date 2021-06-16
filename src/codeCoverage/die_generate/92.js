function fun() {
  new Function("function pf" + "function pf" + "valueOf")('function pf' + fun + '() {}');
}

fun();
