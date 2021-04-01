var v0 = 43;
var v1 = (function (v1, v2, v3){
var v4 = v3(2260);
(v1.exports) = (function (v1, v2){
var v3 = v1.__data__;
return (v4(v2)) ? (v3[(("string") == (typeof v2)) ? ("string") : ("hash")]) : (v3.map);
});
});
var v2 = (function (v1){
var v2 = 0;
for(var v3 = 0, v4 = v1.length;(v3) < (v4);v3++){
if((v1[v3]) != (undefined)){
(v2) += v1[v3];
}
}
return v2;
});
Array.prototype.reduce.call(v1, v2, v0);
(v1.prototype._rebuild) = (function (){
var v1 = this;
var v2;
(this.isReady) = false;
(this._cachedCoordinatesMode) = null;
(this._cachedWrapU) = null;
(this._cachedWrapV) = null;
(this._cachedAnisotropicFilteringLevel) = null;
switch(this._dataSource){
}
});
if(v1.toSource){
(v2.toSource) = (function v2(){
return v1.toSource();
});
}
var v3 = (function (v1, v2){
if((this.getClassProp('rock_type')) == ('metal_rock')){
return (((v1.class_tsid) == ('fancy_pick')) && (v1.isWorking())) ? (true) : (false);
}else {
return ((v1.is_pick) && (v1.isWorking())) ? (true) : (false);
}
});
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v3(v3)[1]) : (v3(v3)[0]));
}else {
if(v4){
return (v5) + (v3(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v3(v3)[1]) : (v3(v3)[2]));
}
}
}
}
