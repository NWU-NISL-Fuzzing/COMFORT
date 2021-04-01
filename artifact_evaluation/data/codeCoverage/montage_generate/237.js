var v0 = function () {
    var v1 = 16;
    function f0(v2) {
        if (v2 >= 1 << 30)
            return 1 << 30;
        if (v2 == 0)
            return 16;
        v2 = v2 - 1;
        v2 |= v2 >> 1;
        v2 |= v2 >> 2;
        v2 |= v2 >> 4;
        v2 |= v2 >> 8;
        v2 |= v2 >> 16;
        return v2 + 1;
    }
    function f1(v3) {
        switch (typeof v3) {
        case 'undefined':
            return 0;
        case 'object':
            if (!v3)
                return 0;
        case 'function':
            return v3.hashCode();
        case 'boolean':
            return v3 | 0;
        case 'number':
            if ((v3 | 0) == v3)
                return v3;
            v3 = '' + v3;
        case 'string':
            var v4 = 0;
            var v5 = v3.length;
            for (var v6 = 0; v6 < v5; v6++) {
                v4 = (31 * v4 | 0) + v3.charCodeAt(v6) | 0;
            }
            return v4;
        default:
            throw new Error('Internal error: Bad JavaScript value type');
        }
    }
    function f2(a, b) {
        if (typeof a != typeof b)
            return false;
        switch (typeof a) {
        case 'object':
            if (!a)
                return !b;
        case 'function':
            switch (typeof b) {
            case 'object':
            case 'function':
                return a.equals(b);
            default:
                return false;
            }
        default:
            return a == b;
        }
    }
    function f3(v3, v12, value) {
        this._key = v3;
        this._value = value;
        this._origKeyHash = v12;
        this._next = null;
    }
    f3.prototype = {
        clone: function () {
            var v7 = new f3(this._key, this._hash, this._value);
            if (this._next)
                v7._next = this._next.clone();
            return v7;
        },
        toString: function () {
            return this._key + '=' + this._value;
        },
        get key() {
            return this._key;
        },
        get value() {
            return this._value;
        }
    };
    function f4(v19) {
        this._associatedMap = v19;
        this._expectedModCount = v19._modCount;
        this._futureEntry = null;
        this._currentEntry = null;
        this._prevEntry = null;
        this._position = 0;
    }
    f4.prototype = {
        hasNext: function () {
            if (this._futureEntry)
                return true;
            while (this._position < this._associatedMap._elementData.length) {
                if (!this._associatedMap._elementData[this._position])
                    this._position++;
                else
                    return true;
            }
            return false;
        },
        _checkConcurrentMod: function () {
            if (this._expectedModCount != this._associatedMap._modCount)
                throw new Error('Concurrent HashMap modification detected');
        },
        _makeNext: function () {
            this._checkConcurrentMod();
            if (!this.hasNext())
                throw new Error('No such element');
            if (!this._futureEntry) {
                this._currentEntry = this._associatedMap._elementData[this._position++];
                this._futureEntry = this._currentEntry._next;
                this._prevEntry = null;
                return;
            }
            if (this._currentEntry)
                this._prevEntry = this._currentEntry;
            this._currentEntry = this._futureEntry;
            this._futureEntry = this._futureEntry._next;
        },
        remove: function () {
            this._checkConcurrentMod();
            if (!this._currentEntry)
                throw new Error('Illegal state');
            if (!this._prevEntry) {
                var v6 = this._currentEntry._origKeyHash & this._associatedMap._elementData.length - 1;
                this._associatedMap._elementData[v6] = this._associatedMap._elementData[v6]._next;
            } else
                this._prevEntry._next = this._currentEntry._next;
            this._currentEntry = null;
            this._expectedModCount++;
            this._associatedMap._modCount++;
            this._associatedMap._elementCount--;
        }
    };
    function f5(v19) {
        f4.call(this, v19);
    }
    f5.prototype = {
        next: function () {
            this._makeNext();
            return this._currentEntry;
        }
    };
    f5.prototype.__proto__ = f4.prototype;
    function f6(v19) {
        f4.call(this, v19);
    }
    f6.prototype = {
        next: function () {
            this._makeNext();
            return this._currentEntry._key;
        }
    };
    f6.prototype.__proto__ = f4.prototype;
    function f7(v19) {
        f4.call(this, v19);
    }
    f7.prototype = {
        next: function () {
            this._makeNext();
            return this._currentEntry._value;
        }
    };
    f7.prototype.__proto__ = f4.prototype;
    function f8(v19) {
        this._associatedMap = v19;
    }
    f8.prototype = {
        size: function () {
            return this._associatedMap._elementCount;
        },
        clear: function () {
            this._associatedMap.clear();
        },
        remove: function (object) {
            var v8 = this._associatedMap._getEntry(object.key);
            if (!v8)
                return false;
            if (!f2(v8._value, object.value))
                return false;
            this._associatedMap._removeEntry(v8);
            return true;
        },
        contains: function (object) {
            var v8 = this._associatedMap._getEntry(object.key);
            if (!v8)
                return false;
            return f2(v8._value, object.value);
        },
        iterator: function () {
            return new f5(this._associatedMap);
        }
    };
    function f9(v19) {
        this._associatedMap = v19;
    }
    f9.prototype = {
        contains: function (object) {
            return this._associatedMap.contains(object);
        },
        size: function () {
            return this._associatedMap._elementCount;
        },
        clear: function () {
            this._associatedMap.clear();
        },
        remove: function (v3) {
            return !!this._associatedMap.remove(v3);
        },
        cb: function (v10, arguments, v5, f5, v7) {
            throw 0;
        }
    };
    function f10(v19) {
        this._associatedMap = v19;
    }
    f10.prototype = {
        contains: function (object) {
            return this._associatedMap.containsValue(object);
        },
        size: function () {
            return this._associatedMap._elementCount;
        },
        clear: function () {
            this._associatedMap.clear();
        },
        iterator: function () {
            return new f7(this._associatedMap);
        }
    };
    function v0(v9, v10) {
        if (v9 == null)
            v9 = v1;
        if (v10 == null)
            v10 = 0.75;
        if (v9 < 0)
            throw new Error('Invalid argument to HashMap constructor: capacity is negative');
        if (v10 <= 0)
            throw new Error('Invalid argument to HashMap constructor: loadFactor is not positive');
        this._capacity = f0(v9);
        this._elementCount = 0;
        this._elementData = new Array(this.capacity);
        this._loadFactor = v10;
        this._modCount = 0;
        this._computeThreshold();
    }
    v0.prototype = {
        _computeThreshold: function () {
            this._threshold = this._elementData.length * this._loadFactor | 0;
        },
        clear: function () {
            if (!this._elementCount)
                return;
            this._elementCount = 0;
            for (var v11 = this._elementData.length; v11--;)
                this._elementData[v11] = null;
            this._modCount++;
        },
        clone: function () {
            var v7 = new v0(this._elementData.length, this._loadFactor);
            v7.putAll(this);
            return v7;
        },
        containsKey: function (v3) {
            return !!this._getEntry(v3);
        },
        containsValue: function (value) {
            for (var v11 = this._elementData.length; v11--;) {
                for (var v8 = this._elementData[v11]; v8; v8 = v8._next) {
                    if (f2(value, v8._value))
                        return true;
                }
            }
            return false;
        },
        entrySet: function () {
            return new f8(this);
        },
        get: function (v3) {
            var v8 = this._getEntry(v3);
            if (v8)
                return v8._value;
            return null;
        },
        _getEntry: function (v3) {
            var v12 = f1(v3);
            var v6 = v12 & this._elementData.length - 1;
            return this._findKeyEntry(v3, v6, v12);
        },
        _findKeyEntry: function (v3, v6, keyHash) {
            var v8 = this._elementData[v6];
            while (v8 && (v8._origKeyHash != keyHash || !f2(v3, v8._key)))
                v8 = v8._next;
            return v8;
        },
        isEmpty: function () {
            return !this._elementCount;
        },
        keySet: function () {
            return new f9(this);
        },
        put: function (v3, value) {
            var v12 = f1(v3);
            var v6 = v12 & this._elementData.length - 1;
            var v8 = this._findKeyEntry(v3, v6, v12);
            if (!v8) {
                this._modCount++;
                v8 = this._createHashedEntry(v3, v6, v12);
                if (++this._elementCount > this._threshold)
                    this._rehash();
            }
            var v7 = v8._value;
            v8._value = value;
            return v7;
        },
        _createHashedEntry: function (v3, v6, v12) {
            var v8 = new f3(v3, v12, null);
            v8._next = this._elementData[v6];
            this._elementData[v6] = v8;
            return v8;
        },
        putAll: function (v19) {
            if (v19.isEmpty())
                return;
            for (var v13 = v19.entrySet().iterator(); v13.hasNext();) {
                var v8 = v13.next();
                put(v8.key, v8.value);
            }
        },
        _rehash: function (v9) {
            if (v9 == null)
                v9 = this._elementData.length;
            var v14 = f0(!v9 ? 1 : v9 << 1);
            var v15 = new Array(v14);
            for (var v11 = 0; v11 < this._elementData.length; ++v11) {
                var v8 = this._elementData[v11];
                this._elementData[v11] = null;
                while (v8) {
                    var v6 = v8._origKeyHash & v14 - 1;
                    var v16 = v8._next;
                    v8._next = v15[v6];
                    v15[v6] = v8;
                    v8 = v16;
                }
            }
            this._elementData = v15;
            this._computeThreshold();
        },
        remove: function (v3) {
            var v8 = this._removeEntryForKey(v3);
            if (!v8)
                return null;
            return v8._value;
        },
        _removeEntry: function (v8) {
            var v6 = v8._origKeyHash & this._elementData.length - 1;
            var v17 = this._elementData[v6];
            if (v17 == v8)
                this._elementData[v6] = v8._next;
            else {
                while (v17._next != v8)
                    v17 = v17._next;
                v17._next = v8._next;
            }
            this._modCount++;
            this._elementCount--;
        },
        _removeEntryForKey: function (v3) {
            var v12 = f1(v3);
            var v6 = v12 & this._elementData.length - 1;
            var v8 = this._elementData[v6];
            var v18 = null;
            while (v8 != null && !(v8._origKeyHash == v12 && f2(v3, v8._key))) {
                v18 = v8;
                v8 = v8._next;
            }
            if (!v8)
                return null;
            if (!v18)
                this._elementData[v6] = v8._next;
            else
                v18._next = v8._next;
            this._modCount++;
            this._elementCount--;
            return v8;
        },
        size: function () {
            return this._elementCount;
        },
        values: function () {
            return new f10(this);
        }
    };
    return v0;
}();
var v19 = new v0();
var v20 = 50000;
for (var v11 = 0; v11 < v20; ++v11)
    v19.put(v11, 42);
var v7 = 0;
for (var v21 = 0; v21 < 5; ++v21) {
    for (var v11 = 0; v11 < v20; ++v11)
        v7 += v19.get(v11);
}
var v22 = 0;
var v23 = 0;
for (var v24 = v19.keySet().iterator(); v24.hasNext();) {
    var v3 = v24.next();
    v22 += v3;
    v23 += v19.get(v3);
}
if (v7 != 10500000)
    throw 'Error: result = ' + v7;
if (v22 != 1249975000)
    throw 'Error: keySum = ' + v22;
if (v23 != 2100000)
    throw 'Error: valueSum = ' + v23;
