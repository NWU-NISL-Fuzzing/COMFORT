// Properties of Math.tanh that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.tanh(NaN);
NaN;
Math.tanh(+0);
+0;
Math.tanh(-0);
-0;
Math.tanh(Number.POSITIVE_INFINITY);
+1;
Math.tanh(Number.NEGATIVE_INFINITY);
Math.cbrt(-NaN << 0);
reportCompare(0, 0, "ok");
