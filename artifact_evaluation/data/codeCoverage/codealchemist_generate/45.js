var v0 = (function (v1){
return (((v1) !== (null)) && ((v1) instanceof (Object))) && (((v1.constructor) === (Object)) || ((Object.prototype.toString.call(v1)) === ('[object Object]')));
});
// GenBlkBrick
for(var v1 = 0;(v1) < (2);v1++){
if((v1) === (6)){
break ;
}
}
var v2 = (function (){
if((this.getBitsBase2(0, 64)) === ('1111111010000000000000000000000000000000000000000000000000000000')){
return true;
}
return false;
});
// GenBlkBrick
for(var v0 in v2.prototype){
var v3 = (function (v1, v2, v3, v4){
var v5 = v1.put(v3, v2);
(v5.onsuccess) = (function (){
v4(null);
});
(v5.onerror) = (function (){
v4(this.error);
});
});
// GenBlkBrick
while((v0) > (0)){
(v2.prototype.copyFrom) = (function (v1){
var v2 = this;
this.clear();
v1.forEach((function (v3, v4){
return v2.add(v3, v4);
}));
});
var v4 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("d29b206e5bc6855105b713ef409ff2d9.svg");
});
}
}
(v0.prototype) = ((v3) === (null)) ? (Object.create(v3)) : (((v2.prototype) = v3.prototype, new v2()));
Array.prototype.reduce.call(v2, v4, v1);
// GenBlkBrick
for(var v0 in v4.prototype){
// GenBlkBrick
for(var v5 = 10;(v5) < (14);v5++){
// GenBlkBrick
for((v6) = 0;(v6) < (4);v6++){
var v7 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("2556ca47e43c136454f952dd8b8fc038.svg");
});
var v8 = v7("hello world");
}
if(v7(v8)){
continue ;
}
}
(v9) = (v5) ? (v4(v6, v5)) : (('') + (Math.round(v6))).split('.');
}
function v10(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
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
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v7(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
