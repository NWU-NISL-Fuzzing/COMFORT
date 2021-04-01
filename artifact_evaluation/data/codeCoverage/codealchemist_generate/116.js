var v0 = (function (){
if((((this.x) !== (0)) || ((this.y) !== (0))) || ((this.z) !== (0))){
return true;
}else {
return false;
}
});
Object.defineProperty(v0.prototype, "cubeTexture", ({get : (function (){
return this._renderTargetTexture;
}), enumerable : true, configurable : true}));
var v1 = (function (v1, v2, v3){
var v4 = v3(110), v5 = v3(265), v6 = v3(63), v7 = v3(47), v8 = v3(496);
(v1.exports) = (function (v1, v2){
var v3 = (1) == (v1), v9 = (2) == (v1), v10 = (3) == (v1), v11 = (4) == (v1), v12 = (6) == (v1), v13 = ((5) == (v1)) || (v12), v14 = (v2) || (v8);
return (function (v2, v8, v15){
for(var v16, v17, v18 = v6(v2), v19 = v5(v18), v20 = v4(v8, v15, 3), v21 = v7(v19.length), v22 = 0, v23 = (v3) ? (v14(v2, v21)) : ((v9) ? (v14(v2, 0)) : (void 0));(v21) > (v22);v22++){
if(((v13) || ((v22) in (v19))) && (((v17) = v20((v16) = v19[v22], v22, v18), v1))){
if(v3){
(v23[v22]) = v17;
}else {
if(v17){
switch(v1){
}
}else {
if(v11){
return ! 1;
}
}
}
}
}
return (v12) ? (- 1) : (((v10) || (v11)) ? (v11) : (v23));
});
});
});
function v2(v1, v2, v3, v4, v5){
return v0(v1(v1, v2, v3, v4), v5);
}
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v0(v1)) ? (v1(v3)[1]) : (v1(v3)[0]));
}else {
if(v4){
return (v5) + (v1(v3)[1]);
}else {
return (v5) + ((v0(v1)) ? (v1(v3)[1]) : (v1(v3)[2]));
}
}
}
}
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v1(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
(v3.prototype.set) = (function (v1, v2){
if((this._data[v1]) === (undefined)){
return false;
}
(this._data[v1]) = v2;
return true;
});
(v3.prototype.removeNode) = (function (v1){
this.shiftDown(v1);
var v2 = v1.parent;
if((v2.left) === (v1)){
(v2.left) = v3;
}else {
if((v2.right) === (v1)){
(v2.right) = v3;
}
}
this.removeLeafNode(v1);
(this._root) = v4(v2);
return v1;
});
