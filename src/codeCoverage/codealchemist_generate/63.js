// GenBlkBrick
for(var v0 in Object){
var v0 = (function (v1){
var v2 = v1.memoryReader[v1.registersHL](v1, v1.registersHL);
var v3 = ((v1.registerA) - (v2)) - ((v1.FCarry) ? (1) : (0));
(v1.FHalfCarry) = ((((v1.registerA) & (0xF)) - ((v2) & (0xF))) - ((v1.FCarry) ? (1) : (0))) < (0);
(v1.FCarry) = (v3) < (0);
(v1.registerA) = (v3) & (0xFF);
(v1.FZero) = (v1.registerA) == (0);
(v1.FSubtract) = true;
});
}
v0(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
(v0.prototype.updateControlsFromObject) = (function (v1){
this.collectDataFromObject(v1);
this.updateControls(this.data);
});
(v0.prototype.isReady) = (function (v1, v2){
var v3 = v1.getMaterial();
if(v3.disableDepthWrite){
return false;
}
var v4 = [];
var v5 = [];
var v6 = v1.getMesh();
if((v3) && (v3.needAlphaTesting())){
v4.push("#define ALPHATEST");
if(v6.isVerticesDataPresent(v7.VertexBuffer.UVKind)){
v5.push(v7.VertexBuffer.UVKind);
v4.push("#define UV1");
}
if(v6.isVerticesDataPresent(v7.VertexBuffer.UV2Kind)){
v5.push(v7.VertexBuffer.UV2Kind);
v4.push("#define UV2");
}
}
if((v6.useBones) && (v6.computeBonesUsingShaders)){
v5.push(v7.VertexBuffer.MatricesIndicesKind);
v5.push(v7.VertexBuffer.MatricesWeightsKind);
if((v6.numBoneInfluencers) > (4)){
v5.push(v7.VertexBuffer.MatricesIndicesExtraKind);
v5.push(v7.VertexBuffer.MatricesWeightsExtraKind);
}
v4.push(("#define NUM_BONE_INFLUENCERS ") + (v6.numBoneInfluencers));
v4.push(("#define BonesPerMesh ") + ((v6.skeleton) ? ((v6.skeleton.bones.length) + (1)) : (0)));
}else {
v4.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v2){
v4.push("#define INSTANCES");
v5.push("world0");
v5.push("world1");
v5.push("world2");
v5.push("world3");
}
var v8 = v4.join("\n");
if((this._cachedDefines) !== (v8)){
(this._cachedDefines) = v8;
(this._effect) = this._scene.getEngine().createEffect("depth", v5, [], [], v8);
}
return this._effect.isReady();
});
(v0.prototype.showControls) = (function (v1, v2){
});
var v1 = (function (){
return (this.is_for_sale) && (this.sale_price);
});
(v1.wasCalled) = false;
var v2 = ({b3dm : (function (v1, v2, v3, v4, v5){
return new v6(v1, v2, v3, v4, v5);
}), pnts : (function (v1, v2, v3, v4, v5){
return new v7(v1, v2, v3, v4, v5);
}), i3dm : (function (v1, v2, v3, v4, v5){
return new v8(v1, v2, v3, v4, v5);
}), cmpt : (function (v1, v2, v3, v4, v5){
return new v9(v1, v2, v3, v4, v5, v2);
}), json : (function (v1, v2, v3, v4, v5){
return new v10(v1, v2, v3, v4, v5);
}), geom : (function (v1, v2, v3, v4, v5){
return new v11(v1, v2, v3, v4, v5);
}), vctr : (function (v1, v2, v3, v4, v5){
return new v12(v1, v2, v3, v4, v5);
})});
