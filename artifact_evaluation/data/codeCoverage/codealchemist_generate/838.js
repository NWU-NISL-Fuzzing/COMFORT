// GenBlkBrick
for(var v0 = 0;(v0) < (4);v0++){
var v1 = (function (v1, v2, v3){
var v4 = v3(2155), v5 = v3(2154)(v4);
(v1.exports) = v5;
});
}
while(v0--){
new v1();
}
// GenBlkBrick
for(var v2 = 0;(v2) < (4);v2++){
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
// GenBlkBrick
while(((v4) > (1)) && (v1.length)){
// GenBlkBrick
for(var v5 = 0;(v5) < (8);v5++){
var v6 = (function (){
var v1 = this.res, v2 = this.req;
v2.toHashCode.restore();
var v3 = v1.get();
v1.abort(v3);
this.assertCalledOnce(v2.abort);
});
(v6.prototype._packHalf) = (function (v1){
var v2 = (v1) * (255.0);
var v3 = (v2) - (Math.floor(v2));
return new v5.Vector2((v1) - ((v3) / (255.0)), v3);
});
}
{
var v7 = 0;
for(var v8 = 0;((v8) + (v5)) < (v3);v8++){
if((v4[(v8) + (v5)].area) > (v4[v8].area)){
var v5 = v4[(v8) + (v5)];
(v4[(v8) + (v5)]) = v4[v8];
(v4[v8]) = v5;
v7++;
}
}
if((v5) == (1)){
if((v7) == (0)){
break ;
}
}else {
(v5) = Math.floor(((v5) * (10)) / (13));
}
}
}
}
var v9 = ({get : v2});
if(((v0) - (v1)) > (0)){
(v9.thereYet) = v1;
(v9.cap) = v6;
}
// GenBlkBrick
while(((v0) - (v3)) > (1)){
{
var v10 = 0;
for(var v11 = 0;((v11) + (v3)) < (v3);v11++){
if((v4[(v11) + (v3)].area) > (v4[v11].area)){
var v5 = v4[(v11) + (v3)];
(v4[(v11) + (v3)]) = v4[v11];
(v4[v11]) = v5;
v10++;
}
}
if((v3) == (1)){
if((v10) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
Array.prototype.reduce.call(v9, v1, v5);
while((v4) < (v11)){
(v7) *= v9[v4++];
}
