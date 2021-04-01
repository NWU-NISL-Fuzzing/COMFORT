// GenBlkBrick
for(var v0, v1 = [], v2 = 0;(v2) < (256);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
v1.push(({group1 : v4, group2 : 0, id : (((v4) * (9)) + (v0)) + (1)}));
}
(v5) = (((3.0) * (v0)) - ((v2) * (v2))) / (9.0);
var v6 = ((Math.sin(v0)) * (v3)) * (Math.sin(v5));
while(v0){
if((v0.length) < (v1)){
v1.push(v0);
break ;
}else {
v1.push(v0.substr(0, v1));
(v0) = v0.substr(v1);
}
}
while((v4) < (v3)){
(v1[v4++]) = v0;
(v0) += v6;
}
while((v5) < (v4)){
(v1[v5++]) = v6;
(v6) += v0;
}
while((v0) < (v6)){
if((v2[v0]) != (0xffffffff)){
v0++;
continue ;
}
(v7) = (v0) - (v4);
(v5[(v0) + (v2)]) = v7;
v7++;
v0++;
while((v0) < (v6)){
if((v2[v0]) != (0xffffffff)){
(v5[(v0) + (v4)]) = v7;
(v0) += v3;
v0++;
(v7) = - 1;
break ;
}else {
v7++;
v0++;
}
}
}
var v8 = ((v5) * (v7)) - ((v0) * (v3));
