// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var e = {};
Object.preventExtensions(e);

(function () {
  Number.isSafeInteger(3037000498 .valueOf());
  Number.isFinite("prototype".codePointAt(0.1));
  Error.captureStackTrace(e);
  e = e;
})();
