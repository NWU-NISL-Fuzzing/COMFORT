// GenBlkBrick
while((v0) > (v1)){
var v0 = (function (v1, v2, v3){
var v4 = v3(392), v5 = v3(2283), v6 = v3(2235), v7 = v3(446);
(v1.exports) = (function (v1, v2){
if((null) == (v1)){
return ({});
}
var v3 = v4(v7(v1), (function (v1){
return [];
}));
return ((v2) = v5(v2), v6(v1, v3, (function (v1, v3){
return v2(v1, v3[0]);
})));
});
});
}
var v1 = (function (v1, v2, v3){
var v4 = v3(229), v5 = v3(99)("iterator"), v6 = Array.prototype;
(v1.exports) = (function (v1){
return ((void 0) !== (v1)) && (((v4.Array) === (v1)) || ((v6[v5]) === (v1)));
});
});
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v0(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v1(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v3 = (function (v1){
return this._highcharts[v1];
});
}
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v3(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v3(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
(v3.prototype.renderOpaqueSorted) = (function (v1){
return v3.renderSorted(v1, this._opaqueSortCompareFn, this._scene.activeCamera, false);
});
var v5 = (function (v1){
v1.ok(! this.range.contains(5));
v1.done();
});
function v6(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v4(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v4(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
