var v0 = (function (){
if(this.didShowInDocument){
this.didShowInDocument();
}
});
var v1 = (function (v1){
return (function (){
return v0.today().set(({month : v1, day : 1}));
});
});
var v2 = (function (v1){
return ((((this.minX) <= (v1.maxX)) && ((this.maxX) >= (v1.minX))) && ((this.minY) <= (v1.maxY))) && ((this.maxY) >= (v1.minY));
});
(v3) = (typeof v0.prototype.constructor) === ("function");
// GenBlkBrick
for(var v4 = 0;(v4) < (5);++v4){
(v5) = + ~ ~ v4;
var v6 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5), v5 = v3(517), v6 = v3(267), v7 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(v6);
v4((v4.P) + ((v4.F) * (v7)), "String", ({padStart : (function (v1){
return v5(this, v1, ((arguments.length) > (1)) ? (arguments[1]) : (void 0), ! 0);
})}));
});
}
(v0.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v1(v4.directions[0], v4, v5)){
return false;
}
if(! v1(v4.directions[1], v4, v5)){
return false;
}
if(! v1(v4.directions[2], v4, v5)){
return false;
}
if(! v1(v5.directions[0], v4, v5)){
return false;
}
if(! v1(v5.directions[1], v4, v5)){
return false;
}
if(! v1(v5.directions[2], v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
// GenBlkBrick
for((v7) = 0;(v7) < (v5);(v7) += 1){
var v8 = (function (){
var v1 = this.getUrl("qx/test/xmlhttp/sample.txt"), v2 = this.res;
v2.map("get", "GET", v1);
v2.addListener("getSuccess", (function (v3){
this.resume((function (){
this.assertEquals("SAMPLE", v3.response);
}), this);
}), this);
v2.get();
this.wait();
});
}
if(v3){
v7++;
}else {
v7--;
}
