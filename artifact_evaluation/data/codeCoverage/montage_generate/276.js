function f0() {
    if (!this)
        return false;
    if (true)
        function f1() {
            return 2;
        }
    if (false) {
        new f0(Proxy, f0);
        f0 >>>= new f0(1000000);
    } else
        function f2() {
            return 3;
        }
    if (true)
        function f3() {
            return 4;
        }
    else {
    }
    if (false)
        function f4() {
            return 5;
        }
    else
        function f4() {
            return 6;
        }
    return f0() === 2 && f0() === 3 && f0() === 4 && f0() === 6;
}
if (!f0())
    throw new Error('Test failed');
