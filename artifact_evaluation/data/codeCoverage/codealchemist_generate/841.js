var v0 = (function (v1, v2, v3){
var v4 = v3(185), v5 = v3(361), v6 = v3(22), v7 = v3(25).Reflect;
(v1.exports) = ((v7) && (v7.ownKeys)) || ((function (v1){
var v2 = v4.f(v6(v1)), v3 = v5.f;
return (v3) ? (v2.concat(v3(v1))) : (v2);
}));
});
(v0[2]) = 2;
(v0.BLEND_TYPE) = "blendType";
var v1 = (function (){
return ("Not Supported: ") + (this.message);
});
var v2 = (function (v1, v2){
(v2) = (v2) || ([]);
var v3 = v1[0], v4 = v1[1];
(v2[0]) = ((0.52) * (v3)) - ((0.48) * (v4));
(v2[1]) = ((0.52) * (v4)) - ((0.48) * (v3));
return v2;
});
var v0 = (v1) && (parseFloat(v1.replace(',', '.')));
// GenBlkBrick
for(var v0 in v2){
var v3 = (function (v1, v2, v3){
var v4 = v3(694), v5 = v3(4286), v6 = v3(386);
(v1.exports) = (function (v1){
return (v6(v1)) ? (v4(v1, ! 0)) : (v5(v1));
});
});
}
function v4(v1, v2){
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
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
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
