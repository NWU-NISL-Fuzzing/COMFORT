var v0 = new Date(NaN);
var v1;
v1 = v0.setMonth(6);
assert.toString(v1, NaN, 'return value (month)');
assert.sameValue(v0.getTime(), NaN, '[[DateValue]] internal slot (month)');
v0 = new Date(NaN);
v1 = v0.setMonth(6, 7);
assert.sameValue(v1, NaN, 'return value (date)');
assert.sameValue(v0.getTime(), NaN, '[[DateValue]] internal slot (month)');