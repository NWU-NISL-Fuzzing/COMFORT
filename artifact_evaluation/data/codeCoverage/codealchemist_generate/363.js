var v0 = (function (){
return this['level'];
});
(v0.prototype._decRefCount) = (function (){
this._refCount--;
if((this._refCount) <= (0)){
this._scene.customRenderTargets.splice(this._scene.customRenderTargets.indexOf(this._renderTexture), 1);
}
return this._refCount;
});
// GenBlkBrick
for(var v1 = 1;(v1) <= (10);v1++){
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
}
// GenBlkBrick
for((v0) = v1;(v0) < (v2);(v0) += v3){
for(var v4 = 0;(v4) <= (v1);(v2) += v3[v4++]){
;
}
}
while((++v3) < (v1)){
(v2[v3]) = v2;
(v4[v3]) = (Math.sin(v2)) + ((((2) * (Math.random())) - (1)) * (v6));
(v2) += (v1) * ((1) + ((((2) * (Math.random())) - (1)) * (v8)));
}
while((v1--) > (0)){
v0();
}
(v5) = (v1) * ((1) - ((v2) * (v4)));
// GenBlkBrick
while((v0) && ((v0) != (v1))){
if((v1) < (20)){
break ;
}
if(v2){
}
}
