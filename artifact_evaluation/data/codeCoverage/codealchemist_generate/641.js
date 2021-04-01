var v0 = (function (){
return this.m_groundBody;
});
(v0.prototype.serialize) = (function (){
var v1 = ({});
(v1.lightId) = this._light.id;
(v1.mapSize) = this.getShadowMap().getRenderSize();
(v1.useVarianceShadowMap) = this.useVarianceShadowMap;
(v1.usePoissonSampling) = this.usePoissonSampling;
(v1.forceBackFacesOnly) = this.forceBackFacesOnly;
(v1.renderList) = [];
for(var v2 = 0;(v2) < (this.getShadowMap().renderList.length);v2++){
var v3 = this.getShadowMap().renderList[v2];
v1.renderList.push(v3.id);
}
return v1;
});
var v1 = (function (v1){
return this.request('files/copy_reference/get', v1, 'user', 'api', 'rpc');
});
// GenBlkBrick
for(var v2 = 0;(v2) < (v1);v2++){
Object.defineProperty(v1, "PositionKind", ({get : (function (){
return v1._PositionKind;
}), enumerable : true, configurable : true}));
var v3 = [].filter(v1);
}
if((v0) && (! v0.skills_has("cheffery_2"))){
v3.push([]);
}
// GenBlkBrick
for(var v4 = 0;(v4) < (50);++v4){
if((v4) === (6)){
break ;
}
var v5 = (function (v1){
var v2 = [];
if(((typeof v1) == ("object")) && ((v1) !== (null))){
for(var v3 in v1){
if(! v1.hasOwnProperty(v3)){
continue ;
}
var v4 = v1[v3];
if((((v3) == ("key")) || ((v3) == ("startkey"))) || ((v3) == ("endkey"))){
(v4) = JSON.stringify(v4);
}
v2.push(((encodeURIComponent(v3)) + ("=")) + (encodeURIComponent(v4)));
}
}
if(! v2.length){
return "";
}
return ("?") + (v2.join("&"));
});
}
// GenBlkBrick
for(var v0 in v5.prototype){
var v6 = (function (v1){
(v1.registerC) = (v1.registersHL) >> (8);
});
(v6.prototype.createVertexBuffer) = (function (v1, v2, v3, v4){
return new v5.VertexBuffer(this._engine, this, v1, this._updatable, true, (v4) ? (v4) : (this._strideSize), this._instanced, v2, v3);
});
}
Object.defineProperty(v3, "prop", ({get : v1, set : v0, enumerable : true, configurable : false}));
