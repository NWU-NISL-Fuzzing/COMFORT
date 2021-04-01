var v0 = (function (){
try{
(Number.prototype[1]) = isNaN;
(Number.prototype.length) = 2;
return (1) === (Array.prototype.lastIndexOf.call(5, isNaN));
}finally{
delete Number.prototype[1];
delete Number.prototype.length;
}
});
(v0.prototype.optionName) = '';
(v0.prototype._attachHelperEvents) = (function (){
var v1 = this.$popup.find('.popup-close-btn'), v2 = this.$popup.find('.popup-overlay'), v3 = v4('body');
v5.bindClick(v1, this.namespace, this._triggerPopupHide.bind(this));
v5.bindClick(v2, this.namespace, this._triggerPopupHide.bind(this));
v5.bindClick(v3, this.namespace, this._onBodyClick.bind(this));
});
var v1 = (function (){
var v1 = Array.prototype.concat.apply([], arguments);
return v1.filter((function (v4, v5){
return (v5) == (v1.indexOf(v4));
}));
});
(v0.prototype.selectAll) = (function (){
this._buildTree();
v1.prototype.selectAll.apply(this, arguments);
});
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
(v4) += ((v1(v3)) + (v0(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
var v3 = (function (v1, v2, v3){
var v4 = v3(1156), v5 = v3(1159);
(v1.exports) = (function (v1, v2){
var v3 = v5(v1, v2);
return (v4(v3)) ? (v3) : (void 0);
});
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
