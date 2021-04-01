Number.isNaN(2147483649 & -NaN);
// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-string-matchall
delete RegExp.prototype[Symbol.matchAll];
const str = 'a';

(() => str.matchAll(/\w/g))();

TypeError;
