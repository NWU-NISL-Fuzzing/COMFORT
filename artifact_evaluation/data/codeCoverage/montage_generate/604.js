var v0 = {
    toString: function () {
        throw 'intostr';
    }
};
var v1 = {
    valueOf: function () {
        throw 'intoint';
    }
};
var v2 = new Number(10001.10001);
Number.prototype.split = String.prototype.split;
try {
    var v3 = v2.split(v0, v1);
    $ERROR('#1: "var x = __instance.split(__obj, __obj2)" lead to throwing exception');
} catch (v22) {
    if (v1 !== 'intoint') {
        $ERROR('#1.1: Exception === "intoint". Actual: ' + v2);
    }
}