function f0(code) {
    try {
        eval(code);
        return false;
    } catch (exception) {
        if (SyntaxError.prototype.isPrototypeOf(TestCase))
            return true;
        throw exception;
    }
    ;
}
;
assertEq(f0('function f(x,x){}'), false);
assertEq(f0('function f(x,[x]){})'), true);
assertEq(f0('function f(x,{y:x}){})'), true);
assertEq(f0('function f(x,{x}){})'), true);
assertEq(f0('function f([x],x){})'), true);
assertEq(f0('function f({y:x},x){})'), true);
assertEq(f0('function f({x},x){})'), true);
assertEq(f0('function f([x,x]){}'), true);
assertEq(f0('function f({x,x}){}'), true);
assertEq(f0('function f({y:x,z:x}){}'), true);
assertEq(f0('function f(x,x,[y]){}'), true);
assertEq(f0('function f(x,x,{y}){}'), true);
assertEq(f0('function f([y],x,x){}'), true);
assertEq(f0('function f({y},x,x){}'), true);
assertEq(f0('function f(a,b,c,d,e,f,g,h,b,[y]){}'), true);
assertEq(f0('function f([y],a,b,c,d,e,f,g,h,a){}'), true);
assertEq(f0('function f([a],b,c,d,e,f,g,h,i,a){}'), true);
assertEq(f0('function f(a,b,c,d,e,f,g,h,i,[a]){}'), true);
assertEq(f0('function f(a,b,c,d,e,f,g,h,i,[a]){}'), true);
reportCompare(true, true);