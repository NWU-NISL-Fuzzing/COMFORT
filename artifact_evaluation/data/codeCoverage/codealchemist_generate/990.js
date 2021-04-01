var v0 = (function (v1, v2, v3){
(function (v1){
var v4 = v3(119), v5 = v3(5229), v6 = (((("object") == (typeof v2)) && (v2)) && (! v2.nodeType)) && (v2), v7 = ((((v6) && (("object") == (typeof v1))) && (v1)) && (! v1.nodeType)) && (v1), v8 = ((v7) && ((v7.exports) === (v6))) ? (v4.Buffer) : (void 0), v9 = ((v8) ? (v8.isBuffer) : (void 0)) || (v5);
(v1.exports) = v9;
}).call(this, v3(95)(v1));
});
var v1 = (function (v1){
try{
for(var v2 = 0;(v2) < (20010);v2++){
if((v2) > (20000)){
return ((('j ') + (v1)) + (' j in the loop ')) + (v1);
}else {
if((v2) > (30000)){
return (' test0 ') + (v2);
}
}
}
}catch(v3){
}
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
var v3 = (function (v1, v2, v3){
var v4 = v3(2184), v5 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, v6 = /\\(\\)?/g, v7 = v4((function (v1){
var v2 = [];
return (((46) === (v1.charCodeAt(0))) && (v2.push("")), v1.replace(v5, (function (v1, v3, v4, v5){
v2.push((v4) ? (v5.replace(v6, "$1")) : ((v3) || (v1)));
})), v2);
}));
(v1.exports) = v7;
});
// GenBlkBrick
do {
if((v4) === (6)){
break ;
}
} while((0) < (--v4));
function v5(v1, v2){
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
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
(v1.toString) = (function v1(){
return v5.toString();
});
(v6) = v5(v2, v3, v4);
