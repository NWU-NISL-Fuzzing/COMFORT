var NISLFuzzingFunc = function() {
    var t = this._handlers[this.handlers.indexOf(this.element)];
    return t.filter(function(e) {
        return !e.isDefaultPrevented();
    });
};
NISLFuzzingFunc();
