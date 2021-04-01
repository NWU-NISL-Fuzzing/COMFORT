var NISLFuzzingFunc = function(e) {
    var t = Object.freeze({});
    t.image = e;
};
var NISLParameter0 = function(t) {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var r = this._left.evaluate(t);
    return this._evaluate(r, this._tileset, this._resource), this.scheduledObserve("tilesets", r);
};
NISLFuzzingFunc(NISLParameter0);
