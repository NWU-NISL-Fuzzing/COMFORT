// GenBlkBrick
for((v0) = (v1) - (1);(v0) >= (0);--v0){
var v1 = (function (v1, v2, v3, v4){
var v5 = this;
var v6 = v5.request;
var v7;
if(((v4) === (undefined)) && ((v1) === (undefined))){
v5.request.emit('error', new Error('no auth mechanism defined'));
}else {
if((v4) !== (undefined)){
(v7) = v5.bearer(v4, v3);
}else {
(v7) = v5.basic(v1, v2, v3);
}
}
if(v7){
v6.setHeader('authorization', v7);
}
});
}
// GenBlkBrick
for(var v2 = 3;(v2) >= (0);v2--){
{
(v2) += v1;
}
}
(v3) += ((v0) * (v2)) + (1);
var v4 = (function (){
var v1 = ({});
function v2(v3, v4, v5){
if((v4) === (5)){
return (v3) === (v1);
}
return false;
}
var v5 = ({5 : v1, length : 100});
var v6 = Array.prototype.map.call(v5, v2);
return (v6[5]) === (true);
});
if((v3) === (v3)){
(v3) = ((v3) <= (v0)) ? (v3) : (v0);
(v3) = ((v3) >= (v2)) ? (v3) : (v2);
}
Array.prototype.reduce.call(v4, v1, v3);
Array.prototype.reduce.call(v4, v1, v3);
(v5) = v4(v3, v2, v0);
