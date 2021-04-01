var v0 = (function (v1){
return this.memoryHighReader[v1](this, v1);
});
var v1 = (function (v1){
v1.put("../test/fixtures/issue_26.tpl.html", ((("<div>\n") + ("    <div ng-class='\"bsp-alert-\" + (type || \"warning\")'></div>\n")) + ("</div>\n")) + (""));
});
function v2(v1, v2, v3, v4, v5){
v1(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v0));
}
var v3 = (function (v1){
(this.withCredentials_) = v1;
});
(v0.prototype._attachCameras) = (function (v1, v2){
var v3 = v4.Tools.MakeArray((v1) || (this._cameras));
var v5 = [];
var v6;
for((v6) = 0;(v6) < (v3.length);v6++){
var v7 = v3[v6];
var v8 = v7.name;
if((this._cameras.indexOf(v7)) === (- 1)){
(this._cameras[v8]) = v7;
}else {
if(v2){
v5.push(v6);
}
}
}
for((v6) = 0;(v6) < (v5.length);v6++){
v1.splice(v5[v6], 1);
}
for(var v9 in this._renderEffects){
this._renderEffects[v9]._attachCameras(v3);
}
});
function v4(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v2(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v1(v1.left, v1.left.right);
(v1) = v2(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v1(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v2(v1.right, v1.right.left);
(v1) = v1(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v4(v1.left, false);
v4(v1.right, true);
(v1) = v4(v1, true);
(v1) = v4(v1, false);
return v1;
}
var v5 = (function (v1){
if((v1.stack) instanceof (Array)){
}
});
Object.defineProperty(Object.prototype, "constructor", ({get : v2, set : v5, configurable : true}));
