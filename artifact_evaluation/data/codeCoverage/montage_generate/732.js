if (this.WScript == undefined) {
    v0 = {
        _jscGC: f0,
        _jscLoad: f1,
        _jscPrint: f0,
        _jscQuit: f0,
        _convertPathname: function (dosStylePath) {
            return dosStylePath.replace(/\\/g, '/');
        },
        Arguments: ['summary'],
        Echo: function () {
            v0.call.apply(this, arguments);
        },
        LoadScriptFile: function (path) {
            v0._jscLoad(v0._convertPathname(path));
        },
        Quit: function () {
            v0._jscQuit();
        }
    };
    function f0() {
        v0._jscGC();
    }
    function f1(e) {
    }
}