var v0 = (function (v1){
var v2 = Array.from(v1);
(v2[0]) = 42;
return v2;
});
var v1 = (function (v1){
var v2 = (v1.registerA) - (v1.memoryReader[v1.programCounter](v1, v1.programCounter));
(v1.programCounter) = ((v1.programCounter) + (1)) & (0xFFFF);
(v1.FHalfCarry) = ((v1.registerA) & (0xF)) < ((v2) & (0xF));
(v1.FCarry) = (v2) < (0);
(v1.registerA) = (v2) & (0xFF);
(v1.FZero) = (v2) == (0);
(v1.FSubtract) = true;
});
(v1.prototype.genCSS) = (function (v1, v2){
v2.add(this.value);
});
(v0.PrepareAttributesForBones) = (function (v1, v2, v3, v4){
if((v3["NUM_BONE_INFLUENCERS"]) > (0)){
v4.addCPUSkinningFallback(0, v2);
v1.push(v5.VertexBuffer.MatricesIndicesKind);
v1.push(v5.VertexBuffer.MatricesWeightsKind);
if((v3["NUM_BONE_INFLUENCERS"]) > (4)){
v1.push(v5.VertexBuffer.MatricesIndicesExtraKind);
v1.push(v5.VertexBuffer.MatricesWeightsExtraKind);
}
}
});
(v1.enumerable) = true;
(v1.DATA_VERSION_5_5) = "5.5";
var v2 = (function (){
return this._radiusEquator;
});
var v3 = (function (){
return ({foo : "bar"});
});
