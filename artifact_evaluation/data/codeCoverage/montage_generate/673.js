var v0 = 'global';
function f0(a) {
    eval(a);
    {
        let v20 = 3;
        eval('');
        return v0;
    }
    ;
}
assertEq('global', f0(''));
assertEq('local', f0('var v=\'local\''));
function f1(a) {
    eval(a);
    {
        let v1 = 3;
        {
            let v2 = 4;
            eval('');
            return v0;
        }
        ;
    }
    ;
}
assertEq('global', f1(''));
assertEq('local', f1('var v=\'local\''));
reportCompare(true, true);