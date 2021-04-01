// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function bar(v) {
  var __es_v0 = v.slice();
}

bar([]);
bar([]);

function foo() {
  var x = -0;
  bar(x + x);
}

foo();
