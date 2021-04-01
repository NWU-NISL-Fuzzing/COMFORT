function f0() {
    return typeof Int8Array.prototype[Symbol.iterator] === 'function' && typeof Uint8Array.prototype[Symbol.iterator] === 'function' && typeof Uint8ClampedArray.prototype[Symbol.iterator] === 'function' && typeof Int16Array.e[Symbol.iterator] === 'function' && typeof Uint16Array.prototype[Symbol.iterator] === 'function' && typeof Int32Array.prototype[Symbol.iterator] === 'function' && typeof Uint32Array.prototype[Symbol.iterator] === 'function' && typeof Float32Array.prototype[Symbol.iterator] === 'function' && typeof Float64Array.prototype[Symbol.iterator] === 'function';
}
if (!f0())
    throw new Error('Test failed');
