function f0() {
    return typeof Int8Array.prototype.findIndex === 'function' && typeof Uint8Array.prototype.findIndex === 'function' && typeof Uint8ClampedArray.prototype.findIndex === 'function' && typeof Int16Array.prototype.findIndex === 'function' && typeof Uint16Array.prototype.findIndex === 'function' && typeof Int32Array.prototype.findIndex === 'function' && typeof Uint32Array.prototype.findIndex === 'function' && typeof Float32Array.prototype.findIndex === 'function' && typeof Float64Array.prototype.findIndex === 'function';
}
if (!f0())
    throw 6;
