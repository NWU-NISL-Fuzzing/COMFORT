// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function f() {
  return arguments.length;
}

var a = [];
a.length = a.findIndex(function () {
  Object.seal(Array.of(Math));
  Number.isFinite(a.lastIndexOf(f));
});
f(...a);
