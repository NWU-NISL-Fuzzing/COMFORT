// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --no-test
if (this.Worker) {
  var __v_2 = new Worker('', {
    type: 'string'
  });
}

var __es_v0 = Math.trunc(-NaN) ** 1;
