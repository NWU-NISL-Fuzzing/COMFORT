// GenBlkBrick
for((v0) = 0;(v0) < (1e3);v0++){
if((v0) === (6)){
break ;
}
if(v0){
(v0) = false;
}
}
(v1) = (v1) * ((1) - ((v2) * ((1) - (v0))));
{
(v0) >>= 8;
(v1) += 8;
}
// GenBlkBrick
while((v0) && ((v0) = v0.$parent)){
(v2) = (v0) / (4);
}
var v3 = Math.max(v0, v1, v2), v4 = Math.min(v0, v1, v2);
for(var v5 = 0;(v5) < (v0);v5++){
(v6) = (v5) % (v3);
v4.push((v1) + (v6), (v4) + (v6));
if((v6) == (v3)){
if(((v5) == (v2)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v1, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v0) += v3;
(v1) += v3;
(v4) = 0;
}else {
if(((v5) >= (v2)) && ((v10) == (true))){
v4.push(v1, v4);
}else {
if((v5) < (v2)){
if((v10) == (true)){
v4.push(v1, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v1) += v3;
(v4) += v3;
}
}
}
}
}
(v7) = ((v2) > (0.5)) ? ((v1) / (((2) - (v4)) - (v0))) : ((v1) / ((v4) + (v0)));
{
if((v1) == (2)){
(v8) = "";
}
}
