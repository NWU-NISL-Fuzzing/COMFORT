// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo(a, i) {
  a[i].x;
}

var __es_v0 = /[K-Z]+/gi.exec(1 .toFixed());

foo(/\u03d6/i.exec("valueOf"), 1 + 1);
var a = [, 0.1];

var __es_v1 = "caller".match(/($)/).reverse();

foo(a, 1);
foo(a, -NaN >> 1);
foo(a, 1);

(() => foo(a, 0))();

TypeError;
