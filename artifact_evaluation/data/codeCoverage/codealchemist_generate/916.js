var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(7);
var v5 = (function (){
function v5(v6, v7){
var v8 = v7.delay;
(this.strategy) = v6;
(this.options) = ({delay : v8});
}
(v5.prototype.isSupported) = (function (){
return this.strategy.isSupported();
});
(v5.prototype.connect) = (function (v9, v10){
var v6 = this.strategy;
var v11;
var v12 = new v4.OneOffTimer(this.options.delay, (function (){
(v11) = v6.connect(v9, v10);
}));
return ({abort : (function (){
v12.ensureAborted();
if(v11){
v11.abort();
}
}), forceMinPriority : (function (v13){
(v9) = v13;
if(v11){
v11.forceMinPriority(v13);
}
})});
});
return v5;
})();
(v2.__esModule) = true;
(v2["default"]) = v5;
});
(v0.SCALE_X) = "scX";
(v0.prototype._render) = (function (){
var v1 = this.ray;
if(! v1){
return;
}
var v2 = this._renderPoints[1];
var v3 = Math.min(v1.length, 1000000);
v2.copyFrom(v1.direction);
v2.scaleInPlace(v3);
v2.addInPlace(v1.origin);
v5.Mesh.CreateLines("ray", this._renderPoints, this._scene, true, this._renderLine);
});
// GenBlkBrick
for(var v1 = 10;(v1) > (5);v1--){
(v1) = ((v1) | ((v1) << (4))) & (252645135);
}
var v2 = (function (v1, v2){
var v3 = this.gameObject;
if((v1) === (undefined)){
(v1) = v3.x;
}
if((v2) === (undefined)){
(v2) = v3.y;
}
this.world.staticTree.remove(this);
v3.setPosition(v1, v2);
v3.getTopLeft(this.position);
this.updateCenter();
this.world.staticTree.insert(this);
});
// GenBlkBrick
for(v0 in []){
// GenBlkBrick
while((v3) !== (0)){
var v4 = (function (v1, v2){
return ((v1.type) === ("Identifier")) && ((v1.name) === (v2));
});
}
}
if(v3){
while(((v3) & (1)) == (0)){
(v3) >>= 1;
v1++;
}
}
[].reduce(v0, v3);
