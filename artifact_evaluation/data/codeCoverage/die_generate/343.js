// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --turbo-loop-variable
function f() {
  for (var i = 0; i != 10; i++) {
    if (i < 8) {
      var __es_v0 = /.{1,3}?X/ms.exec("x" + "x");

      -i;
      print("x");
    }
  }
}

f();
