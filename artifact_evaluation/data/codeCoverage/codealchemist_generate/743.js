var v0 = (function (v1){
delete this._images[v1];
});
var v1 = (function (v1){
(this._mask) = v1;
});
var v2 = (function (v1, v2, v3){
var v4 = v0(v1, v2);
var v6 = v0(v1, v3);
return v1(v4.min, v4.max, v6.min, v6.max);
});
function v3(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v1(v7)]) = v2(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
var v4 = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
(v2.prototype._getCropCallback) = (function (v1){
var v2 = this;
return (function (v3){
if((v1) && ((typeof v1) === ('function'))){
v1(v3);
}
v2.hideCropper();
v2.hideCropToolbar();
v2.cropper.reset();
});
});
// GenBlkBrick
for(var v5 = 0;(v5) < (10);v5++){
(v2.prototype) = Object.create(v1.prototype);
}
for(var v6 in v4){
if((v6) === ("prop")){
(v7) = true;
}
}
