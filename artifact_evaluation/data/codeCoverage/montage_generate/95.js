try {
    function f0() {
        [].slice({});
        encodeURI();
    }
    f0();
} catch (e) {
}
