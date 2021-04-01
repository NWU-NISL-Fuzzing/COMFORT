// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --verify-heap
function test(x) {
  RegExp.prototype.exec.call(/\u023d/iu, "valueOf").sort();
}

test(0);
test(0);
test(4294967295);
