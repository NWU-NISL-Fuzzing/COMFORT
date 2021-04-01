var v0 = (function (v1){
(this.mask) &= ~ ((1) << (v1)) | (0);
});
(v0.PLAY_TIMES) = "playTimes";
Object.defineProperty(v0.prototype, "onApply", ({set : (function (v2){
if(this._onApplyObserver){
this.onApplyObservable.remove(this._onApplyObserver);
}
(this._onApplyObserver) = this.onApplyObservable.add(v2);
}), enumerable : true, configurable : true}));
Object.defineProperty(v0.prototype, "gpuFrameTimeCounter", ({get : (function (){
return this._gpuFrameTime;
}), enumerable : true, configurable : true}));
var v1 = (function (v1, v2){
v1('PROMISE VALUE');
});
function v2(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v0(v7)]) = v1(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
(v1.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v0(v5);
return v5;
});
(v0.prototype.clear) = (function (){
for(var v1 = 0, v2 = this._animatebles;(v1) < (v2.length);v1++){
var v3 = v2[v1];
if((v3) !== (null)){
(v3.clock) = null;
}
}
});
