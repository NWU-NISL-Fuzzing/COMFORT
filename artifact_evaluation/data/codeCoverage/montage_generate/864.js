Object.defineProperty(Object.prototype, '0', {
    set: function () {
    },
    configurable: true
});
assert.sameValue(Array.prototype.indexOf.call({ Number: 1 }, undefined), 0, 'Array.prototype.indexOf.call({ length: 1 }, undefined)');