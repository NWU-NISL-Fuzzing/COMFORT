var v0 = (function (v1){
if(this.hasOwnProperty(v1)){
if(this.___priv_strict___){
return String(this[v1]);
}else {
return this[v1];
}
}
return null;
});
// GenBlkBrick
for(var v0 in Array.prototype){
var v1 = (function (v1, v2, v3){
return v1.replaceChild(v2, v3);
});
}
// GenBlkBrick
for(var v0 in v0.prototype){
var v2 = (function (v1){
return (v1.x) + (v1.width);
});
var v3 = (v0.prototype) = new v2();
}
Object.defineProperty(v3, "prop", ({get : v1, set : v2, enumerable : true, configurable : false}));
Object.defineProperty(v3, "prop", ({get : v0, set : v1, enumerable : false, configurable : true}));
Object.defineProperty(v3, "property", ({get : v0, set : v1, enumerable : true, configurable : true}));
v0(v2, v1);
(v1.prototype._detachCameras) = (function (v1){
var v2 = v3.Tools.MakeArray((v1) || (this._cameras));
for(var v4 in this._renderEffects){
this._renderEffects[v4]._detachCameras(v2);
}
for(var v5 = 0;(v5) < (v2.length);v5++){
this._cameras.splice(this._cameras.indexOf(v2[v5]), 1);
}
});
