// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var global = 1 * 1 || Math.sin(1);
global = global;

function f() {
  Number.isSafeInteger(1);
  return !global;
}

f();
