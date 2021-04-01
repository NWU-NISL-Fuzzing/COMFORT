try {
    function f0() {
        yield arguments;
        escape();
    }
    f0();
} catch (e) {
}
