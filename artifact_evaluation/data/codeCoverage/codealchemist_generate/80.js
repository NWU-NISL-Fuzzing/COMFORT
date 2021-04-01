var v0 = (function (){
var v1 = 0;
for(var v2 = 0;(v2) < (arguments.length);++v2){
(v1) += arguments[v2];
}
return v1;
});
var v1 = (function (v1, v2, v3){
"use strict";
v3(65)("italics", (function (v1){
return (function (){
return v1(this, "i", "", "");
});
}));
});
var v2 = (function (v1, v2){
'use strict';
var v3 = ({UNSIGNED_BYTE : v2.UNSIGNED_BYTE, UNSIGNED_SHORT : v2.UNSIGNED_SHORT, UNSIGNED_INT : v2.UNSIGNED_INT, FLOAT : v2.FLOAT, HALF_FLOAT : v2.HALF_FLOAT_OES, UNSIGNED_INT_24_8 : v2.UNSIGNED_INT_24_8, UNSIGNED_SHORT_4_4_4_4 : v2.UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1 : v2.UNSIGNED_SHORT_5_5_5_1, UNSIGNED_SHORT_5_6_5 : v2.UNSIGNED_SHORT_5_6_5, isPacked : (function (v4){
return ((((v4) === (v3.UNSIGNED_INT_24_8)) || ((v4) === (v3.UNSIGNED_SHORT_4_4_4_4))) || ((v4) === (v3.UNSIGNED_SHORT_5_5_5_1))) || ((v4) === (v3.UNSIGNED_SHORT_5_6_5));
}), sizeInBytes : (function (v4){
switch(v4){
}
}), validate : (function (v4){
return (((((((((v4) === (v3.UNSIGNED_BYTE)) || ((v4) === (v3.UNSIGNED_SHORT))) || ((v4) === (v3.UNSIGNED_INT))) || ((v4) === (v3.FLOAT))) || ((v4) === (v3.HALF_FLOAT))) || ((v4) === (v3.UNSIGNED_INT_24_8))) || ((v4) === (v3.UNSIGNED_SHORT_4_4_4_4))) || ((v4) === (v3.UNSIGNED_SHORT_5_5_5_1))) || ((v4) === (v3.UNSIGNED_SHORT_5_6_5));
})});
return v1(v3);
});
(v3) = (function (v1, v2){
v1('plurals', v1, v2);
});
v2(v1, v3);
var v4 = ({source : [], formatDropdownItem : v1, formatResult : v2});
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v3(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
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
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v0(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
