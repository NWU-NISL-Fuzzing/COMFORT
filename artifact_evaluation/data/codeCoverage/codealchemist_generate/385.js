// GenBlkBrick
for(var v0 = 0;(v0) < (18);++v0){
var v1 = (function (){
if((this.orthoZoom) <= (0)){
(this.orthoZoom) = 0;
return;
}
var v1 = (this.width) / (this.orthoZoom);
var v2 = (this.height) / (this.orthoZoom);
(this.camera.left) = (v1) / (- 2);
(this.camera.right) = (v1) / (2);
(this.camera.top) = (v2) / (2);
(this.camera.bottom) = (v2) / (- 2);
this.camera.updateProjectionMatrix();
});
// GenBlkBrick
for(var v2 = 0;(v2) < (50);++v2){
(v2) >>= 2;
}
}
(v3) = (v2) ? (v1(v0, v2)) : (('') + (Math.round(v0))).split('.');
var v4 = (function (v1){
(v1.style.display) = 'none';
});
// GenBlkBrick
for(var v0 in v1.prototype){
(v1.prototype._onUndoCropButtonClick) = (function (){
var v1 = this.cropper, v2 = (v1.prevImages) && (v1.prevImages.length);
if(v2){
v1.undoCrop(true);
if(! v1.prevImages.length){
this.$undoCropButton.addClass('disabled');
}
}
});
}
while((++v0) < (v1)){
(v3[v0]) = 0;
}
while((--v5) >= (0)){
var v1 = (v2[++v3]) & (0x3fff);
var v4 = (v2[v3]) >> (14);
var v5 = ((v2) * (v1)) + ((v4) * (v0));
(v1) = ((((v0) * (v1)) + (((v5) & (0x3fff)) << (14))) + (v8[++v9])) + (v10);
(v10) = (((v1) >> (28)) + ((v5) >> (14))) + ((v2) * (v4));
(v8[v9]) = (v1) & (0xfffffff);
}
while((v0) < (v1)){
(v2) = v3.charCodeAt(v0++);
if((v2) === (0x25)){
(v3[v3.length]) = parseInt((v3.charAt(v0++)) + (v3.charAt(v0++)), 16);
}else {
(v3[v3.length]) = v2;
}
}
var v6 = Math.min(v5, v0);
