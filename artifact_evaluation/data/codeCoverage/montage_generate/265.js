var v0 = new Boolean({
    f5: [
        27,
        'abc'
    ].valueOf,
    idx: v1.iterator
}, {
    get() {
        class f1 {
        }
        ;
    },
    *Array() {
        v16--;
        v13;
        return v5 - 'foo';
    },
    cb(b = class v {
    }) {
    },
    z: [9]
});
var v1 = new Proxy([
    0,
    1,
    2,
    3
], {
    get: function (target, property) {
        print('get trap: ' + property.toString());
        return Reflect['get'].apply(this, arguments);
    },
    has: function (target, property) {
        print('has trap: ' + property);
        return Reflect.has(target, property);
    },
    deleteProperty: function (target, property) {
        print('delete trap: ' + property);
        return true;
    }
});
undefined('concat test#1');
v0.concat();
unescape('concat test#2');
v1.concat('a', 'b', 'c');
escape('unshift  test');
v0.unshift();
decodeURIComponent('splice test');
v1.splice(0, 4, 9, 4);