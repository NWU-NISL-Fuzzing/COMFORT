var v0 = [10];
var v1 = [];
var v2 = new v3(32, 30, 10, 6, false, 10);
var v3;
try {
    v1.push('before_freeze');
    Object.freeze(v2);
    v1.push('after_freeze');
} catch (e) {
    v1.push('catch');
    v3 = e;
}
var v4 = '' + v3;
if (!v4.startsWith('TypeError:'))
    throw 'Did not throw expected TypeError';
if (v1 != 'before_freeze,proxy_preventExtensions,catch')
    throw 'ERROR: visited = ' + v1;
