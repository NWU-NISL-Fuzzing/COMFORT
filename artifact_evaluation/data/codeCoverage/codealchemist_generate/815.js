var v0 = (function (v1, v2){
if(v2){
return 'other';
}
return (((v1) >= (0)) && ((v1) <= (1))) ? ('one') : ('other');
});
// GenBlkBrick
for(var v1 = 0;(v1) < (32);v1++){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
var v4 = (function (v1){
v1.memoryWriter[v1.registersHL](v1, v1.registersHL, (v1.memoryReader[v1.registersHL](v1, v1.registersHL)) & (0xF7));
});
}
(v5) = v0(v1, v3, v2);
var v6 = Array.prototype.map.call(v0, v4);
(v0.UTC) = v4.UTC;
(v7) = v4(v5, v3, v1);
// GenBlkBrick
for(var v8 = - 5;(v8) < (v1);v8++){
var v9 = (v8) >>> (1);
if((v2) < (20)){
break ;
}
}
(v10) = ((v7) * (v9)) - ((v8) * (v1));
