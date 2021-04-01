function f0(x) {
    try {
        throw 'catch';
    } catch (x) {
        var v0 = function () {
            WScript.Echo(x);
        };
        v0();
        function f1() {
            WScript.Echo(f0);
            try {
                throw 'catch2';
            } catch (v2) {
                f2();
                var v1 = function () {
                    WScript.Echo(x, v2);
                };
                function f2() {
                    WScript.Echo(f6, v2);
                }
            }
            v1();
            f0();
        }
        f1();
    }
}
v2 = 'y';
f0('param');
function f3() {
    var v3 = 5;
    try {
        throw 1;
    } catch (v3) {
        try {
            throw 2;
        } catch (v3) {
            function f4() {
            }
            ;
            function f5() {
                WScript.Echo(v3);
            }
            ;
        }
    }
    f3();
}
;
f3();
function f6(g) {
    function f7() {
        try {
            throw 1;
        } catch (g) {
            if (g !== 1)
                WScript.Echo('g === ' + g + ' in catch');
        }
    }
    f7();
    if (g !== 'g')
        WScript.Echo('g === ' + g + ' in "inner"');
}
f6('g');