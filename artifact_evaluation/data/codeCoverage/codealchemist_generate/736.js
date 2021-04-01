var v0 = (function (v1){
return ((((v1._x) === (this._x)) && ((v1._y) === (this._y))) && ((v1._z) === (this._z))) && ((v1._w) === (this._w));
});
var v1 = (function (v1, v2, v3){
var v4 = v3(135), v5 = v3(120).document, v6 = (v4(v5)) && (v4(v5.createElement));
(v1.exports) = (function (v1){
return (v6) ? (v5.createElement(v1)) : (({}));
});
});
// GenBlkBrick
for(var v2 = 0;(v2) < (12);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
{
if((v2) === (6)){
break ;
}
(v4) += v2;
}
}
[].reduce(v1, v4);
{
(v3) *= 1;
}
// GenBlkBrick
while((v5) &= 3){
{
var v6 = 0;
for(var v7 = 0;((v7) + (v5)) < (v3);v7++){
if((v4[(v7) + (v5)].area) > (v4[v7].area)){
var v5 = v4[(v7) + (v5)];
(v4[(v7) + (v5)]) = v4[v7];
(v4[v7]) = v5;
v6++;
}
}
if((v5) == (1)){
if((v6) == (0)){
break ;
}
}else {
(v5) = Math.floor(((v5) * (10)) / (13));
}
}
}
while(v5--){
new v1();
}
if((v5) === (1)){
(v8) = (v2) === (2);
}
