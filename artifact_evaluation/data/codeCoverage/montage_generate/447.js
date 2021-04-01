description('Tests for ES6 class name semantics in class statements and expressions');
function f0(statement, result) {
    shouldBe(statement, result);
    shouldBe('\'use strict\'; ' + statement, result);
}
function f1(statement) {
    shouldBeTrue(statement);
    shouldBeTrue('\'use strict\'; ' + statement);
}
function f2(statement) {
    shouldThrow(statement);
    shouldThrow('\'use strict\'; ' + statement);
}
function f3(statement) {
    shouldNotThrow(statement);
    shouldNotThrow('\'use strict\'; ' + statement);
}
debug('Class statement');
f2('A');
f2('class {}');
f2('class { constructor() {} }');
f3('class A { constructor() {} }');
f0('class A { constructor() {} }; A.toString()', '\'class A { constructor() {} }\'');
f1('class A { constructor() {} }; (new A) instanceof A');
f0('class A { constructor() { this.base = A; } }; (new A).base.toString()', '\'class A { constructor() { this.base = A; } }\'');
f3('class A { constructor() {} }; class B extends A {};');
f0('class A { constructor() {} }; class B extends A { constructor() {} }; B.toString()', '\'class B extends A { constructor() {} }\'');
f1('class A { constructor() {} }; class B extends A {}; (new B) instanceof A');
f1('class A { constructor() {} }; class B extends A {}; (new B) instanceof B');
f0('class A { constructor() {} }; class B extends A { constructor() { super(); this.base = A; this.derived = B; } }; (new B).base.toString()', '\'class A { constructor() {} }\'');
f0('class A { constructor() {} }; class B extends A { constructor() { super(); this.base = A; this.derived = B; } }; (new B).derived.toString()', '\'class B extends A { constructor() { super(); this.base = A; this.derived = B; } }\'');
debug('');
debug('Class expression');
f2('A');
f3('(class {})');
f3('(class { constructor(){} })');
f0('typeof (class {})', '"function"');
f3('(class A {})');
f0('typeof (class A {})', '"function"');
f2('(class A {}); A');
f3('new (class A {})');
f0('typeof (new (class A {}))', '"object"');
f3('(new (class A { constructor() { this.base = A; } })).base');
f0('(new (class A { constructor() { this.base = A; } })).base.toString()', '"class A { constructor() { this.base = A; } }"');
f3('class A {}; (class B extends A {})');
f2('class A {}; (class B extends A {}); B');
f3('class A {}; new (class B extends A {})');
f3('class A {}; new (class B extends A { constructor() { super(); this.base = A; this.derived = B; } })');
f1('class A {}; (new (class B extends A { constructor() { super(); this.base = A; this.derived = B; } })) instanceof A');
f0('class A { constructor() {} }; (new (class B extends A { constructor() { super(); this.base = A; this.derived = B; } })).base.toString()', '\'class A { constructor() {} }\'');
f0('class A { constructor() {} }; (new (class B extends A { constructor() { super(); this.base = A; this.derived = B; } })).derived.toString()', '\'class B extends A { constructor() { super(); this.base = A; this.derived = B; } }\'');
debug('');
debug('Class expression assignment to variable');
f2('A');
f3('var VarA = class {}');
f0('var VarA = class { constructor() {} }; VarA.toString()', '\'class { constructor() {} }\'');
testFailed('VarA');
f3('var VarA = class A { constructor() {} }');
f0('var VarA = class A { constructor() {} }; VarA.toString()', '\'class A { constructor() {} }\'');
f2('var VarA = class A { constructor() {} }; A.toString()');
f1('var VarA = class A { constructor() {} }; (new VarA) instanceof VarA');
f0('var VarA = class A { constructor() { this.base = A; } }; (new VarA).base.toString()', '\'class A { constructor() { this.base = A; } }\'');
f3('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { constructor() {} };');
f2('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { constructor() {} }; B');
f0('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { constructor() {} }; VarB.toString()', '\'class B extends VarA { constructor() {} }\'');
f1('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { }; (new VarB) instanceof VarA');
f1('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { }; (new VarB) instanceof VarB');
f1('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { constructor() { super(); this.base = VarA; this.derived = B; this.derivedVar = VarB; } }; (new VarB).base === VarA');
f1('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { constructor() { super(); this.base = VarA; this.derived = B; this.derivedVar = VarB; } }; (new VarB).derived === VarB');
f1('var VarA = class A { constructor() {} }; var VarB = class B extends VarA { constructor() { super(); this.base = VarA; this.derived = B; this.derivedVar = VarB; } }; (new VarB).derivedVar === VarB');
debug('');
debug('Class statement binding in other circumstances');
f2('var result = A; result');
f2('var result = A; class A {}; result');
f2('class A { constructor() { A = 1; } }; new A');
f0('class A { constructor() { } }; A = 1; A', '1');
f3('class A {}; var result = A; result');
eval('var Foo = 10');
f3;
10;
'use strict';
eval('var Foo = 10');
f2;
eval('class Bar { constructor() {} }; Bar.toString()');
'class Bar { constructor() {} }';
'use strict';
eval('class Bar { constructor() {} }');
Uint32Array.toString();