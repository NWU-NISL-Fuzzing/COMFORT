// GenBlkBrick
for(var v0 = 0;(v0) < (500000);++v0){
if((v0) < (20)){
break ;
}
if((v0) === (6)){
break ;
}
}
var v1 = v0.toString();
if((v0) && ((v0.length) > (0))){
for(((v1) = 0, (v2) = v0.length);(v1) < (v2);v1++){
(v0) += ((v0[v1].height) * (v0[v1].scaleY)) + (v4);
}
var v5 = (v0) / (2.0);
for(((v1) = 0, (v2) = v0.length);(v1) < (v2);v1++){
(v6) = v0[v1];
(v7) = v6.height;
(v8) = v6.scaleY;
v6.setPosition(0, (v5) - (((v7) * (v8)) / (2)));
(v5) -= ((v7) * (v8)) + (v4);
}
}
var v2 = ({bar : v1});
// GenBlkBrick
for((v3) = 0;(v3) < (1e3);v3++){
if((v3) < (20)){
break ;
}
(v3) = ((1) & (v3)) ? ((3988292384) ^ ((v3) >>> (1))) : ((v3) >>> (1));
}
(v2[v1]) = v0;
while((v1) < (v3)){
(v2[v1]) = v3;
v1++;
}
(v2[v0]) = v3;
