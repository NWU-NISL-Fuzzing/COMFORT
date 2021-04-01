var v0 = (function (v1, v2, v3){
var v4 = v3(297);
(v1.exports) = (function (v1){
return v4(this, v1).delete(v1);
});
});
(v0._FILTER_NONE) = 0;
(v0.prototype.updateSize) = (function (v1, v2, v3){
if((v3) === (void 0)){
(v3) = 1;
}
(this.width) = v1;
(this.height) = v2;
(this.depth) = v3;
(this.baseWidth) = v1;
(this.baseHeight) = v2;
(this.baseDepth) = v3;
(this._size) = ((v1) * (v2)) * (v3);
});
var v1 = (function (){
var v1 = this.program;
if(this.modelMatrixDirty){
this.renderer.setMatrix4(v1, 'uModelMatrix', false, this.modelMatrix);
(this.modelMatrixDirty) = false;
}
if(this.viewMatrixDirty){
this.renderer.setMatrix4(v1, 'uViewMatrix', false, this.viewMatrix);
(this.viewMatrixDirty) = false;
}
if(this.projectionMatrixDirty){
this.renderer.setMatrix4(v1, 'uProjectionMatrix', false, this.projectionMatrix);
(this.projectionMatrixDirty) = false;
}
return this;
});
Array.prototype.forEach.call(v1, v0);
function v2(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v0(v3)) + (v1(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
var v3 = (function (v1, v2, v3, v4){
var v5, v6;
for(((v5) = 0, (v6) = v3.length);(v5) < (v6);++v5){
(v2) = this.moveToLineTo_(v1, v2, v3[v5], v4, true);
}
return v2;
});
function v4(v1, v2){
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v3(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
