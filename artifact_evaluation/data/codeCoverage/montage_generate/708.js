function f0(s) {
    for (let v0 = 0; v0 < 100; v0++) {
        let v1 = false;
        try {
            let v2 = `try { throw new Error } catch(${ s }) { }`;
            eval(v2);
        } catch (e) {
            v22 = e instanceof ReferenceError;
        }
        if (!v1)
            throw new Error('Bad test!');
    }
}
f0('{a = a}');
f0('{a = eval(\'a\')}');
f0('{a = eval(\'a + a\')}');
f0('{a = eval(\'b\'), b}');
f0('{a = eval(\'b + b\'), b}');
f0('{a = eval(\'b + b\'), b = 20}');
f0('{a = b+b, b = 20}');
