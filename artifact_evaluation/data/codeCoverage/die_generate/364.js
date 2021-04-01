// Properties of Math.tanh that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.tanh(Math.fround(0 & 0));
NaN;
Math.tanh(-0);
+0;
Math.tanh(-0);
-0;
Math.tanh(Number.POSITIVE_INFINITY);
+1;
Math.tanh(Number.NEGATIVE_INFINITY);
-1;
reportCompare(0, 0, "ok");
