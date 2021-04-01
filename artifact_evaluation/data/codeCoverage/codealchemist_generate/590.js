var v0 = (function (v1){
return v1.replace(/['"]/g, (function (v2){
return ((v2) === ('"')) ? ('\'') : ('"');
}));
});
var v1 = (function (v1){
var v2 = ((this.scale.x) === (this.scale.y)) === (this.scale.z);
var v3 = ((v1.x) === (v1.y)) === (v1.z);
if(! (v2) && (v3)){
this.updateNormals();
}
this.scale.copy(v1);
this.updateAABB();
this.updateBoundingSphereRadius();
});
// GenBlkBrick
for(var v2 = 0;(v2) < (24);v2++){
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
}
(v5) = v0(v3, v2, v4);
var v6 = Math.sqrt(((v4) * (v4)) + ((v5) * (v5)));
// GenBlkBrick
for(var v7 = 1;(v7) <= (10);v7++){
for(;(v6) > (0);((v1[(v2) + (v3)]) = (v7) & (0xff), (v3) += v2, (v7) /= 256, (v6) -= 8)){
}
}
(v6) += (Math.floor(((v2) - (100)) / (400))) - (Math.floor(((v2) - (102)) / (400)));
var v8 = ((v1) * (v4)) - ((v3) * (v3));
