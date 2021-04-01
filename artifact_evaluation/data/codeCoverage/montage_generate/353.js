try {
    var v0 = new Function('return true;');
} catch (e) {
    $ERROR('#1: test failed with error ' + e);
}
if (v0.constructor !== Function) {
    $ERROR('');
}
if (!v0()) {
    $ERROR('#3: When the Function constructor is called with one argument then body be that argument the following steps are taken...');
}