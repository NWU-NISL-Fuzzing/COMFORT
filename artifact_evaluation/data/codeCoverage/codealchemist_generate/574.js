// GenBlkBrick
for(var v0 = 0;(v0) < (10000);v0++){
{
var v1 = 0;
for(var v2 = 0;((v2) + (v0)) < (v3);v2++){
if((v4[(v2) + (v0)].area) > (v4[v2].area)){
var v5 = v4[(v2) + (v0)];
(v4[(v2) + (v0)]) = v4[v2];
(v4[v2]) = v5;
v1++;
}
}
if((v0) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
(v2) += ((v0) * (v1)) + (1);
}
var v3 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("c66d747f8fdb558f9f8360f9e915700d.svg");
});
(v4) = (v2) ? (v3(v0, v2)) : (('') + (Math.round(v0))).split('.');
function v5(v1, v2){
var v3 = v1.getEditableConfig(v2.obj);
var v4 = v2.obj[0];
if(v3(v3)){
v6.highlightEmptyElements(v4, (v3.emptyelements) || (v4));
}
}
v4.reduce(v3, v2);
Array.prototype.reduce.call(v5, v3, v2);
(v3.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v5(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
v5(v1);
