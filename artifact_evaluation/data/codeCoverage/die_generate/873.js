var __es_v0 = ("X" + "X").repeat("X".charCodeAt(0));

// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
for (var i = 0; i < 2000; i++) {
  var __es_v1 = [23 << 0, 0 - 42, 23 - 2];
  Object.prototype['X' + i] = true;
}

var m = new Map();
m.set(Object.prototype, 23);
var o = {};
m.set(o, 42);
