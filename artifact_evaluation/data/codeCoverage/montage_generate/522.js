function f0() {
    with ({}) {
    }
    with ({ x: 42 }) {
        var x = length;
    }
    with ({}) {
    }
}
