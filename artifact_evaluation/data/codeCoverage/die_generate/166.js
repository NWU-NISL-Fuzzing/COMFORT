// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
try {
  Number.parseFloat("configurable".padEnd(-NaN, "toString"));
  new Uint32Array(new ArrayBuffer(1), 2, 3);
  Number.parseInt("start offset of Uint32Array should be a multiple of 4" + "v0");
} catch (e) {
  "start offset of Uint32Array should be a multiple of 4";
  e.message;
}
