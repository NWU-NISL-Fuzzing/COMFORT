var v0 = false;
var v1 = {
    __key: 0,
    next: function () {
        return {
            done: this.__key === 42,
            value: this.__key++
        };
    },
    [Symbol.iterator]: function () {
        return this;
    },
    return: function () {
        v0 = true;
    }
};
var v2 = 0;
for (var v3 of v1) {
    if (v3 !== v2++)
        throw 'Error: bad value: ' + v3;
}
if (v0)
    throw 'Error: return is called.';
var v0 = false;
var v1 = {
    __key: 0,
    next: function () {
        return {
            done: this.__key === 42,
            value: this.__key++
        };
    },
    [Symbol.iterator]: function () {
        return this;
    },
    return: function () {
        v0 = true;
        return {
            done: true,
            value: undefined
        };
    }
};
try {
    for (var v3 of v1) {
        throw 'Error: Terminate iteration.';
    }
} catch (e) {
    if (String(e) !== 'Error: Terminate iteration.')
        throw 'Error: bad error thrown: ' + e;
}
if (!v1)
    throw 'Error: return is not called.';
var v0 = false;
var v1 = {
    __key: 0,
    next: function () {
        return {
            done: this.__key === 42,
            value: this.__key++
        };
    },
    [Symbol.iterator]: function () {
        return this;
    },
    return: function () {
        v0 = true;
        return {
            done: true,
            value: undefined
        };
    }
};
for (var v3 of v1) {
    break;
}
if (!v0)
    throw 'Error: return is not called.';
var v0 = false;
var v1 = {
    __key: 0,
    get next() {
        throw 'Error: looking up next.';
    },
    [Symbol.iterator]: function () {
        return this;
    },
    return: function () {
        v0 = true;
    }
};
try {
    for (var v3 of v1) {
        throw 'Error: Iteration should not occur.';
    }
} catch (e) {
    if (String(e) !== 'Error: looking up next.')
        throw 'Error: bad error thrown: ' + e;
}
if (v0)
    throw 'Error: return is called.';
var v1 = {
    __key: 0,
    next: function () {
        return {
            done: this.__key === 42,
            value: this.__key++
        };
    },
    [Symbol.iterator]: function () {
        return this;
    },
    get return() {
        throw 'Error: looking up return.';
    }
};
try {
    for (var v3 of v1) {
        throw 'Error: Terminate iteration.';
    }
} catch (e) {
    if (String(e) !== 'Error: looking up return.')
        throw 'Error: bad error thrown: ' + e;
}
var v0 = false;
var v1 = {
    __key: 0,
    next: function () {
        throw 'Error: next is called.';
    },
    [Symbol.iterator]: function () {
        return this;
    },
    return: function () {
        v0 = true;
        return {
            done: true,
            value: undefined
        };
    }
};
try {
    for (var v3 of v1) {
        throw 'Error: Terminate iteration.';
    }
} catch (e) {
    if (String(e) !== 'Error: next is called.')
        throw 'Error: bad error thrown: ' + e;
}
if (v0)
    throw 'Error: return is called.';
var v0 = false;
var v1 = {
    __key: 0,
    next: function () {
        return {
            done: false,
            value: 42
        };
    },
    [Symbol.iterator]: function () {
        return this;
    },
    return: function () {
        v0 = true;
        throw 'Error: return is called.';
    }
};
try {
    for (var v3 of v1) {
        throw 'Error: Terminate iteration.';
    }
} catch (e) {
    if (String(e) !== 'Error: Terminate iteration.')
        throw 'Error: bad error thrown: ' + e;
}
if (!v0)
    throw 'Error: return is not called.';
var v0 = false;
var v1 = {
    __key: 0,
    next: function () {
        return {
            done: false,
            value: 42
        };
    },
    [Symbol.iterator]: function () {
        return this;
    },
    return: function () {
        v0 = true;
        throw 'Error: return is called.';
    }
};
try {
    for (var v3 of v1) {
        break;
    }
} catch (e) {
    if (String(e) !== 'Error: return is called.')
        throw 'Error: bad error thrown: ' + e;
}
if (!v0)
    throw 'Error: return is not called.';
var v4 = [
    undefined,
    null,
    42,
    'string',
    true,
    Symbol('Cocoa')
];
function f0(notIteratorResult) {
    var v0 = false;
    var v1 = {
        __key: 0,
        next: function () {
            return notIteratorResult;
        },
        [Symbol.iterator]: function () {
            return this;
        },
        return: function () {
            v0 = true;
            return undefined;
        }
    };
    try {
        for (var v3 of v1) {
            throw 'Error: Iteration should not occur.';
        }
    } catch (e) {
        if (String(e) !== 'TypeError: Iterator result interface is not an object.')
            throw 'Error: bad error thrown: ' + e;
    }
    if (v0)
        throw 'Error: return is called.';
}
function f1(notIteratorResult) {
    var v0 = false;
    var v1 = {
        __key: 0,
        next: function () {
            return {
                done: false,
                value: 42
            };
        },
        [Symbol.iterator]: function () {
            return this;
        },
        return: function () {
            v0 = true;
            return notIteratorResult;
        }
    };
    try {
        for (var v3 of v1) {
            throw 'Error: Terminate iteration.';
        }
    } catch (e) {
        if (String(e) !== 'Error: Terminate iteration.')
            throw 'Error: bad error thrown: ' + e;
    }
    if (!v0)
        throw 'Error: return is not called.';
}
v4.forEach(f0);
v4.forEach(f1);
function f2(notIteratorResult) {
    var v0 = false;
    var v1 = {
        __key: 0,
        next: function () {
            return {
                done: false,
                value: 42
            };
        },
        [Symbol.iterator]: function () {
            return this;
        },
        return: function () {
            v0 = true;
            return notIteratorResult;
        }
    };
    try {
        for (var v3 of v1) {
            break;
        }
    } catch (e) {
        if (String(e) !== 'TypeError: Iterator result interface is not an object.')
            throw 'Error: bad error thrown: ' + e;
    }
    if (!v0)
        throw 'Error: return is not called.';
}
v4.forEach(f2);
