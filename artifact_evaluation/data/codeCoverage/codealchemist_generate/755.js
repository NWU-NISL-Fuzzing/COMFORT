// GenBlkBrick
for(v0 in []){
var v0 = (function (){
(this.a) = 0;
(this.b) = 1;
(this.c) = 2;
(this.d) = 3;
});
(v0.prototype.toString) = (function (){
return ((((((((((("[object dragonBones.Matrix] a:") + (this.a)) + (" b:")) + (this.b)) + (" c:")) + (this.c)) + (" d:")) + (this.d)) + (" tx:")) + (this.tx)) + (" ty:")) + (this.ty);
});
}
(v0.prototype.update) = (function (){
for(var v1 in this._renderPipelines){
var v2 = this._renderPipelines[v1];
if(! v2.isSupported){
v2.dispose();
delete this._renderPipelines[v1];
}else {
v2._update();
}
}
});
var v1 = (function (){
return this.currentUserCan(this.get('deletePermission'));
});
var v2 = (function v2(v1){
if((! v1) || ((v0.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v1.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v1.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v1.call(v1, v6));
});
// GenBlkBrick
for(var v0 in v0.prototype){
// GenBlkBrick
for(var v0 in null){
var v3 = (function (v1){
(this.userData) = v1;
});
(v3.prototype.bind) = (function (v1, v2, v3){
v1.call(this, v2, v3);
var v4 = [];
this.$selection.on(v4.join(' '), (function (v5){
v5.stopPropagation();
}));
});
}
Object.defineProperty(Object.prototype, "constructor", ({get : v3, set : v0, configurable : true}));
}
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v2(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
var v5 = ({thereYet : v4, cap : v2});
function v6(v1, v2){
var v3 = '', v4, v5;
(v2) = (v2) || (({}));
(v2["up"]) = (v2["up"]) || (true);
(v2["mid"]) = (v2["mid"]) || (true);
(v2["down"]) = (v2["down"]) || (true);
(v2["size"]) = (v2["size"]) || ("maxi");
(v1) = v1.split('');
for(v5 in v1){
if(v2(v5)){
continue ;
}
(v3) = (v3) + (v1[v5]);
(v4) = ({"up" : 0, "down" : 0, "mid" : 0});
switch(v2.size){
}
var v7 = [];
for(var v8 in v7){
var v9 = v7[v8];
for(var v10 = 0;(v10) <= (v4[v9]);v10++){
if(v2[v9]){
(v3) = (v3) + (v5[v9][v0(v5[v9].length)]);
}
}
}
}
return v3;
}
