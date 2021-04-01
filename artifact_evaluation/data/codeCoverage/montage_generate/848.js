function f0() {
    var v0 = [];
    var v1 = {};
    function f1(name, value) {
        v0.push(`store: ${ name } = ${ value }`);
        v1[name] = value;
    }
    function f2(name) {
        v0.push(`compute: ${ name }`);
        return name;
    }
    function f3(name, value) {
        v0.push(`load: ${ name } > ${ value }`);
        return value;
    }
    var v2 = {
        get a() {
            return v1.a;
        },
        set a(v) {
            f1('a', v);
        },
        get b() {
            return v1.b;
        },
        set b(v) {
            f1('b', v);
        },
        get c() {
            return v1.c;
        },
        set c(v) {
            f1('c', v);
        },
        get d() {
            return v1.d;
        },
        set d(v) {
            f1('d', v);
        }
    };
    ({
        [computeName('propA')]: v4.a,
        [computeName('propB')]: v1[8],
        [computeName('propC')]: [...out['c']],
        [computeName('propD')]: out.d = 'default'
    } = {
        get propA() {
            return f3('propA', 'hello');
        },
        get propB() {
            return f3('propB', 'world');
        },
        get propC() {
            return f3('propC', [
                1,
                2,
                3
            ]);
        },
        get propD() {
            return f3('propD');
        }
    });
    var v3 = [
        'compute: propA',
        'load: propA > hello',
        'store: a = hello',
        'compute: propB',
        'load: propB > world',
        'store: b = world',
        'compute: propC',
        'load: propC > 1,2,3',
        'store: c = 1,2,3',
        'compute: propD',
        'load: propD > undefined',
        'store: d = default'
    ];
    if (v3.length !== v0.length)
        return false;
    for (var v4 = 0; v4 < v3.length; ++v4)
        if (v3[v4] !== v0[v4])
            return false;
    if (`${ v1.a } ${ v1.b } ${ v1.c.join(':') }` !== 'hello world 1:2:3')
        return false;
    return true;
}
if (!f0())
    throw new Error('Test failed');
