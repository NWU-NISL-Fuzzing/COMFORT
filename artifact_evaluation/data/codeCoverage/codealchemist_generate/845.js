var v0 = (function (v1, v2, v3){
(v2.exports) = ({create : v1(90), clone : v1(88), copy : v1(89), identity : v1(95), transpose : v1(110), invert : v1(97), adjoint : v1(87), determinant : v1(91), multiply : v1(99), translate : v1(109), scale : v1(107), rotate : v1(103), rotateX : v1(104), rotateY : v1(105), rotateZ : v1(106), fromRotationTranslation : v1(93), fromQuat : v1(92), frustum : v1(94), perspective : v1(101), perspectiveFromFieldOfView : v1(102), ortho : v1(100), lookAt : v1(98), str : v1(108)});
});
var v1 = (function (){
return (1.1) / (1);
});
(v1.prototype._incRefCount) = (function (){
if((this._refCount) === (0)){
this._scene.customRenderTargets.push(this._renderTexture);
}
return ++this._refCount;
});
var v2 = Array.prototype.map.call(v0, v1);
// GenBlkBrick
for(var v0 in v0.prototype){
v0(/([m|l])ouse$/i, "$1ouse");
v0(/(octop|vir)us$/i, "$1i");
}
for((v3) = 0;(v3) < (16);(v3) = (v3) + (1)){
v2.push(v3);
}
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : false}));
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : false}));
