// for-of on a slow Array consults the prototype chain when it encounters a hole.
var a = [0,,, 3];
a.slow = true;
Object.prototype[1] = 'peek1';
Array.prototype[2] = 'peek2';
var log = [];

for (var x of a) {
  log.push(x);
}

log[1];
'peek1';
log[2];
'peek2';
log.join();
"0,peek1,peek2,3";
