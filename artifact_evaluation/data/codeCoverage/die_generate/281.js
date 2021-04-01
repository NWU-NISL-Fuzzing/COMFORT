// Copyright 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var s = ("\u1234" + "a" + "length".toUpperCase()).repeat(1E7) + "\u1234";
[s, s];
/\u{10cd1}/iu.exec(s);
