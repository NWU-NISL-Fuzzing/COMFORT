// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(() => {
  new class extends Object {
    constructor() {
      (() => delete super[super()])();
    }

  }();
})();

Number.isNaN(Math.log(1.3));

var __es_v0 = /\//g.exec((-NaN).toLocaleString());

ReferenceError;
