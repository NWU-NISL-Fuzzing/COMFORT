var v0 = (function (v1){
var v2 = this.parseGeometries(v1.geometries), v3 = this.parseMaterials(v1.materials);
return this.parseObject(v1.object, v2, v3);
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = (function (v5){
v2.call(this, v5);
});
(v4.prototype) = Object.create(v2.prototype);
Object.defineProperties(v4.prototype, ({kmlCoordinates : ({get : (function (){
return this._factory.specific(this, ({name : 'coordinates', transformer : v3.string}));
})})}));
(v4.prototype.getTagNames) = (function (){
return [];
});
v1.addKey(v4.prototype.getTagNames()[0], v4);
return v4;
});
// GenBlkBrick
for(var v0 in v0){
(v0.prototype.getBuffer) = (function (){
return this._buffer;
});
var v2 = (function (v1, v2, v3){
var v4 = v3(536), v5 = v3(2130), v6 = v3(2126), v7 = v3(411), v8 = v3(647), v9 = v3(646), v10 = v3(202), v11 = 1, v12 = 2;
(v1.exports) = (function (v1, v2){
return ((v7(v1)) && (v8(v2))) ? (v9(v10(v1), v2)) : ((function (v3){
var v7 = v5(v3, v1);
return (((void 0) === (v7)) && ((v7) === (v2))) ? (v6(v3, v1)) : (v4(v2, v7, (v11) | (v12)));
}));
});
});
}
var v3 = (function (v1){
if(this.nextTableName){
this.tableService.queryTables(({nextTableName : this.nextTableName}), v1);
}else {
v1(new Error('No next page.'));
}
});
(v2.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
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
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
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
Object.defineProperty(v0.prototype, "captureSpritesRenderTime", ({get : (function (){
return this._captureSpritesRenderTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureSpritesRenderTime)){
return;
}
(this._captureSpritesRenderTime) = v2;
if(v2){
(this._onBeforeSpritesRenderingObserver) = this.scene.onBeforeSpritesRenderingObservable.add((function (){
v4.Tools.StartPerformanceCounter("Sprites");
v3._spritesRenderTime.beginMonitoring();
}));
(this._onAfterSpritesRenderingObserver) = this.scene.onAfterSpritesRenderingObservable.add((function (){
v4.Tools.EndPerformanceCounter("Sprites");
v3._spritesRenderTime.endMonitoring(false);
}));
}else {
this.scene.onBeforeSpritesRenderingObservable.remove(this._onBeforeSpritesRenderingObserver);
(this._onBeforeSpritesRenderingObserver) = null;
this.scene.onAfterSpritesRenderingObservable.remove(this._onAfterSpritesRenderingObserver);
(this._onAfterSpritesRenderingObserver) = null;
}
}), enumerable : true, configurable : true}));
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v1(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v2(v1, v1.right);
}else {
break ;
}
}
}
}
});
