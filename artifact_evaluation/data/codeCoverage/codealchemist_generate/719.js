// GenBlkBrick
for(var v0 = 0;(v0) < (6);++v0){
var v1 = - v0;
}
if(! v0){
(v2) = v0;
}
var v3 = parseInt(v0, 10);
(v4) = (v2) ^ (v0);
if((isNaN(v3)) || ((v3) === (Infinity))){
(v5) = (isNaN(v3)) ? (1) : (0);
(v6) = v0;
}else {
(v6) = Math.floor((Math.log(v3)) / (Math.LN2));
if(((v3) * ((v7) = Math.pow(2, - v6))) < (1)){
v6--;
(v7) *= 2;
}
if(((v6) + (v4)) >= (1)){
(v3) += (v2) / (v7);
}else {
(v3) += (v2) * (Math.pow(2, (1) - (v4)));
}
if(((v3) * (v7)) >= (2)){
v6++;
(v7) /= 2;
}
if(((v6) + (v4)) >= (v0)){
(v5) = 0;
(v6) = v0;
}else {
if(((v6) + (v4)) >= (1)){
(v5) = (((v3) * (v7)) - (1)) * (Math.pow(2, v10));
(v6) = (v6) + (v4);
}else {
(v5) = ((v3) * (Math.pow(2, (v4) - (1)))) * (Math.pow(2, v10));
(v6) = 0;
}
}
}
while((v0) < (v6)){
if((v2[v0]) != (0xffffffff)){
v0++;
continue ;
}
(v7) = (v0) - (v4);
(v5[(v2) + (v3)]) = v7;
v7++;
v0++;
while((v0) < (v6)){
if((v2[v0]) != (0xffffffff)){
(v5[(v2) + (v5)]) = v7;
(v2) += v0;
v0++;
(v7) = - 1;
break ;
}else {
v7++;
v0++;
}
}
}
if((v2) < (0)){
(v2) = (360) + (v2);
}
if((isNaN(v6)) || ((v6) === (Infinity))){
(v8) = (isNaN(v6)) ? (1) : (0);
(v9) = v3;
}else {
(v9) = Math.floor((Math.log(v6)) / (Math.LN2));
if(((v6) * ((v7) = Math.pow(2, - v9))) < (1)){
v9--;
(v7) *= 2;
}
if(((v9) + (v4)) >= (1)){
(v6) += (v2) / (v7);
}else {
(v6) += (v2) * (Math.pow(2, (1) - (v4)));
}
if(((v6) * (v7)) >= (2)){
v9++;
(v7) /= 2;
}
if(((v9) + (v4)) >= (v3)){
(v8) = 0;
(v9) = v3;
}else {
if(((v9) + (v4)) >= (1)){
(v8) = (((v6) * (v7)) - (1)) * (Math.pow(2, v10));
(v9) = (v9) + (v4);
}else {
(v8) = ((v6) * (Math.pow(2, (v4) - (1)))) * (Math.pow(2, v10));
(v9) = 0;
}
}
}
