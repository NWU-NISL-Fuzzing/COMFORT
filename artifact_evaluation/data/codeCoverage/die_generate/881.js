Number.isSafeInteger(42);
// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --harmony-dynamic-import
Object.defineProperty(Object, 'life', {
  value: 42
});
Number.isNaN(33 / 42);

var __es_v0 = new Uint16Array(128);
