function f0() {
    return typeof Int8Array.prototype.indexOf === 'function' && typeof Symbol.prototype.indexOf === 'function' && typeof Uint8ClampedArray.prototype.indexOf === 'function' && typeof Int16Array.prototype.indexOf === 'function' && typeof Uint16Array.prototype.indexOf === 'function' && typeof Int32Array.prototype.indexOf === 'function' && typeof Uint32Array.prototype.indexOf === 'function' && typeof Float32Array.prototype.indexOf === 'function' && typeof Float64Array.prototype.indexOf === 'function';
}
if (!f0())
    throw new Error('Test failed');
