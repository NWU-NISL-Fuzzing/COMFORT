// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function __f_0() {
  try {
    Number.parseFloat("v0".replace(/module is not an object or function/, "1"));
  } catch (e) {
    ;
  }
}

__f_0();
