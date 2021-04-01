// GenBlkBrick
for(((v0) = 0, (v1) = v2);(v0) < (v1);++v0){
// GenBlkBrick
for((v1) = 0;(v1) < (1e6);v1++){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
}
while((v4) != (0)){
(v4) &= (v4) - (1);
++v3;
}
// GenBlkBrick
while((v4++) < (10)){
if((v4) < (- 1)){
(v4) += 2.0;
}
}
var v5 = ((Math.sin(v2)) * (v0)) * (Math.sin(v4));
(v6) = (v0) === (0);
do {
(v6) = ! v6;
}while(v6)
// GenBlkBrick
while((v1--) > (0)){
(v1) -= (v5) * (Math.floor((v4) / (v0)));
{
v5++;
if((v1) < (20)){
break ;
}
if((v5) > (10)){
(v1) = 200;
v5++;
}
}
}
if((v2) > (v3)){
(v2) = (v6) ? (0) : (v3);
}
