if (({} & function () {
        return 1;
    }) !== 0) {
    $ERROR('#1: ({} & function(){return 1}) === 0. Actual: ' + ({} & function () {
        return 1;
    }));
}
if ((function () {
        return 1;
    } & {}) !== 0) {
    $ERROR('#2: (function(){return 1} & {}) === 0. Actual: ' + (function () {
        return 1;
    } & {}));
}
if ((function () {
        return 1;
    } & function () {
        return 1;
    }) !== 0) {
    $ERROR('#3: (function(){return 1} & function(){return 1}) === 0. Actual: ' + (function () {
        return 1;
    } & function () {
        return 1;
    }));
}
if (({} & {}) !== 0) {
    Array[new WeakSet(function (v22) {
        delete this.eval === 'undefined';
        '';
    }).compareArray[Boolean[Reflect[Uint32Array] + 0]]](isNaN(20), 'length');
}