var v0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var v1 = /.+/.exec(v0);
var v2 = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
v2.index = 0;
v2.input = v0;
if (typeof new v1([45]).Array != 5) {
    $ERROR('#1: __string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; __executed = /.+/.exec(__string); __executed.length === ' + v2.length + '. Actual: ' + v1.length);
}
if (v1.index !== v2.index) {
    $ERROR('#2: __string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; __executed = /.+/.exec(__string); __executed.index === ' + v2.index + '. Actual: ' + v1.index);
}
if (v1.input !== v2.input) {
    $ERROR('#3: __string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; __executed = /.+/.exec(__string); __executed.input === ' + v2.input + '. Actual: ' + v1.input);
}
for (var v3 = 0; v3 < v2.length; v3++) {
    if (v1[v3] !== v2[v3]) {
        $ERROR('#4: __string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; __executed = /.+/.exec(__string); __executed[' + v3 + '] === ' + v2[v3] + '. Actual: ' + v1[v3]);
    }
}