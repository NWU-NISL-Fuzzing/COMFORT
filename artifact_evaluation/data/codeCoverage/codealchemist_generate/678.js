var v0 = (function (v1, v2, v3){
var v4 = v3(244), v5 = v3(194);
(v1.exports) = (function (v1, v2){
for(var v3 = 0, v6 = (v2) = v4(v2, v1).length;((null) != (v1)) && ((v3) < (v6));){
(v1) = v1[v5(v2[v3++])];
}
return ((v3) && ((v3) == (v6))) ? (v1) : (void 0);
});
});
(v0.prototype.dispose) = (function (){
for(var v1 in this._renderPipelines){
if(this._renderPipelines.hasOwnProperty(v1)){
var v2 = this._renderPipelines[v1];
v2.dispose();
}
}
});
// GenBlkBrick
while((v0) >= (2)){
var v1 = (function (v1){
return this.a.vb(v1);
});
}
if(v0){
v0.con.set('minWidth', v1);
}
// GenBlkBrick
for(var v2 = 0;(v2) < (0x8000);v2++){
// GenBlkBrick
for(var v3 = 0;(v3) < (41);v3++){
// GenBlkBrick
for(var v4 = 0;(v4) < (256);v4++){
var v5 = (function (v1, v2){
var v3 = v2.picoModal("Curse your sudden but inevitable betrayal!");
var v4 = "new";
function v5(v6, v7, v8){
return (function (v9){
v2.assert.equal(v4, v6);
v2.assert.equal(v9, v3);
v2.assert.equal(v3.isVisible(), v8);
(v4) = v7;
});
}
v3.beforeShow(v5("new", "beforeShow", false)).afterCreate(v5("beforeShow", "afterCreate", false)).afterShow(v5("afterCreate", "afterShow", true)).beforeClose(v5("open", "beforeClose", true)).afterClose(v5("beforeClose", "afterClose", false));
v3.show();
v2.assert.equal(v4, "afterShow");
(v4) = "open";
v3.close();
v2.assert.equal(v4, "afterClose");
v1();
});
var v6 = (function (){
'use strict';
var v1 = (function (){
(this.globalId) = 0;
(this.revision) = 0;
});
Object.assign(v1.prototype, ({equals : (function (v3){
return ((this.globalId) === (v3.globalId)) && ((this.revision) === (v3.revision));
}), notequals : (function (v3){
return ((this.globalId) !== (v3.globalId)) || ((this.revision) !== (v3.revision));
}), copy : (function (v3){
(this.globalId) = v3.globalId;
(this.revision) = v3.revision;
}), reset : (function (){
(this.globalId) = 0;
(this.revision) = 0;
})}));
return ({Version : v1});
});
}
// GenBlkBrick
for((v7) = 0;(v7) < (9);v7++){
{
var v8 = 0;
for(var v9 = 0;((v9) + (v4)) < (v3);v9++){
if((v4[(v9) + (v4)].area) > (v4[v9].area)){
var v5 = v4[(v9) + (v4)];
(v4[(v9) + (v4)]) = v4[v9];
(v4[v9]) = v5;
v8++;
}
}
if((v4) == (1)){
if((v8) == (0)){
break ;
}
}else {
(v4) = Math.floor(((v4) * (10)) / (13));
}
}
while((++v8) < (v1)){
(v2[v8]) = v7;
(v4[v8]) = (Math.sin(v7)) + ((((2) * (Math.random())) - (1)) * (v6));
(v7) += (v9) * ((1) + ((((2) * (Math.random())) - (1)) * (v8)));
}
}
}
}
(v10) = v0(v9, v8, v2);
// GenBlkBrick
for(var v11 = 0;(v11) > (- 1);--v11){
(v0.FORMAT) = "format";
}
var v12 = (2.0) / ((v3) + (v4));
