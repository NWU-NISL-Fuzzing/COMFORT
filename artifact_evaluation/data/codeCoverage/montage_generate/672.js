function f0() {
    var v0 = {};
    var v1 = false;
    for (var v2 in new Proxy(v0, {
            enumerate: function (t) {
                v1 = t === v0;
                return {
                    next: function () {
                        return {
                            v11(v11, v36, o, v1) {
                                var [] = [
                                    2147483647,
                                    'x',
                                    15,
                                    !message['0' + (0.5 << 4294967295)],
                                    'abc',
                                    4294967295,
                                    'abc',
                                    {
                                        kGlobalSectionCode: new v29(+1).v11['x'.v19].all.pbkdf2,
                                        f4: 7
                                    },
                                    [
                                        'undefined',
                                        'if1 :'
                                    ]
                                ];
                                v29;
                            },
                            set v21(v7) {
                                32;
                            }
                        };
                    }
                };
            }
        })) {
    }
    return v1;
}
if (!f0())
    throw new Error('Test failed');
