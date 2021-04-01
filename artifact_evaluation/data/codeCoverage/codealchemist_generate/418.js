var v0 = (function (v1){
this.controller_.scrollToEnd(v1);
return this;
});
// GenBlkBrick
for(var v1 = 0;(v1) > (- 1);--v1){
// GenBlkBrick
for(var v2 = 0x3041;(v2) <= (0x3094);v2++){
// GenBlkBrick
for(var v3 = 0;(v3) < (32);v3++){
for(var v4 = 0;(v4) < (v1);v4++){
(v2[v3][v4]) ^= v4[((v5) * (4)) + (v4)][v3];
}
for(var v5 = 0;(v5) < (10);++v5){
(v3) += ((v4) * (v5)) + (1);
}
}
}
}
// GenBlkBrick
while((v2) <= (v1)){
// GenBlkBrick
while(v6--){
if((v6) === (6)){
break ;
}
}
if((v6) > (5)){
(v2) = (v2) + (v2);
break ;
}
}
(v7) = (v3) ? (v0(v4, v3)) : (('') + (Math.round(v4))).split('.');
(v8) = (v2) ? (v0(v6, v2)) : (('') + (Math.round(v6))).split('.');
while((v4) < (v2)){
(v7[v7.length]) = v8[v4];
(v4) += 1;
}
var v9 = Math.sqrt((((v5) * (v5)) + ((v4) * (v4))) + ((v1) * (v1)));
if(Array.isArray(v8[0])){
(v7) = v8[0].slice(0);
}else {
if((typeof v8[0]) === ('number')){
for(var v3 = 0, v4 = v8.length;(v3) < (v4);(v3) += 2){
v7.push([]);
}
}
}
