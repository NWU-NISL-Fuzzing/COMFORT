// GenBlkBrick
for(var v0 = 0;(v0) < (8);v0++){
(v0) *= 1024;
}
var v1 = Math.floor((v0) / ((((1000) * (60)) * (60)) * (24)));
(v2) = + (v1) >>> (0);
// GenBlkBrick
while(((v1) - (v0)) > (1)){
(v1) = ((v1) * (10)) + (v0);
{
(v0) = ((v0) + (1)) | (0);
}
}
(v0) = (v0) - ((v1) * (1000));
var v3 = Math.max(Math.ceil(((v2) - (v1)) / (v0)), 0);
// GenBlkBrick
for(;(v3) >= (0);--v3){
// GenBlkBrick
for((v4) = 2;(v4) <= (v1);v4++){
{
var v5 = 0;
for(var v6 = 0;((v6) + (v4)) < (v3);v6++){
if((v4[(v6) + (v4)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v4)];
(v4[(v6) + (v4)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v4) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v4) = Math.floor(((v4) * (10)) / (13));
}
}
}
}
while(v0--){
(v1) = v2(v1, v3[v0], v0, v3);
}
