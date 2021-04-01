// GenBlkBrick
for((v0) = 1;(v0) < (10);v0++){
{
var v1 = 0;
for(var v2 = 0;((v2) + (v0)) < (v3);v2++){
if((v4[(v2) + (v0)].area) > (v4[v2].area)){
var v5 = v4[(v2) + (v0)];
(v4[(v2) + (v0)]) = v4[v2];
(v4[v2]) = v5;
v1++;
}
}
if((v0) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
}
var v3 = ((v0) / (v1)) - (v2);
// GenBlkBrick
for((v4) = 0;(v4) < ((v1) || ("").length);v4++){
if(((v4) === (3)) && ((v1) === (3))){
(v5) = true;
}
}
var v6 = (((v2) * (v3)) - ((v1) * (v0))) / (v4);
var v7 = (Array.prototype.map) === ("2010");
(v2) += ((v0) * (v4)) + (1);
if((v5) && (v7)){
(v8) = v8.substring(1);
}else {
if((! v5) && (! v7)){
(v8) = ('/') + (v8);
}
}
if((v2) > (v1)){
(v2) = (v7) ? (0) : (v1);
}
