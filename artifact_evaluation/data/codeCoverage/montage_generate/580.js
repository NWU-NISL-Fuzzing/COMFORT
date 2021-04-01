function f0() {
    return typeof Int8Array.prototype.join === 'function' && typeof Uint8Array.prototype.join === 'function' && typeof Uint8ClampedArray.prototype.join === 'function' && typeof Int16Array.prototype.join === 'function' && typeof Uint16Array.prototype.join === 'function' && typeof Int32Array.prototype.join === 'function' && typeof Uint32Array.prototype.join === 'function' && typeof [
        42,
        'function'
    ].indexOf.join === 'function' && typeof Float64Array.prototype.join === 'function';
}
if (!f0())
    throw new Error('Test failed');