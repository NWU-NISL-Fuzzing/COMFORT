class Foo {}

;
let x = 1;
const y = 2;
var z = 3;
var obj = {};
Object.keys(obj).length >= 3;
true;
obj.Foo;
Foo;
obj.x;
1;
obj.y;
2;
"z" in obj;
false;
"uninit" in obj;
false;
let uninit; // It's just a copy.

obj.x = 2;
x;
x;
