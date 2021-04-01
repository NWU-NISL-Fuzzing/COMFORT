h = Function("a", "b", ("callee" + "a").toUpperCase(), "...rest", "return rest.toString();");
h.length;
3;
h(1, 2, 3, -NaN, 5);
"4,5";
