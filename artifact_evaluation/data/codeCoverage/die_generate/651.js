var orNaNTest1 = new Function("return orTestHelper(NaN, NaN, 10);");
orNaNTest1();
orNaNTest1(Math.acosh(0));
