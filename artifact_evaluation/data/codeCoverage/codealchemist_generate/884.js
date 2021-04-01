var v0 = (function (v1, v2){
'use strict';
var v3 = [];
(v1.exports) = v3;
});
(v0.prototype.serialize) = (function (v1){
});
var v1 = (function (){
this.base(arguments);
if(this.input){
this.input.destroy();
}
if(this.ref){
this.ref.destroy();
}
if(this._container){
this._container.destroy();
(this._container) = null;
}
this.flush();
});
(v0.prototype.renderTransparentSorted) = (function (v1){
return v0.renderSorted(v1, this._transparentSortCompareFn, this._scene.activeCamera.globalPosition, true);
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
v0(/$/, "s");
(v1.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v2(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
(v2.prototype) = v1.prototype;
