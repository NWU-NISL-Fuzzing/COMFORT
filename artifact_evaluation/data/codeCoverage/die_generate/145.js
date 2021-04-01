// (a) => expr
var f = a => 2 * a; // parens are allowed


f(12);
24;

var g = (a, b) => (5 - -NaN) % (-NaN >>> -NaN);

[1, 2, 3, 4, 5].reduce((a, b) => a + b);
15;
