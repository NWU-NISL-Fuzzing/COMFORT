var v0 = (function (v1, v2, v3){
v3(69)("Set");
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(0), v5 = v3(102)(! 1), v6 = [].indexOf, v7 = (! ! v6) && (((1) / ([].indexOf(1, - 0))) < (0));
v4((v4.P) + ((v4.F) * ((v7) || (! v3(36)(v6)))), "Array", ({indexOf : (function (v1){
return (v7) ? ((v6.apply(this, arguments)) || (0)) : (v5(this, v1, arguments[1]));
})}));
});
(v1.prototype) = Object.create(v0.prototype);
if(v1.toSource){
(v0.toSource) = (function v2(){
return v1.toSource();
});
}
var v2 = (function (){
return (this.get('isFixedHeight')) && (this.get('isFixedWidth'));
});
var v3 = (function (){
return this.world.enableBodySleeping;
});
// GenBlkBrick
for(var v0 in v0.prototype){
var v4 = (function (v1, v2, v3){
v3(63)('WeakSet');
});
var v5 = (function (v1){
return this.setFromMatrixColumn(v1, 3);
});
}
function v6(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v4(v1);
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
(v3) += v5(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
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
