var v0 = (function (v1, v2, v3){
var v4 = v1('../'), v5 = v1('underscore'), v6 = v1('lodash'), v7 = v1('../test/history'), v8 = v1('./utils');
var v9 = v8.fns('item', 'return item < 11');
var v10 = [];
(v3['Array::every()']) = (function (){
return v10.every(v9());
});
(v3['fast.every()']) = (function (){
return v4.every(v10, v9());
});
(v3['underscore.every()']) = (function (){
return v5.every(v10, v9());
});
(v3['lodash.every()']) = (function (){
return v6.every(v10, v9());
});
});
// GenBlkBrick
while((v0) && ((v0.nodeType) == (1))){
var v1 = (function (v1){
(v1.val) = '1';
});
var v2 = (function (){
return this.getPropertyValue('-webkit-mask-box-image-outset');
});
}
var v3 = (function (v1, v2, v3){
var v4 = v3(4253), v5 = v3(192);
(v1.exports) = (function (v2, v3, v6, v7, v8){
return ((v2) === (v3)) || (((((null) == (v2)) || ((null) == (v3))) || ((! v5(v2)) && (! v5(v3)))) ? (((v2) != (v2)) && ((v3) != (v3))) : (v4(v2, v3, v6, v7, v1, v8)));
});
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
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
(v0.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v3.prototype) = v2.prototype, new v3()));
var v5 = (function (){
var v1 = [];
Object.defineProperties(v1, ({"4294967297" : ({value : 100})}));
return ((v1.hasOwnProperty("4294967297")) && ((v1.length) === (0))) && ((v1[4294967297]) === (100));
});
(v3.prototype.getClassName) = (function (){
return "FreeCameraVirtualJoystickInput";
});
(v3.parse) = v5.parse;
