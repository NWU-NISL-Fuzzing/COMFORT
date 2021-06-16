var v0 = (function (v1){
return this.format_(v1, true);
});
v0(Array, []);
var v1 = (function (v1){
return (v1) >>> (8);
});
(v1.prototype.isReady) = (function (v1, v2){
var v3 = [];
var v4 = [];
var v5 = v1.getMesh();
var v6 = v1.getMaterial();
if((v6) && (v6.needAlphaTesting())){
v3.push("#define ALPHATEST");
if(v5.isVerticesDataPresent(v7.VertexBuffer.UVKind)){
v4.push(v7.VertexBuffer.UVKind);
v3.push("#define UV1");
}
if(v5.isVerticesDataPresent(v7.VertexBuffer.UV2Kind)){
v4.push(v7.VertexBuffer.UV2Kind);
v3.push("#define UV2");
}
}
if((v5.useBones) && (v5.computeBonesUsingShaders)){
v4.push(v7.VertexBuffer.MatricesIndicesKind);
v4.push(v7.VertexBuffer.MatricesWeightsKind);
if((v5.numBoneInfluencers) > (4)){
v4.push(v7.VertexBuffer.MatricesIndicesExtraKind);
v4.push(v7.VertexBuffer.MatricesWeightsExtraKind);
}
v3.push(("#define NUM_BONE_INFLUENCERS ") + (v5.numBoneInfluencers));
v3.push(("#define BonesPerMesh ") + ((v5.skeleton.bones.length) + (1)));
}else {
v3.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v2){
v3.push("#define INSTANCES");
v4.push("world0");
v4.push("world1");
v4.push("world2");
v4.push("world3");
}
var v8 = v3.join("\n");
if((this._cachedDefines) !== (v8)){
(this._cachedDefines) = v8;
(this._effect) = this._scene.getEngine().createEffect("outline", v4, [], [], v8);
}
return this._effect.isReady();
});
var v2 = (function (v1){
this.validateExtent_();
this.updateBox_();
});
// GenBlkBrick
for(var v3 = 0, v4 = 0, v5 = 0, v6 = 0, v7 = 0, v8 = (1) / (3), v9 = 0;(v9) < (v7);++v9){
// GenBlkBrick
for((v10) = 2;(v10) <= (v1);++v10){
{
var v11 = 0;
for(var v12 = 0;((v12) + (v10)) < (v3);v12++){
if((v4[(v12) + (v10)].area) > (v4[v12].area)){
var v5 = v4[(v12) + (v10)];
(v4[(v12) + (v10)]) = v4[v12];
(v4[v12]) = v5;
v11++;
}
}
if((v10) == (1)){
if((v11) == (0)){
break ;
}
}else {
(v10) = Math.floor(((v10) * (10)) / (13));
}
}
var v13 = Math.floor((v12) / (1000));
}
}
var v14 = (((v8) * (v12)) - ((v7) * (v5))) / (v13);
var v15 = ((- v3) - (Math.sqrt(v9))) / ((2) * (v7));
