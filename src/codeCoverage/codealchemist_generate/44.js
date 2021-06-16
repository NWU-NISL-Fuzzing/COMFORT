var v0 = (function (){
(this.flipX) = false;
(this.flipY) = false;
return this;
});
var v1 = (function (v1){
(this.fov) = v1;
if(this.inPerspectiveMode){
this.toPerspective();
}else {
this.toOrthographic();
}
});
var v2 = (function (v1, v2){
if(((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_LOADED)) || ((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_NONE))){
if(v1.material){
if((v1.material) instanceof (v3.StandardMaterial)){
(v2.materials) = (v2.materials) || ([]);
if(! v2.materials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.materials.push(v1.material.serialize());
}
}else {
if((v1.material) instanceof (v3.MultiMaterial)){
(v2.multiMaterials) = (v2.multiMaterials) || ([]);
if(! v2.multiMaterials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.multiMaterials.push(v1.material.serialize());
}
}
}
}
var v5 = v1._geometry;
if(v5){
if(! v2.geometries){
(v2.geometries) = ({});
(v2.geometries.boxes) = [];
(v2.geometries.spheres) = [];
(v2.geometries.cylinders) = [];
(v2.geometries.toruses) = [];
(v2.geometries.grounds) = [];
(v2.geometries.planes) = [];
(v2.geometries.torusKnots) = [];
(v2.geometries.vertexData) = [];
}
v0(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v1(v1, v2));
}
});
var v3 = (function (v1, v2, v3){
(function (v1){
var v4 = v3(103), v5 = v3(1423), v6 = ((v2) && (! v2.nodeType)) && (v2), v7 = ((((v6) && (("object") == (typeof v1))) && (v1)) && (! v1.nodeType)) && (v1), v8 = ((v7) && ((v7.exports) === (v6))) ? (v4.Buffer) : (void 0), v9 = ((v8) ? (v8.isBuffer) : (void 0)) || (v5);
(v1.exports) = v9;
}).call(this, v3(102)(v1));
});
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v0(v1);
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
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v2(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v3(v1, v1.right);
}else {
break ;
}
}
}
}
});
// GenBlkBrick
while((v0) < (v1)){
var v5 = (function (v1, v2, v3){
"use strict";
return v1.extend("sap.ui.demo.bulletinboard.controller.Post", ({formatter : v3, onInit : (function (){
var v4 = new v2(({busy : false}));
this.getRouter().getRoute("post").attachPatternMatched(this._onPostMatched, this);
this.setModel(v4, "postView");
}), onNavBack : (function (){
this.myNavBack("worklist");
}), _onPostMatched : (function (v5){
var v4 = this.getModel("postView"), v6 = this.getModel();
this.getView().bindElement(({path : (("/Posts('") + (v5.getParameter("arguments").postId)) + ("')"), events : ({dataRequested : (function (){
v6.metadataLoaded().then((function (){
v4.setProperty("/busy", true);
}));
}), dataReceived : (function (){
v4.setProperty("/busy", false);
})})}));
})}));
});
(v5.constructor) = v5;
}
function v6(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v0(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v1(v1.left, v1.left.right);
(v1) = v0(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v1(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v0(v1.right, v1.right.left);
(v1) = v1(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v6(v1.left, false);
v6(v1.right, true);
(v1) = v6(v1, true);
(v1) = v6(v1, false);
return v1;
}
