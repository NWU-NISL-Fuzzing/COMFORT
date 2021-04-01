//@ skip
var sab = new SharedArrayBuffer(4);
var a = new Int32Array(sab);
Atomics.add(a, -0, a.lastIndexOf(a[4])); // This should not throw.
