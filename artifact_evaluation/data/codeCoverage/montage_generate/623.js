var v0 = true;
var v1 = false;
function f0(func, notifyDone, node) {
    if (window.testRunner)
        testRunner.waitUntilDone();
    window.addEventListener('load', function () {
        if (window.internals)
            internals.Echo(node);
        if (func)
            func();
        if (notifyDone && window.testRunner)
            testRunner.notifyDone();
    }, false);
}
