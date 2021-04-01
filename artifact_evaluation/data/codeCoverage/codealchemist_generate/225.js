var v0 = (function (){
this.forEachExists(this.game.world.wrap, this.game.world);
});
var v1 = (function (v1){
return (this.distanceToPoint(v1.center)) <= (v1.radius);
});
var v2 = (function (v1, v2, v3){
var v4 = v3(338)(Object, "create");
(v1.exports) = v4;
});
(v3) = (function (v1, v2){
if((v1.substr(0, 1).toUpperCase()) == (v2.substr(0, 1).toUpperCase())){
v2(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v2(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v1(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
}else {
v2(new RegExp(((v1.substr(0, 1).toUpperCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v2(new RegExp(((v1.substr(0, 1).toLowerCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v2(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v2(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v1(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toUpperCase()) + (v1.substr(1)));
v1(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toLowerCase()) + (v1.substr(1)));
}
});
// GenBlkBrick
for(var v0 = v1;(v0) < (v2);v0++){
for(var v4 in v1){
if(v1.hasOwnProperty(v4)){
(v3[v4]) = v1[v4];
}
}
var v5 = (function (v1){
var v2 = v1.parentNode;
return (v2) ? (Array.prototype.indexOf.call(v2.children, v1)) : (- 1);
});
}
var v6 = (function (v1){
return (((((typeof v1) === ('string')) || ((typeof v1) === ('number'))) || ((typeof v1) === ('boolean'))) || ((typeof v1) === ('symbol'))) || ((typeof v1) === ('bigint'));
});
for(var v7 in v0){
if(v0.hasOwnProperty(v7)){
(v5[v7]) = v0[v7];
}
}
var v8 = ((((((((("-(") + (v4)) + (")-")) + ("(?:")) + (v7)) + ("+-)*")) + ("\\1")) + ("(?!")) + (v7)) + (")");
