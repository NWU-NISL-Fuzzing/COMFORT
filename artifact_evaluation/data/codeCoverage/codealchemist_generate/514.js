var v0 = (function (v1, v2, v3){
var v4 = v3(738), v5 = v3(467), v6 = "[object AsyncFunction]", v7 = "[object Function]", v8 = "[object GeneratorFunction]", v9 = "[object Proxy]";
(v1.exports) = (function (v1){
if(! v5(v1)){
return ! 1;
}
var v2 = v4(v1);
return ((((v2) == (v7)) || ((v2) == (v8))) || ((v2) == (v6))) || ((v2) == (v9));
});
});
Object.defineProperty(v0, "PositionKind", ({get : (function (){
return v0._PositionKind;
}), enumerable : true, configurable : true}));
(v0.prototype) = ({interpolate : (function (v1, v2, v3){
var v4 = (v1) + (((v2) - (v1)) * (v3));
if((v3) < (this.lensPos)){
(v4) += ((this.leftImpl.interpolate(v1, (v1) + (((v2) - (v1)) * (this.lensPos)), (v3) / (this.lensPos))) - (v4)) * (this.absStrength);
}else {
(v4) += ((this.rightImpl.interpolate((v1) + (((v2) - (v1)) * (this.lensPos)), v2, ((v3) - (this.lensPos)) / ((1) - (this.lensPos)))) - (v4)) * (this.absStrength);
}
return v4;
}), setLensPos : (function (v5, v6){
(this.lensPos) += ((v7.clipNormalized(v5)) - (this.lensPos)) * (v6);
}), setLensStrength : (function (v8, v6){
(this.lensStrength) += ((v7.clip(v8, - 1, 1)) - (this.lensStrength)) * (v6);
(this.absStrength) = v7.abs(this.lensStrength);
this.leftImpl.setFlipped((this.lensStrength) > (0));
this.rightImpl.setFlipped((this.lensStrength) < (0));
})});
// GenBlkBrick
while((v0) < ((v1) - (v2))){
var v1 = (function (v1, v2, v3){
var v4 = v3(195), v5 = v3(190), v6 = "[object AsyncFunction]", v7 = "[object Function]", v8 = "[object GeneratorFunction]", v9 = "[object Proxy]";
(v1.exports) = (function (v1){
if(! v5(v1)){
return ! 1;
}
var v2 = v4(v1);
return ((((v2) == (v7)) || ((v2) == (v8))) || ((v2) == (v6))) || ((v2) == (v9));
});
});
var v2 = (function (v1){
this._setTableElement(v1);
this._wrapTableInScrollContainer(v1);
});
}
// GenBlkBrick
for(var v0 in v0.prototype){
// GenBlkBrick
for(var v3 = 0;(v3) < (12);v3++){
var v4 = (function (v1, v2, v3, v4){
this.a.copy(v1[v2]);
this.b.copy(v1[v3]);
this.c.copy(v1[v4]);
return this;
});
}
}
// GenBlkBrick
for(var v5 = 0x21;(v5) <= (0x7E);v5++){
(v6) = v2(v2, v3, v5);
}
function v7(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v0(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
(v4.suffix) = (function (){
return "THREE_SUFFIX";
});
