// GenBlkBrick
for(var v0 = 0;(v0) < (41);v0++){
var v1 = (function (v1, v2){
if((v2) !== (undefined)){
return this.multiplyQuaternions(v1, v2);
}
return this.multiplyQuaternions(this, v1);
});
}
(v1.prototype._onBeforeCreateToolbars) = (function (){
this._createHelperElements();
this._attachHelperEvents();
});
// GenBlkBrick
for(var v2 = 1;(v2) < (5);v2++){
{
(v3) = (v4) % (10);
(v2) = ((v2) * (10)) + (v3);
(v4) = Math.floor((v4) / (10));
}
{
(v4) >>>= 1;
(v3) >>>= 1;
(v2) += 1;
}
}
while((++v4) < (v0)){
(v2) = v3(v2, v4[v4], v4, v4);
}
(v5) = (v4) ? (v1(v3, v4)) : (('') + (Math.round(v3))).split('.');
(v6) = (v2) ? (v1(v0, v2)) : (('') + (Math.round(v0))).split('.');
// GenBlkBrick
while(((Date.now()) - (v3)) < (v4)){
// GenBlkBrick
for((v7) = 0;(v7) < (v0);v7++){
if((v7) === (6)){
break ;
}
{
if((v7) > (5)){
(v0) = (v0) + (v2);
break ;
}
}
}
if((v7) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v7) = Math.floor(((v7) * (10)) / (13));
}
}
{
(v4) /= v2;
(v7) /= v2;
(v0) /= v2;
}
