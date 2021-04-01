// GenBlkBrick
for(var v0 = v1;(v0) <= (v2);v0++){
// GenBlkBrick
for(;((v0) + (v1)) < (v2);(v0) += v1){
var v0 = (function (){
var v1 = ({});
(v1.count) = (function (){
return this.addFutureAction((("repeater '") + (this.label)) + ("' count"), (function (v2, v3, v4){
try{
v4(null, v3.elements().length);
}catch(v5){
v4(null, 0);
}
}));
});
(v1.column) = (function (v6){
return this.addFutureAction((((("repeater '") + (this.label)) + ("' column '")) + (v6)) + ("'"), (function (v2, v3, v4){
v4(null, v3.elements().bindings(v2.angular.element, v6));
}));
});
(v1.row) = (function (v7){
return this.addFutureAction((((("repeater '") + (this.label)) + ("' row '")) + (v7)) + ("'"), (function (v2, v3, v4){
var v8 = v3.elements().slice(v7, (v7) + (1));
if(! v8.length){
return v4((('row ') + (v7)) + (' out of bounds'));
}
v4(null, v8.bindings(v2.angular.element));
}));
});
return (function (v9, v10){
this.dsl.using(v9, v10);
return v1;
});
});
(v0.prototype.updateEffect) = (function (v1){
(this._effect) = this._engine.createEffect(({vertex : "postprocess", fragment : this._fragmentUrl}), [], this._parameters, this._samplers, ((v1) !== (undefined)) ? (v1) : (""));
});
}
}
(v0.prototype.dispose) = (function (){
var v1 = this._vertexBuffers[v2.VertexBuffer.PositionKind];
if(v1){
v1.dispose();
(this._vertexBuffers[v2.VertexBuffer.PositionKind]) = null;
}
if(this._indexBuffer){
this._scene.getEngine()._releaseBuffer(this._indexBuffer);
(this._indexBuffer) = null;
}
});
var v1 = [].filter(v0, 101);
(v1.prop) = "overrideData";
// GenBlkBrick
for((v2) = 0;(v2) < (3);v2++){
var v3 = - v2;
}
v1.reduce(v0, v2);
var v4 = typeof v1[v2];
{
if((v2) >= (Math.pow(16, v3))){
var v3 = Math.floor((v2) / (Math.pow(16, v3)));
(v2) -= (v3) * (Math.pow(16, v3));
if((v3) >= (10)){
if((v3) == (10)){
(v4) += "A";
}
if((v3) == (11)){
(v4) += "B";
}
if((v3) == (12)){
(v4) += "C";
}
if((v3) == (13)){
(v4) += "D";
}
if((v3) == (14)){
(v4) += "E";
}
if((v3) == (15)){
(v4) += "F";
}
}else {
(v4) += String(v3);
}
}else {
(v4) += "0";
}
}
