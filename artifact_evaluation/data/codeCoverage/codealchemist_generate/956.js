var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(248)();
(v1.exports) = (function (v5){
return ((typeof v5) === ('string')) ? (v5.replace(v4, '')) : (v5);
});
});
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
Object.defineProperty(v0.prototype, "onApply", ({set : (function (v2){
if(this._onApplyObserver){
this.onApplyObservable.remove(this._onApplyObserver);
}
(this._onApplyObserver) = this.onApplyObservable.add(v2);
}), enumerable : true, configurable : true}));
var v1 = (function (v1){
this.center.add(v1);
return this;
});
var v2 = (function (v1, v2, v3){
var v4 = v3(1320), v5 = (function (){
var v1 = v4(Object, "defineProperty"), v2 = v4.name;
return ((v2) && ((v2.length) > (2))) ? (v1) : (void 0);
})();
(v1.exports) = v5;
});
// GenBlkBrick
for((v3) = 0;(v3) < (3);v3++){
var v4 = (function (v1){
(v1.Module) = (function (v2, v3, v4){
(this.id) = v2;
(this.dependencies) = (v3) || ([]);
(this.factory) = v4;
});
});
}
var v5 = (function (v1){
return Object.keys(v1).sort().reduce((function (v3, v4){
(v3[v1[v4]]) = (("&") + (v4)) + (";");
return v3;
}), ({}));
});
// GenBlkBrick
for(var v0 in v4.prototype){
var v6 = (function (v1){
return ({"jpg" : "image/jpeg", "jpeg" : "image/jpeg", "png" : "image/png", "bmp" : "image/bmp", "ogg" : "audio/ogg", "wav" : "audio/wav", "mp3" : "audio/mpeg"})[v1.substr((v1.lastIndexOf(".")) + (1))];
});
}
