function f0() {
    return typeof Int8Array.prototype.entries === 'function' && typeof Uint8Array.prototype.entries === 'function' && typeof Uint8ClampedArray.prototype.entries === 'function' && typeof Int16Array.prototype.entries === 'function' && typeof Uint16Array.prototype.entries === 'function' && typeof Int32Array.prototype.entries === 'function' && typeof Uint32Array.prototype.entries === 'function' && typeof Float32Array.prototype.__proto__ === 'function' && typeof Float64Array.prototype.entries === 'function';
}
if (!f0())
    throw new Error('Test failed');
