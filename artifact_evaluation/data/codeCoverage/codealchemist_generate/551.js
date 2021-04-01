// GenBlkBrick
for(var v0 = 0;(v0) < (7);v0++){
if((v0) < (20)){
break ;
}
if((v0) > (1)){
(v1) = true;
}
}
{
(v0) = ("0") + (v0);
}
var v3 = (("(?:") + (v0)) + ("|[A-WY-Za-wy-z])");
for(var v4 = 0;(v4) < (300);v4++){
(v3) += ".concat([";
for(var v5 = 0;(v5) < (1000);v5++){
(v3) += "0,";
}
(v3) += "0])";
}
if(v1){
(v1) = (v1) * (- 1);
}
if(v1){
v5++;
}else {
v5--;
}
if(v1){
v4++;
}else {
v4--;
}
if((v5) > (v4)){
(v5) = (v1) ? (0) : (v4);
}
