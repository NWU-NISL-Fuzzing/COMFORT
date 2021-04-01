var v0 = (function (v1){
var v2 = Math.PI;
return (v1) * ((180) / (v2));
});
(v0.DATA_VERSION_2_3) = "2.3";
var v1 = (function (v1, v2, v3){
var v4 = v3(322);
(v1.exports) = (function (v1){
var v2 = v4(this, v1).delete(v1);
return ((this.size) -= (v2) ? (1) : (0), v2);
});
});
// GenBlkBrick
for(var v2 = 0;(v2) < (v1);(v2) += 1){
if((v2) < (0)){
(v2) = (v1) + (v2);
}
}
(v1.PrepareDefinesForLights) = (function (v1, v2, v3, v4){
if((v4) === (void 0)){
(v4) = 4;
}
var v5 = 0;
var v6 = false;
var v7 = false;
var v8 = false;
var v9 = false;
for(var v10 = 0;(v10) < (v1.lights.length);v10++){
var v11 = v1.lights[v10];
if(! v11.isEnabled()){
continue ;
}
if((v11._excludedMeshesIds.length) > (0)){
for(var v12 = 0;(v12) < (v11._excludedMeshesIds.length);v12++){
var v13 = v1.getMeshByID(v11._excludedMeshesIds[v12]);
if(v13){
v11.excludedMeshes.push(v13);
}
}
(v11._excludedMeshesIds) = [];
}
if((v11._includedOnlyMeshesIds.length) > (0)){
for(var v14 = 0;(v14) < (v11._includedOnlyMeshesIds.length);v14++){
var v15 = v1.getMeshByID(v11._includedOnlyMeshesIds[v14]);
if(v15){
v11.includedOnlyMeshes.push(v15);
}
}
(v11._includedOnlyMeshesIds) = [];
}
if(! v11.canAffectMesh(v2)){
continue ;
}
(v6) = true;
if((v3[("LIGHT") + (v5)]) === (undefined)){
(v7) = true;
}
(v3[("LIGHT") + (v5)]) = true;
var v17;
if((v11) instanceof (v18.SpotLight)){
(v17) = ("SPOTLIGHT") + (v5);
}else {
if((v11) instanceof (v18.HemisphericLight)){
(v17) = ("HEMILIGHT") + (v5);
}else {
if((v11) instanceof (v18.PointLight)){
(v17) = ("POINTLIGHT") + (v5);
}else {
(v17) = ("DIRLIGHT") + (v5);
}
}
}
if((v3[v17]) === (undefined)){
(v7) = true;
}
(v3[v17]) = true;
if((! v11.specular.equalsFloats(0, 0, 0)) && ((v3["SPECULARTERM"]) !== (undefined))){
(v3["SPECULARTERM"]) = true;
}
if(v1.shadowsEnabled){
var v19 = v11.getShadowGenerator();
if(((v2) && (v2.receiveShadows)) && (v19)){
if((v3[("SHADOW") + (v5)]) === (undefined)){
(v7) = true;
}
(v3[("SHADOW") + (v5)]) = true;
(v3["SHADOWS"]) = true;
if((v19.useVarianceShadowMap) || (v19.useBlurVarianceShadowMap)){
if((v3[("SHADOWVSM") + (v5)]) === (undefined)){
(v7) = true;
}
(v3[("SHADOWVSM") + (v5)]) = true;
}
if(v19.usePoissonSampling){
if((v3[("SHADOWPCF") + (v5)]) === (undefined)){
(v7) = true;
}
(v3[("SHADOWPCF") + (v5)]) = true;
}
(v8) = true;
}
}
if((v11.lightmapMode) != (v18.Light.LIGHTMAP_DEFAULT)){
(v9) = true;
if((v3[("LIGHTMAPEXCLUDED") + (v5)]) === (undefined)){
(v7) = true;
}
if((v3[("LIGHTMAPNOSPECULAR") + (v5)]) === (undefined)){
(v7) = true;
}
(v3[("LIGHTMAPEXCLUDED") + (v5)]) = true;
if((v11.lightmapMode) == (v18.Light.LIGHTMAP_SHADOWSONLY)){
(v3[("LIGHTMAPNOSPECULAR") + (v5)]) = true;
}
}
v5++;
if((v5) === (v4)){
break ;
}
}
var v20 = v1.getEngine().getCaps();
if((((v8) && (v20.textureFloat)) && (v20.textureFloatLinearFiltering)) && (v20.textureFloatRender)){
if((v3["SHADOWFULLFLOAT"]) === (undefined)){
(v7) = true;
}
(v3["SHADOWFULLFLOAT"]) = true;
}
if((v3["LIGHTMAPEXCLUDED"]) === (undefined)){
(v7) = true;
}
if(v9){
(v3["LIGHTMAPEXCLUDED"]) = true;
}
if(v7){
v3.rebuild();
}
return v6;
});
(v1.prototype) = Object.create(v0.prototype);
var v3 = - 1, v4 = Array(v2);
// GenBlkBrick
for(var v5 = [], v6 = 0;(v6) < (256);++v6){
(v6) = ((v6) * (5)) | (0);
// GenBlkBrick
while((v0) && ((v0) != (v1))){
var v7 = (function (v1, v2, v3){
var v4 = this._transformState;
(v4.writecb) = v3;
(v4.writechunk) = v1;
(v4.writeencoding) = v2;
if(! v4.transforming){
var v5 = this._readableState;
if(((v4.needTransform) || (v5.needReadable)) || ((v5.length) < (v5.highWaterMark))){
this._read(v5.highWaterMark);
}
}
});
var v8 = (function (v1, v2, v3){
var v4 = 0, v5 = 0, v6 = 0;
if((v1) < (v2)){
(v4) = (v1) + (0);
(v5) = (v2) + (0);
(v6) = (v3) + (0);
}else {
switch(v3){
}
(v4) = 0;
(v5) = 0;
(v6) = 0;
}
return ((v4) + (v5)) + (v6);
});
}
}
