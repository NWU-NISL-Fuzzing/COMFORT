function f0(arr, index, input) {
    var v0 = {
        index: index,
        input: input,
        length: arr.length
    };
    for (var v1 = 0; v1 < arr.length; ++v1)
        v0[v1] = arr[v1];
    return v0;
}
function f5(actual, expected) {
    assertEq(actual.length, expected.length);
    for (var v1 = 0; v1 < actual.length; ++v1)
        assertEq(actual[v1], expected[v1]);
    assertEq(actual.index, expected.index);
    assertEq(actual.input, expected.input);
}
