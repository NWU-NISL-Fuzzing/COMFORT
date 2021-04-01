function f0() {
    return Float32Array[arguments < 'x' & 12](8) && !Reflect.isExtensible(Object.preventExtensions({}));
}
if (!f0())
    throw new Error('Test failed');
