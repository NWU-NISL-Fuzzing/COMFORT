var v0 = (function (v1, v2, v3){
var v4 = v3(27), v5 = v3(104), v6 = v3(34)("match");
(v1.exports) = (function (v1){
var v2;
return (v4(v1)) && (((void 0) !== ((v2) = v1[v6])) ? (! ! v2) : (("RegExp") == (v5(v1))));
});
});
var v1 = (function (v1, v2){
var v3 = (v2) || (1);
if(! this.contains(v1)){
(this[(':') + (v1)]) = v3;
this.keys.push(v1);
}
});
var v2 = (function (v1, v2, v3){
(v1.exports) = ! v3(205)((function (){
return (7) != (Object.defineProperty(({}), "a", ({get : (function (){
return 7;
})})).a);
}));
});
// GenBlkBrick
for(var v3 = 0;(v3) < (10);v3++){
function v4(v1, v2){
v1(v1, 0, v1.children.length, v2, v1);
}
var v5 = (function (v1, v2){
if(v1.eqr(0)){
return v2.rsub(1);
}
if(v1.eqr(1)){
return v2;
}
return v2.pow(v1).mul(v2.rsub(1).pow(v1.rsub(1)));
});
}
var v6 = (function (){
this.emit('end');
this.emit('close');
});
function v7(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v6(v1);
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
(v3) += ('\n') + (v5(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
var v8 = (function (v1){
return v1.split(".").pop();
});
var v9 = v3++;
