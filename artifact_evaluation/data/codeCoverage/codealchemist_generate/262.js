var v0 = (function (v1, v2, v3){
var v4 = this.document.createElementNS(v1, v2);
if(v3){
for(var v5 = 0;(v5) < (v3.length);v5++){
v4.setAttributeNS((v3[v5].namespaceURI) || (null), v3[v5].nodeName, v3[v5].nodeValue);
}
}
return v4;
});
(v0.DATA_VERSION_2_3) = "2.3";
var v1 = (function (v1){
return new Array(v1);
});
var v2 = (function (v1){
v1(v2, v1);
function v2(){
v1.apply(this, arguments);
}
return v2;
})(Error);
var v3 = (function (v1){
var v2 = (function (){
function v2(v3, v4, v5, v6, v7, v8, v9, v10, v11){
if(! v8){
switch(v5){
}
}
if((v4) instanceof (v1.Buffer)){
if(! v8){
(v8) = v4.getStrideSize();
}
(this._buffer) = v4;
(this._ownsBuffer) = false;
}else {
(this._buffer) = new v1.Buffer(v3, v4, v6, v8, v7, v9);
(this._ownsBuffer) = true;
}
(this._stride) = v8;
(this._offset) = (v10) ? (v10) : (0);
(this._size) = (v11) ? (v11) : (v8);
(this._kind) = v5;
}
(v2.prototype.getKind) = (function (){
return this._kind;
});
(v2.prototype.isUpdatable) = (function (){
return this._buffer.isUpdatable();
});
(v2.prototype.getData) = (function (){
return this._buffer.getData();
});
(v2.prototype.getBuffer) = (function (){
return this._buffer.getBuffer();
});
(v2.prototype.getStrideSize) = (function (){
return this._stride;
});
(v2.prototype.getOffset) = (function (){
return this._offset;
});
(v2.prototype.getSize) = (function (){
return this._size;
});
(v2.prototype.getIsInstanced) = (function (){
return this._buffer.getIsInstanced();
});
(v2.prototype.create) = (function (v4){
return this._buffer.create(v4);
});
(v2.prototype.update) = (function (v4){
return this._buffer.update(v4);
});
(v2.prototype.updateDirectly) = (function (v4, v10){
return this._buffer.updateDirectly(v4, v10);
});
(v2.prototype.dispose) = (function (){
if(this._ownsBuffer){
this._buffer.dispose();
}
});
Object.defineProperty(v2, "PositionKind", ({get : (function (){
return v2._PositionKind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "NormalKind", ({get : (function (){
return v2._NormalKind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "UVKind", ({get : (function (){
return v2._UVKind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "UV2Kind", ({get : (function (){
return v2._UV2Kind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "UV3Kind", ({get : (function (){
return v2._UV3Kind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "UV4Kind", ({get : (function (){
return v2._UV4Kind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "UV5Kind", ({get : (function (){
return v2._UV5Kind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "UV6Kind", ({get : (function (){
return v2._UV6Kind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "ColorKind", ({get : (function (){
return v2._ColorKind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "MatricesIndicesKind", ({get : (function (){
return v2._MatricesIndicesKind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "MatricesWeightsKind", ({get : (function (){
return v2._MatricesWeightsKind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "MatricesIndicesExtraKind", ({get : (function (){
return v2._MatricesIndicesExtraKind;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "MatricesWeightsExtraKind", ({get : (function (){
return v2._MatricesWeightsExtraKind;
}), enumerable : true, configurable : true}));
(v2._PositionKind) = "position";
(v2._NormalKind) = "normal";
(v2._UVKind) = "uv";
(v2._UV2Kind) = "uv2";
(v2._UV3Kind) = "uv3";
(v2._UV4Kind) = "uv4";
(v2._UV5Kind) = "uv5";
(v2._UV6Kind) = "uv6";
(v2._ColorKind) = "color";
(v2._MatricesIndicesKind) = "matricesIndices";
(v2._MatricesWeightsKind) = "matricesWeights";
(v2._MatricesIndicesExtraKind) = "matricesIndicesExtra";
(v2._MatricesWeightsExtraKind) = "matricesWeightsExtra";
return v2;
})();
(v1.VertexBuffer) = v2;
});
var v4 = (function (v1, v2, v3){
var v4 = [];
var v5 = v1.slice(v2, (v2) + (1));
var v6 = 2;
while((v5) != (v3)){
if(((v6) + (v2)) > (v1.length)){
v1('Error', 'Invalid');
}
v4.push(v5);
(v5) = v1.slice((v2) + ((v6) - (1)), (v2) + (v6));
(v6) += 1;
}
return [];
});
(v1.prototype) = new v4();
var v5 = (function (){
this._uiSetRadioLabels(this.get('radioLabels'));
});
