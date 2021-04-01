var v0 = (function (v1){
(this.lastPixel_) = v1.pixel;
this.handlePointerAtPixel_(v1.pixel, v1.map);
});
var v1 = (function (v1){
if(! this.container.owner){
return true;
}
return ((this.container.owner.tsid) == (v1.tsid)) ? (true) : (false);
});
Object.defineProperty(v0.prototype, "isLocked", ({get : (function (){
return this._isLocked;
}), set : (function (v2){
(this._isLocked) = v2;
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v0 in v1.prototype){
// GenBlkBrick
for(;((v0) + (v1)) < (v2);(v0) += v1){
var v2 = (function (v1, v2, v3){
var v4 = v3(312);
(v1.exports) = (function (v1, v2){
var v3 = v4(this, v1), v5 = v3.size;
return (v3.set(v1, v2), (this.size) += ((v3.size) == (v5)) ? (0) : (1), this);
});
});
var v3 = (function (v1){
return (((v1) /= 255) <= (0.04045)) ? ((v1) / (12.92)) : (Math.pow(((v1) + (0.055)) / (1.055), 2.4));
});
}
}
(v2.ALPHA_OFFSET) = "aO";
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v3(v3)[1]) : (v3(v3)[0]));
}else {
if(v4){
return (v5) + (v3(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v3(v3)[1]) : (v3(v3)[2]));
}
}
}
}
// GenBlkBrick
for((v5) = 0;(v5) < (16);(v5) = (v5) + (1)){
if(v5){
(v5) = false;
}
}
Array.prototype.reduce.call(v1, v0, v5);
