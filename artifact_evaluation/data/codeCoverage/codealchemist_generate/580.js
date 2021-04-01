var v0 = (function (){
this.fields.each((function (v1){
if((typeof v1._f) === ('undefined')){
return;
}
v1._f.disable();
}));
this._table._submit.hide();
return this;
});
(v0.SLOT) = "slot";
var v1 = (function (){
var v1 = (function (){
(this.callbacks) = [];
(this.errbacks) = [];
});
(v1.prototype.then) = (function (v2, v3){
if(('value') in (this)){
v2(this.value);
}else {
if(('error') in (this)){
v3(this.error);
}else {
this.callbacks.push(v2);
this.errbacks.push(v3);
}
}
});
(v1.prototype.resolve) = (function (v4){
(this.value) = v4;
delete this.errbacks;
var v5 = this.callbacks;
delete this.callbacks;
for(var v6 = 0;(v6) < (v5.length);v6++){
v5[v6](this.value);
}
});
(v1.prototype.reject) = (function (v7){
(this.error) = v7;
delete this.callbacks;
var v5 = this.errbacks;
delete this.errbacks;
for(var v6 = 0;(v6) < (v5.length);v6++){
v5[v6](v7);
}
});
return v1;
});
var v2 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v1, save : v1, init : v0, shutdown : v0, getAuthUrl : v1, revokeToken : v1});
// GenBlkBrick
for(var v0 in v1){
var v3 = (function (v1, v2, v3){
(v1.exports) = ({default : v3(1892), __esModule : ! 0});
});
// GenBlkBrick
for(var v0 in v3.prototype){
var v4 = (function (v1, v2, v3){
var v4 = v3(1);
v4(v4.P, "Function", ({bind : v3(103)}));
});
}
}
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
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
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : true}));
Object.defineProperty(v2, "property", ({get : v3, set : v4, enumerable : true, configurable : true}));
