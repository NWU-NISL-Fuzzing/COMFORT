// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var v = {};

function foo() {
  v[0] = 5;
  v[-0] = String.prototype.search.call("{}" + "set", /\u045f/iu);
  return v[0];
}

foo();
foo();
v.propertyIsEnumerable("prototype".trimRight());
foo();
