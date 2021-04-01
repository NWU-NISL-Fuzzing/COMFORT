function v0(v1){
(v1) = (v1) | (0);
return ((v1) & (0xffff)) | (0);
}
v0(/(x|ch|ss|sh)es$/i, "$1");
var v1 = (function (v1, v2){
(v1[v2]) = v1[('b__') + (v2)];
});
// GenBlkBrick
for(var v0 in undefined){
var v2 = (function (v1){
if((this.animations.indexOf(v1)) === (- 1)){
this.animations.push(v1);
}
});
}
function v3(v1, v2, v3, v4, v5){
v1(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v2));
}
v2(v3, v0);
(v1.prototype) = ((v3) === (null)) ? (Object.create(v3)) : (((v2.prototype) = v3.prototype, new v2()));
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v3(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
