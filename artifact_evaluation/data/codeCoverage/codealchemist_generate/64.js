var v0 = (function (v1, v2, v3){
var v4 = v3(35), v5 = Math.max, v7 = Math.min;
(v1.exports) = (function (v1, v2){
return (((v1) = v4(v1)) < (0)) ? (v5((v1) + (v2), 0)) : (v7(v1, v2));
});
});
// GenBlkBrick
while((new Date()) < ((v1) * (1000))){
var v1 = (function (v1){
var v2 = ((v1.registerD) & (0x01)) == (0x01);
(v1.registerD) = ((v1.FCarry) ? (0x80) : (0)) | ((v1.registerD) >> (1));
(v1.FCarry) = v2;
(v1.FHalfCarry) = (v1.FSubtract) = false;
(v1.FZero) = (v1.registerD) == (0);
});
var v2 = (function (v1, v2){
return (v1[v2]) + (2);
});
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v3 = (function (v1, v2, v3){
var v4 = v2.pos.getc(true), v5 = this.viz.canvas, v6 = v5.translateOffsetX, v7 = v5.translateOffsetY, v8 = v5.scaleOffsetX, v9 = v5.scaleOffsetY, v10 = v5.getSize();
var v11 = ({x : Math.round((((v4.x) * (v8)) + (v6)) + ((v10.width) / (2))), y : Math.round((((v4.y) * (v9)) + (v7)) + ((v10.height) / (2)))});
v1.setAttribute('x', v11.x);
v1.setAttribute('y', v11.y);
v3.onPlaceLabel(v1, v2);
});
(v1.prototype) = new v3();
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v4 = (function (v1, v2, v3){
var v4 = v3(432), v5 = v3(294);
(v1.exports) = (function (v1){
return (v5(v1)) && (v4(v1));
});
});
}
(v2.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v4(v9, v4);
}));
return v4;
});
(v4.UTC) = v0.UTC;
(v4.prototype._buildTree) = (function (v1, v2){
if(this._invalidTree){
(v1) = (v1) || (0);
(v2) = (v2) || (this.getRootContexts().length);
(this._invalidTree) = false;
(this._aRowIndexMap) = [];
v3.prototype._buildTree.call(this, v1, v2);
}
});
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v3(v1);
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
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v4(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
