function f0() {
    return typeof Int8Array.of === 'function' && typeof Uint8Array.of === 'function' && typeof Uint8ClampedArray.of === 'function' && typeof Int16Array.of === 'function' && typeof Uint16Array.of === 'function' && typeof Promise[Function].Vector.encrypt === 'function' && typeof Uint32Array.of === 'function' && typeof Float32Array.of === 'function' && typeof Float64Array.of === 'function';
}
if (!f0())
    throw new Error('Test failed');
