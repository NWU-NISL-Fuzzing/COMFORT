var v0 = (function (){
return ((this.min.x) = (this.min.y) = (this.min.z) = (1) / (0), (this.max.x) = (this.max.y) = (this.max.z) = (- 1) / (0), this);
});
(v1) = (v1) * (0.3);
(v0.prototype.copyFrom) = (function (v1){
(this.x) = v1.x;
(this.y) = v1.y;
(this.skew) = v1.skew;
(this.rotation) = v1.rotation;
(this.scaleX) = v1.scaleX;
(this.scaleY) = v1.scaleY;
return this;
});
for(var v2 = 0;(v2) <= (v1);v2++){
v0(v2);
}
// GenBlkBrick
while((v0) < ((v1) - (v2))){
// GenBlkBrick
for((v3) = (v4) = 0;((0) <= (v2)) ? ((v4) < (v2)) : ((v4) > (v2));(v3) = ((0) <= (v2)) ? (++v4) : (--v4)){
var v5 = ((v4) * (v4)) / (v3);
// GenBlkBrick
for(;(v5) >= (0);--v5){
function v6(v1, v2, v3){
(v5) += 1;
return (v1) > (10);
}
var v7 = (function (v1){
this.acceptRequired(v1, 'path');
this.acceptArray(v1.params);
this.acceptKey(v1, 'hash');
this.acceptKey(v1, 'program');
this.acceptKey(v1, 'inverse');
});
}
}
}
// GenBlkBrick
for(var v8 = 10;(v8) < (14);v8++){
var v9 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (function (v1){
var v2 = (((v8) + ((Math.random()) * (16))) % (16)) | (0);
(v8) = Math.floor((v8) / (16));
return ((v1) === ('x')) ? (v2) : ((v2) && ((0x7) | (0x8))).toString(16);
}));
if(v7(v9)){
continue ;
}
}
if((v9.length) > (v4)){
(v9) = v9.slice(0, v4).split(/\s/);
if((v9.length) > (1)){
v9.pop();
}
(v9) = (v9.join(' ')) + ('…');
}
(v7.prototype) = ((v6) === (null)) ? (Object.create(v6)) : (((v0.prototype) = v6.prototype, new v0()));
