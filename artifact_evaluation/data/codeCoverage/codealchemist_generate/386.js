var v0 = (function (v1, v2){
(this._suppressNavigation) = true;
v1.apply(this, v2);
delete this._suppressNavigation;
});
(v0.CreateAndShow) = (function (v1, v2, v3){
var v4 = new v0(v1);
v4.show(v2, v3);
return v4;
});
// GenBlkBrick
for(var v1 = 0;(v1) < (v1);(v1) += 1){
if(((v1) >= (1)) && ((v1) <= (9))){
(v1) = ("0") + (v1);
}
}
// GenBlkBrick
for(++v3;--v3;(v1) = ((((v1) %= (0x7fffffff) + (1)) & (0x40000000)) === (0x40000000)) ? ((v1) * (2)) : (((((v1) - (0x40000000)) * (2)) + (0x7fffffff)) + (1))){
{
var v4 = 0;
for(var v5 = 0;((v5) + (v3)) < (v3);v5++){
if((v4[(v5) + (v3)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v3)];
(v4[(v5) + (v3)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v3) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
// GenBlkBrick
while((v3) < (v1)){
if((v3) < (20)){
break ;
}
}
}
// GenBlkBrick
for(var v6 = 0;+ 0;){
var v7 = (function (){
(this.needsUpdate) = ! 0;
(this.cacheLengths) = null;
this.getLengths();
});
}
// GenBlkBrick
while((new Date()) < ((v1) * (1000))){
(v8) = (v6) ? (v0(v4, v6)) : (('') + (Math.round(v4))).split('.');
}
(v7.prototype) = Object.create(v0.prototype);
if((v1) != ("string")){
v8.push(v1);
}
