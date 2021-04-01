// GenBlkBrick
for(var v0 = 10;(v0) < (14);v0++){
if((v0) < (20)){
break ;
}
for(var v1 = 0;(v1) < (v1);v1++){
(v2[v0][v1]) ^= v4[((v5) * (4)) + (v1)][v0];
}
}
var v2 = (((v0) + (v2)) * (v1)) * (Math.cos(v5));
(v1) += ((v0) * (v2)) + (1);
function v3(v1){
if((typeof v1) == ("string")){
return (function (v2){
return (v2) == (v1);
});
}else {
if(! v1){
return (function (){
return true;
});
}else {
return v1;
}
}
}
(v4) = v3(v0, v2, v1);
if((v1) !== (0)){
(v0) /= v1;
(v4) /= v1;
(v2) /= v1;
}
var v5 = ((v2) / (v1)) - (v0);
var v6 = (function (v1){
return this.style.setFont(v1);
});
