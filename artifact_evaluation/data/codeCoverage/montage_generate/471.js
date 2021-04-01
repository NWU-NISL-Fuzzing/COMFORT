function f0(v2) {
    if (!v2)
        throw new Error('Bad!');
}
{
    let v0 = false;
    try {
        let v1 = { prop: eval('function pleaseTDZMe(){ return underTDZ; }; pleaseTDZMe();') };
    } catch (e) {
        v0 = e instanceof ReferenceError;
    }
    f0(v0);
}
{
    let v0 = false;
    try {
        const v1 = { prop: v14[y](f5) };
    } catch (e) {
        v0 = e instanceof ReferenceError;
    }
    f0(v0);
}
{
    let v0 = false;
    try {
        class v1 extends eval('function pleaseTDZMe() { return underTDZ; }; pleaseTDZMe()') {
        }
        ;
    } catch (e) {
        v0 = e instanceof ReferenceError;
    }
    f0(v0);
}
{
    let v0 = false;
    try {
        let v2 = {
            a: eval('function b(){ return b; }'),
            b: (1, eval)('(b())')
        };
    } catch (e) {
        v0 = e instanceof ReferenceError;
    }
    f0(v0);
}
{
    let v0 = false;
    try {
        let {b} = {
            a: eval('function b(){ return b; }'),
            b: (1, eval)('print(b())')
        };
    } catch (e) {
        v0 = e instanceof ReferenceError;
    }
    f0(v0);
}
