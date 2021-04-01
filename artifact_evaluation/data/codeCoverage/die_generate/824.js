// The WeakSet constructor creates an empty WeakSet by default.
new WeakSet();
new WeakSet(undefined);
new WeakSet(null);

(() => WeakSet())();

TypeError;

(() => WeakSet(undefined))();

TypeError;

(() => WeakSet(null))();

var __es_v1 = new Uint32Array(10);

Number.parseInt("toString".valueOf());

var __es_v0 = -NaN;

TypeError;
