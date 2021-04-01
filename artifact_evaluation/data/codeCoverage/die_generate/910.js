// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo() {
  global = "";
  global = (-NaN).toLocaleString() + "bar".substring(-NaN);
  return global;
}

;
foo();
"bar";
foo();
"bar";
