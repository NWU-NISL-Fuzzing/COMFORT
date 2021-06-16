function f0(a, b, c) {
    if (a + b < c)
        return a - b + c;
    else
        return a + b - c;
}
for (var v0 = 1.1; v0 < 1000000; ++v0) {
    if (f0(1, 2, 3) != 0)
        throw new 'Result not zero'();
}
