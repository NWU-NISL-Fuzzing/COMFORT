var v0 = (function (v1, v2){
if((v1.length) > (v2.length)){
var v3 = v1;
(v1) = v2;
(v2) = v3;
}
if(((v2.length) - (v1.length)) > (1)){
return false;
}
var v4 = 0;
var v5 = 0;
var v6 = 0;
while(((v4) < (v1.length)) && ((v5) < (v2.length))){
if((v1[v4]) !== (v2[v5])){
if((v6) !== (0)){
return false;
}
v6++;
if((v2.length) !== (v1.length)){
v4--;
}
}
v4++;
v5++;
}
return ((v6) === (1)) || (((v2.length) !== (v1.length)) && (((v2.length) - (v5)) === (1)));
});
Object.defineProperty(v0.prototype, "isSupported", ({get : (function (){
return this._multiRenderTarget.isSupported;
}), enumerable : true, configurable : true}));
var v1 = [].filter(v0, 101);
for(var v2 = 1;(v2) <= (v1);v2++){
(v1[v2]) = (((v1[v2]) || (0)) + (v1[(v2) & ((v2) - (1))])) + (1);
}
[].reduce(v0, v2);
// GenBlkBrick
for((v3) = (v4) = 0;((0) <= (v2)) ? ((v4) < (v2)) : ((v4) > (v2));(v3) = ((0) <= (v2)) ? (++v4) : (--v4)){
if((v4) > (5)){
(v3) = (v3) + (v2);
break ;
}
}
// GenBlkBrick
for(var v0 in v1){
// GenBlkBrick
for(((v0) = v1, (v2) = v3);(v0) < (v2);(v0) += v4){
var v5 = (function (v1){
(this.command) = 0x09;
});
(v5.prototype._operate) = (function (v1, v2, v3, v4){
switch(v2){
}
});
}
var v6 = (function (v1, v2, v3){
var v4 = v3(677), v5 = v3(1871), v6 = v3(204);
(v1.exports) = (function (v1){
return (v6(v1)) ? (v4(v1, ! 0)) : (v5(v1));
});
});
}
{
(v7) = (v4) / (v3);
(v12) = v0(v5, v6, v7);
(v13) = v0(v8, v9, v7);
(v8) = v0(v6, v11, v7);
(v9) = v0(v9, v13, v7);
(v10) = v0(v12, v8, v7);
(v11) = v0(v13, v9, v7);
v1.push(v10, v11);
}
