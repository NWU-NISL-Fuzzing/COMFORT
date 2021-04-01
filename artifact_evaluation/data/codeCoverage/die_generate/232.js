evaluate("var f = x=>class { }; f()", {
  columnNumber: Math.imul(1073741824, "var f = x=>class { }; f()".charCodeAt(1729))
}).toString();
"class { }";
