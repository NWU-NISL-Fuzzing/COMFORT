// GenBlkBrick
while(v0--){
if((v0) === (6)){
break ;
}
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
}
{
(v3) = (v1) % (v0);
(v1) = v0;
(v0) = v3;
}
if((v1) === (v0)){
(v4) = 0;
(v5) = 0;
}else {
var v6 = (v0) - (v1);
(v5) = ((v2) <= (0.5)) ? ((v6) / ((v0) + (v1))) : ((v6) / (((2) - (v0)) - (v1)));
switch(v0){
}
(v4) /= 6;
}
// GenBlkBrick
for((v7) = 0;(v7) < (16);(v7) = (v7) + (1)){
var v8 = (function (v1, v2, v3, v4, v5, v6){
var v7 = v1.x.computeStart(v2.width, ({start : v4.left, end : v4.right}), ({start : v5.left, end : v5.right}), v3.width, v6.x);
var v8 = v1.y.computeStart(v2.height, ({start : v4.top, end : v4.bottom}), ({start : v5.top, end : v5.bottom}), v3.height, v6.y);
return ({left : v7, top : v8});
});
}
{
(v5) *= 1;
}
(v2) -= (v6) * (Math.floor((v4) / (v5)));
(v9) = ((v3) > (0.5)) ? ((v1) / (((2) - (v5)) - (v7))) : ((v1) / ((v5) + (v7)));
// GenBlkBrick
for(;(v4) > (0);((v1[(v2) + (v0)]) = (v7) & (0xff), (v0) += v9, (v7) /= 256, (v4) -= 8)){
if((v6) < (20)){
break ;
}
if((v4) == (2)){
(v6) += v2[v4];
(v6) += v2[v9];
(v6) += v2[v1];
(v6) += v2[v7];
}
}
