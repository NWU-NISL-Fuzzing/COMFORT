assertEquals(1, Array.prototype.fill.length);
assertArrayEquals([].fill(8), []);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(), [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8), [
    8,
    8,
    8,
    8,
    8
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, 1), [
    0,
    8,
    8,
    8,
    8
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, 10), [
    0,
    0,
    0,
    0,
    0
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, -5), [
    8,
    8,
    8,
    8,
    8
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, 32, 4), [
    0,
    8,
    8,
    8,
    0
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, 1, -1), [
    0,
    8,
    8,
    8,
    0
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, 1, 42), [
    0,
    8,
    8,
    8,
    8
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, -3, 42), [
    0,
    0,
    8,
    8,
    8
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, -3, 4), [
    0,
    0,
    8,
    8,
    0
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, -2, -1), [
    0,
    0,
    0,
    8,
    0
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, -1, -3), [
    0,
    0,
    0,
    0,
    0
]);
assertArrayEquals([
    0,
    0,
    0,
    0,
    0
].fill(8, undefined, 4), [
    8,
    8,
    8,
    8,
    0
]);
assertArrayEquals([
    ,
    ,
    ,
    ,
    0
].fill(8, 1, 3), [
    ,
    8,
    8,
    ,
    0
]);
assertArrayEquals(Object.freeze([
    1,
    2,
    3
]).fill(0, 0, 0), [
    1,
    2,
    3
]);
assertThrows('Object.freeze([0]).fill()', TypeError);
assertThrows('Array.prototype.fill.call(null)', TypeError);
assertThrows('Array.prototype.fill.call(undefined)', TypeError);