// GenBlkBrick
for(((v0) = 0, (v1) = v2);(v0) < (v1);++v0){
if((v0) === (6)){
break ;
}
}
{
(v1) = v0;
}
(v0) = ((v0) & (0x33333333)) + (((v0) >> (2)) & (0x33333333));
var v2 = (((v0) + ((Math.random()) * (16))) % (16)) | (0);
var v3 = ((Math.sin(v1)) * (v0)) * (Math.cos(v2));
if((isNaN(v0)) || ((v0) === (Infinity))){
(v4) = (isNaN(v0)) ? (1) : (0);
(v5) = v3;
}else {
(v5) = Math.floor((Math.log(v0)) / (Math.LN2));
if(((v0) * ((v7) = Math.pow(2, - v5))) < (1)){
v5--;
(v7) *= 2;
}
if(((v5) + (v2)) >= (1)){
(v0) += (v1) / (v7);
}else {
(v0) += (v1) * (Math.pow(2, (1) - (v2)));
}
if(((v0) * (v7)) >= (2)){
v5++;
(v7) /= 2;
}
if(((v5) + (v2)) >= (v3)){
(v4) = 0;
(v5) = v3;
}else {
if(((v5) + (v2)) >= (1)){
(v4) = (((v0) * (v7)) - (1)) * (Math.pow(2, v10));
(v5) = (v5) + (v2);
}else {
(v4) = ((v0) * (Math.pow(2, (v2) - (1)))) * (Math.pow(2, v10));
(v5) = 0;
}
}
}
var v6 = (function (v1){
this.underlyingType._skip(v1);
});
(v7) = v6(v2, v0, v1);
