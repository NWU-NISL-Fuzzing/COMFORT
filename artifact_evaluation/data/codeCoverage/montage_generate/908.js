description('Tests that defining a setter on the Array prototype works even if it is done after arrays are allocated.');
var v0 = 0;
function f0(v4) {
    var v1 = [];
    v1.length = 5;
    for (var v2 = 0; v2 < v1.length; ++v2) {
        if (v2 == v4) {
            debug('Henceforth I will have a bad time.');
            Array.prototype.__defineSetter__('3', function () {
                debug('Ouch!');
                v0++;
            });
        }
        v1[v2] = v2;
    }
    return v1;
}
var v3 = '"0,1,2,3,4"';
for (var v2 = 0; v2 < 1000; ++v2) {
    var v4;
    if (v2 == 950) {
        v4 = 2;
        v3 = '"0,1,2,,4"';
    } else
        v4 = -1;
    shouldBe('"' + f0(v4).join('abc') + '"', v3);
}
v0;
50;