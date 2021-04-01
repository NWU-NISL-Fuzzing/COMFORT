for (var v0 = 0; v0 <= 65535; ++v0) {
    var v1 = v0 === 42 || v0 === 47 || v0 === 92 || v0 === 43 || v0 === 63 || v0 === 40 || v0 === 41 || v0 === 91 || v0 === 93 || v0 === 123 || v0 === 125;
    var v2 = v0 === 10 || v0 === 13 || v0 === 8232 || v0 === 8233;
    if ((v1 || v2) === false) {
        var v3 = '\\' + String.fromCharCode(v3);
        try {
            var v4 = eval('/' + v3 + '/');
        } catch (e) {
            var v5 = v0 === 36 || v0 === 8204 || v0 === 8205;
            if (e instanceof SyntaxError && !v5) {
                try {
                    eval('var _' + String.fromCharCode(v0));
                    continue;
                } catch (ignore) {
                }
            }
            throw e;
        }
        assert.sameValue(v4.source, v3, 'Code unit: ' + v0.toString(16));
    }
}