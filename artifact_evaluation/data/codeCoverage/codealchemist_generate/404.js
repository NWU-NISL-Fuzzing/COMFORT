var v0 = (function (v1){
(v1) = (v1) >>> (0);
for(var v2 = 0;(v2) < (32);v2++){
if((v1) & ((1) << ((31) - (v2)))){
return v2;
}
}
return 32;
});
function v1(v1, v2, v3, v4){
(v5) = true;
return (v1) === (v0);
}
(v0.prototype._createIndexBuffer) = (function (){
var v1 = this._scene.getEngine();
(this._indexBuffer) = v1.createIndexBuffer([]);
});
var v2 = (function (v1){
this._setProperty('-webkit-column-break-before', v1);
});
(v2.default) = v1;
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
var v4 = (function (v1){
if((v1.slice(- 1)) == ('/')){
(v1) = v1.substring(0, (v1.length) - (1));
}
var v2 = v1.lastIndexOf('/');
return ((v2) > (0)) ? (v1.substring(0, v2)) : ('');
});
(v3.PATH_CONSTRAINT) = "path";
