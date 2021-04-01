var v0 = (function (v1, v2, v3){
(v1.scrollLeft) += v2;
(v1.scrollTop) += v3;
});
var v1 = (function (v1){
(this.testLinkUrlFn_) = v1;
});
// GenBlkBrick
for(var v0 in v0.prototype){
(v0.prototype.changeColor) = (function (v1){
if(v2.isFunction(this.options.onChange)){
this.options.onChange.call(this.element, v1);
}
});
var v2 = (function (v1){
return Math.max((v1["u"]) - (v1["n"]), 0);
});
}
function v3(v1, v2, v3, v4){
if((v3) < (v4)){
var v5 = v2(v3, v4);
var v7 = (v3) - (1);
v1(v1, v5, v4);
var v9 = v1[v4];
for(var v10 = v3;(v10) < (v4);v10++){
if((v2(v1[v10], v9)) <= (0)){
(v7) += 1;
v1(v1, v7, v10);
}
}
v1(v1, (v7) + (1), v10);
var v11 = (v7) + (1);
v3(v1, v2, v3, (v11) - (1));
v3(v1, v2, (v11) + (1), v4);
}
}
(v2.prototype.clone) = (function (){
var v1 = new v2();
v2.Tools.DeepCopy(this, v1);
return v1;
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
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
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
var v5 = (function (v1){
this.data.removeAt('items', v1);
});
// GenBlkBrick
for(var v0 = v1;(v0) < (v2);v0++){
var v6 = ({type : 'rook_damage', damage : v1, txt : v2, defeated : v3});
}
