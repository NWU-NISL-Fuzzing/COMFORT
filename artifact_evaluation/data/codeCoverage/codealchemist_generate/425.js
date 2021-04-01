var v0 = (function (v1){
var v2;
(v2) = v1.toString(16);
if((v2.len) === (2)){
return v2;
}else {
return (v2) + ('0');
}
});
(v0.prototype.intersectionSegment) = (function (v1, v2, v3){
var v4 = this.origin.add(this.direction.multiplyByFloats(v0.rayl, v0.rayl, v0.rayl));
var v5 = v2.subtract(v1);
var v6 = v4.subtract(this.origin);
var v7 = v1.subtract(this.origin);
var v8 = v9.Vector3.Dot(v5, v5);
var v10 = v9.Vector3.Dot(v5, v6);
var v11 = v9.Vector3.Dot(v6, v6);
var v12 = v9.Vector3.Dot(v5, v7);
var v13 = v9.Vector3.Dot(v6, v7);
var v14 = ((v8) * (v11)) - ((v10) * (v10));
var v15, v16, v17 = v14;
var v18, v19, v20 = v14;
if((v14) < (v0.smallnum)){
(v16) = 0.0;
(v17) = 1.0;
(v19) = v13;
(v20) = v11;
}else {
(v16) = ((v10) * (v13)) - ((v11) * (v12));
(v19) = ((v8) * (v13)) - ((v10) * (v12));
if((v16) < (0.0)){
(v16) = 0.0;
(v19) = v13;
(v20) = v11;
}else {
if((v16) > (v17)){
(v16) = v17;
(v19) = (v13) + (v10);
(v20) = v11;
}
}
}
if((v19) < (0.0)){
(v19) = 0.0;
if((- v12) < (0.0)){
(v16) = 0.0;
}else {
if((- v12) > (v8)){
(v16) = v17;
}else {
(v16) = - v12;
(v17) = v8;
}
}
}else {
if((v19) > (v20)){
(v19) = v20;
if(((- v12) + (v10)) < (0.0)){
(v16) = 0;
}else {
if(((- v12) + (v10)) > (v8)){
(v16) = v17;
}else {
(v16) = (- v12) + (v10);
(v17) = v8;
}
}
}
}
(v15) = ((Math.abs(v16)) < (v0.smallnum)) ? (0.0) : ((v16) / (v17));
(v18) = ((Math.abs(v19)) < (v0.smallnum)) ? (0.0) : ((v19) / (v20));
var v22 = v6.multiplyByFloats(v18, v18, v18);
var v23 = v7.add(v5.multiplyByFloats(v15, v15, v15)).subtract(v22);
var v24 = (((v18) > (0)) && ((v18) <= (this.length))) && ((v23.lengthSquared()) < ((v3) * (v3)));
if(v24){
return v22.length();
}
return - 1;
});
// GenBlkBrick
while((v0) > (0)){
var v1 = (function (){
var v1 = this.getSelectedElement();
if(v1){
this.reloadChildren(v1);
}
});
}
function v2(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v1(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v0(v1.left, v1.left.right);
(v1) = v1(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v0(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v1(v1.right, v1.right.left);
(v1) = v0(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v2(v1.left, false);
v2(v1.right, true);
(v1) = v2(v1, true);
(v1) = v2(v1, false);
return v1;
}
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v0(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v0(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v3(v5);
return v5;
});
v3(v1, v2);
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
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
