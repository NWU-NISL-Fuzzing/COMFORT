// Enable the flag using '\n'.repeat(0x1000)
eval(`(function f() {
    with ({}) {
        (function () {
            print(f);
        })();
    }
}());` + String.prototype.match.call("\n", /\u1e2f/iu).toLocaleString().repeat(0x1000));
