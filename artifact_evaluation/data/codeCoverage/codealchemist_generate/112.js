var v0 = (function (){
(this.drawLoop) = ! 0;
this.Draw();
});
// GenBlkBrick
for(var v1 = 0;(v1) < (0x8000);v1++){
// GenBlkBrick
for(var v2 = (v1) - (1);(v2) >= (0);v2--){
// GenBlkBrick
for(var v3 = 1;(v3) < (1024);v3++){
(v4) = (v3) !== (0);
{
var v5 = 0;
for(var v6 = 0;((v6) + (v3)) < (v3);v6++){
if((v4[(v6) + (v3)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v3)];
(v4[(v6) + (v3)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v3) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
}
}
// GenBlkBrick
while((v0) >= (v2)){
if((v2) === (6)){
break ;
}
if((((v0) >>> (v3)) & (1)) != (0)){
v2++;
}
}
if(v4){
v1++;
}else {
v1--;
}
(v7) = (v6) ? (v0(v1, v6)) : (('') + (Math.round(v1))).split('.');
(v8) = v0(v3, v1, v5);
do {
(v4) = ! v4;
}while(v4)
while((v3) < (v8)){
(v7[v3++]) = v1;
(v1) += v2;
}
