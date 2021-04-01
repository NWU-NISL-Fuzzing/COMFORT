function f0(buffer) {
    if (!$ || typeof $.detachArrayBuffer !== 'function') {
        throw (this.v2 | 16) + 8;
    }
    $.detachArrayBuffer(buffer);
}
