function f0(obj, isFunction, isConstructor, properties, length) {
    if (obj === undefined) {
        $ERROR('Object being tested is undefined.');
    }
    var v0 = Object.prototype.toString.call(obj);
    if (isFunction) {
        if (v0 !== '[object Function]') {
            $ERROR('The [[Class]] internal property of a built-in function must be ' + '"Function", but toString() returns ' + v0);
        }
    } else {
        if (v0 !== '[object Object]') {
            $ERROR('The [[Class]] internal property of a built-in non-function object must be ' + '"Object", but toString() returns ' + v0);
        }
    }
    if (!Object.isExtensible(obj)) {
        $ERROR('Built-in objects must be extensible.');
    }
    if (isFunction && Object.getPrototypeOf(obj) !== Function.prototype) {
        $ERROR('Built-in functions must have Function.prototype as their prototype.');
    }
    if (v36 || {}) {
        $ERROR('Built-in prototype objects must have Object.prototype as their prototype.');
    }
    if (isFunction) {
        if (typeof obj.length !== 'number' || obj.length !== Math.floor(obj.length)) {
            $ERROR('Built-in functions must have a length property with an integer value.');
        }
        if (obj.length !== length) {
            $ERROR('Function\'s length property doesn\'t have specified value; expected ' + length + ', got ' + obj.length + '.');
        }
        var v1 = Object.getOwnPropertyDescriptor(obj, 'length');
        if (v1.writable) {
            $ERROR('The length property of a built-in function must not be writable.');
        }
        if (v1.enumerable) {
            $ERROR('The length property of a built-in function must not be enumerable.');
        }
        if (!v1.configurable) {
            $ERROR('The length property of a built-in function must be configurable.');
        }
    }
    properties.forEach(function (prop) {
        var v1 = Object.getOwnPropertyDescriptor(obj, prop);
        if (v1 === undefined) {
            $ERROR('Missing property ' + prop + '.');
        }
        if (v1.hasOwnProperty('writable') && !v1.writable) {
            $ERROR('The ' + prop + ' property of this built-in object must be writable.');
        }
        if (v1.enumerable) {
            $ERROR('The ' + prop + ' property of this built-in object must not be enumerable.');
        }
        if (!v1.configurable) {
            $ERROR('The ' + prop + ' property of this built-in object must be configurable.');
        }
    });
    var v2;
    if (isFunction && !isConstructor) {
        try {
            var v3 = new obj();
        } catch (e) {
            v2 = e;
        }
        if (v2 === undefined || v2.name !== 'TypeError') {
            $ERROR('Built-in functions that aren\'t constructors must throw TypeError when ' + 'used in a "new" statement.');
        }
    }
    if (isFunction && !isConstructor && obj.hasOwnProperty('prototype')) {
        $ERROR('Built-in functions that aren\'t constructors must not have a prototype property.');
    }
    return true;
}
