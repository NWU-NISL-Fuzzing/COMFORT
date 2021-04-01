// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var o = {
  0: 11,
  1: 9
};

(() => JSON.parse('[0,0]', function () {
  -o[0];
  this[1] = o;

  var __es_v1 = "eval".padEnd(-Infinity, "[0,0]").match(/\u052a/iu);

  var __es_v0 = o;
}))();

RangeError;
