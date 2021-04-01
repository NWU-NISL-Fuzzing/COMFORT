var v0 = (function (v1, v2, v3){
var v4 = v3(472), v5 = Math.pow, v7 = v5(2, - 52), v8 = v5(2, - 23), v9 = (v5(2, 127)) * ((2) - (v8)), v10 = v5(2, - 126);
(v1.exports) = (Math.fround) || ((function (v1){
var v2, v3, v5 = Math.abs(v1), v11 = v4(v1);
return ((v5) < (v10)) ? ((((v11) * (((((v5) / (v10)) / (v8)) + ((1) / (v7))) - ((1) / (v7)))) * (v10)) * (v8)) : (((((v3) = ((v2) = ((1) + ((v8) / (v7))) * (v5)) - ((v2) - (v5))) > (v9)) || ((v3) != (v3))) ? ((v11) * ((1) / (0))) : ((v11) * (v3)));
}));
});
(v0._UV6Kind) = "uv6";
// GenBlkBrick
for(var v1 = 0;(v1) < (v1);++v1){
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
for(;(v0) >= (8);((v1[(v2) + (v1)]) = (v2) & (0xff), (v1) += v3, (v2) /= 256, (v0) -= 8)){
}
}
(v4) = (v2) ? (v0(v1, v2)) : (('') + (Math.round(v1))).split('.');
v4.reduce(v0, v2);
var v5 = (Math.min(v1, v3)) / ((v2) ? (v2) : (1));
var v6 = (function (v1, v2, v3){
(v1.exports) = v3(5282)();
});
// GenBlkBrick
for(var v7 = ((v1) < (0)) ? (Math.max(0, (v3) + (v1))) : ((v1) || (0));(v7) < (v3);v7++){
(v8) = v6(v3, v7, v5);
(v6.prototype.renderAlphaTestSorted) = (function (v1){
return v6.renderSorted(v1, this._alphaTestSortCompareFn, this._scene.activeCamera.globalPosition, false);
});
}
