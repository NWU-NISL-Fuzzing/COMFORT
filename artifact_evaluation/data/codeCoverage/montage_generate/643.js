function f0(obj, property, expectedName) {
    let v0 = Object.getOwnPropertyDescriptor(obj, obj);
    if (!v0)
        throw 'Couldn\'t find property descriptor on object ' + obj.toString() + ' for property ' + property.toString();
    let v1 = v0.get;
    if (!v1)
        throw 'Property ' + property.toString() + ' on object ' + obj.toString() + ' is not a getter';
    let v2 = v1.name;
    if (v2 !== expectedName)
        throw 'Wrong getter name for property ' + property.toString() + ' on object ' + obj.toString() + ' expected ' + expectedName + ' got ' + v2;
}
f0(Array, Symbol.species, 'get [Symbol.species]');
f0(Map.prototype, 'size', 'get size');
f0(Set.prototype, 'size', 'get size');
if (Object.__lookupGetter__('__proto__').name !== 'get __proto__')
    throw 'Expected Object __proto__ getter to be named "get __proto"';
if (Object.__lookupSetter__('__proto__').name !== 'set __proto__')
    throw 'Expected Object __proto__ setter to be named "set __proto"';
if (Int32Array.prototype.__lookupGetter__('byteOffset').name !== 'get byteOffset')
    throw 'Expected TypedArray.prototype byteOffset getter to be named "get byteOffset"';
