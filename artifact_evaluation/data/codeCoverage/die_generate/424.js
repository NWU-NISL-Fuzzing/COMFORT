console.log('This test confirms an assertion in dateToDaysFrom1970() in wtf/DateMath.cpp passes. The function had a bug setting a number larger than INT_MAX to an int variable.');

var __es_v0 = new Float32Array(16);

var d = new Date(20000000, 0, 1);
d.getTime();
Date.parse("length");
Date.UTC(1970, 0, 1, 0, 0, 0, 0);
d = new Date(-20000000, 0, 1);
d.getTime();

var __es_v1 = d.getTime();
