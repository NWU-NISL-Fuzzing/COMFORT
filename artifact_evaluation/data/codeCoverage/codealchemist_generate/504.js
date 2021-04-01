var v0 = (function (){
return ({amountOfRowsToRender : 3, startIndex : 0, startHeight : 0, endHeight : 0, showExtraRow : false});
});
var v1 = (function (v1){
var v2 = (v1) - (1);
return (1) - ((((v2) * (v2)) * (v2)) * (v2));
});
(v1.prototype) = new Array(1, 2, 3, 4);
(v0.prototype._onBeforeCreateToolbars) = (function (){
this._createHelperElements();
this._attachHelperEvents();
});
(v1.prototype.intersectsBox) = (function (v1){
return this.intersectsBoxMinMax(v1.minimum, v1.maximum);
});
function v2(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v1(v7)]) = v0(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
(v2.prototype.getStrideSize) = (function (){
return this._strideSize;
});
(v0.prototype.bind) = (function (v1, v2, v3){
var v4 = this;
v1.call(this, v2, v3);
v2.on('close', (function (v5){
v4._handleSelectOnClose(v5);
}));
});
