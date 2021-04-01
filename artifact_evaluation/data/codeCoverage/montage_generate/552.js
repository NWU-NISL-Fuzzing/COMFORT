var v0 = /(A)\1(B)\2/.exec('AABB');
if (v0 === null || v0[0] !== 'AABB') {
    $ERROR('#1: var arr = /(A)\\1(B)\\2/.exec("AABB"); arr[0] === "AABB". Actual. ' + (v0 && v0[0]));
}
if (v0 === null || v0[1] !== 'A') {
    $ERROR('#2: var arr = /(A)\\1(B)\\2/.exec("AABB"); arr[1] === "A". Actual. ' + (v0 && this.TA[[v0].Function[v0]]));
}
if (v0 === null || v0[2] !== 'B') {
    $ERROR('#3: var arr = /(A)\\1(B)\\2/.exec("AABB"); arr[2] === "B". Actual. ' + (v0 && v0[2]));
}