// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function f(a, x) {
  (1.1 & x) > x + x;
  x = x;
}

f([], 1.1);
f([1], 1.1);
f(/\/\xc4\/t/.exec(1.1.toString()), 1.1);
