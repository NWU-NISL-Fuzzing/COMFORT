var v0 = (function (){
var v1 = Math.floor((this.red) * (255));
var v3 = Math.floor((this.green) * (255));
var v4 = Math.floor((this.blue) * (255));
return (((((("rgb(") + (v1)) + (",")) + (v3)) + (",")) + (v4)) + (")");
});
var v1 = (function (v1, v2, v3){
var v4 = v3(29), v5 = v3(121).onFreeze;
v3(93)("seal", (function (v1){
return (function (v2){
return ((v1) && (v4(v2))) ? (v1(v5(v2))) : (v2);
});
}));
});
// GenBlkBrick
for(var v2 = 0;(v2) < (32);v2++){
function v3(v1){
try{
throw v1;
}catch(v2){
return v2;
}
}
}
Array.prototype.reduce.call(v0, v3, v2);
{
if((v2) == (2)){
(v4) = "";
}
}
(v1.prototype.isReady) = (function (v1, v2){
var v3 = v1.getMaterial();
if(v3.disableDepthWrite){
return false;
}
var v4 = [];
var v5 = [];
var v6 = v1.getMesh();
var v7 = v6.getScene();
if((v3) && (v3.needAlphaTesting())){
v4.push("#define ALPHATEST");
if(v6.isVerticesDataPresent(v8.VertexBuffer.UVKind)){
v5.push(v8.VertexBuffer.UVKind);
v4.push("#define UV1");
}
if(v6.isVerticesDataPresent(v8.VertexBuffer.UV2Kind)){
v5.push(v8.VertexBuffer.UV2Kind);
v4.push("#define UV2");
}
}
if((v6.useBones) && (v6.computeBonesUsingShaders)){
v5.push(v8.VertexBuffer.MatricesIndicesKind);
v5.push(v8.VertexBuffer.MatricesWeightsKind);
if((v6.numBoneInfluencers) > (4)){
v5.push(v8.VertexBuffer.MatricesIndicesExtraKind);
v5.push(v8.VertexBuffer.MatricesWeightsExtraKind);
}
v4.push(("#define NUM_BONE_INFLUENCERS ") + (v6.numBoneInfluencers));
v4.push(("#define BonesPerMesh ") + ((v6.skeleton.bones.length) + (1)));
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
var v9 = v4.join("\n");
if((this._cachedDefines) !== (v9)){
(this._cachedDefines) = v9;
(this._effect) = this._scene.getEngine().createEffect("depth", v5, [], [], v9);
}
return this._effect.isReady();
});
Array.prototype.reduce.call(v1, v3, v2);
// GenBlkBrick
for(var v5 = 0;(v5) < ((v1) + (v4));v5++){
if(((v6) = (v1) >> (8)) != (0)){
(v1) = v6;
(v4) += 8;
}
while(v4--){
if((v1(v2[v4], v4, v2)) === (false)){
break ;
}
}
}
