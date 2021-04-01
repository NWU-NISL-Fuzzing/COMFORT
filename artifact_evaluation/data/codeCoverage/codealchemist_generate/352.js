var v0 = (function (v1, v2, v3){
"use strict";
var v4 = (function (){
var v1 = this, v2 = v1.$createElement, v3 = (v1._self._c) || (v2);
return v3("div", ({class : ({invalid : v1.isInvalid})}), [], 1);
}), v5 = [], v6 = ({render : v4, staticRenderFns : v5});
(v2.a) = v6;
});
var v1 = (function (v1){
(v1.registerA) |= 0x10;
});
var v2 = (function (v1){
this.elements.set(v1);
return this;
});
// GenBlkBrick
while((v3) !== (0)){
var v4 = (function (v1, v2){
(this.adapter) = v2.fromResponseData(v1);
(this.segments) = ({});
(this.points) = ({});
this.offset(0, this.adapter.length);
});
// GenBlkBrick
while((v0) != (null)){
var v5 = (function (v1, v2, v3){
var v4, v5, v6, v7;
(v4) = ((v1[v2]) - (this.tx.xoffset)) / (this.tx.scale);
(v5) = ((v1[(v2) + (1)]) - (this.tx.yoffset)) / (this.tx.scale);
if(this.srcProjection){
(v6) = this.srcProjection.invert(v4, v5);
(v4) = v6[0];
(v5) = v6[1];
}
(v7) = this.tx.curProj.forward(v4, v5);
(v1[v2]) = ((v7[0]) * (this.tx.scale)) + (this.tx.xoffset);
(v1[(v2) + (1)]) = ((v7[1]) * (this.tx.scale)) + (this.tx.yoffset);
this.geoScale.extendDataRangeInternal(v1[v2], v1[(v2) + (1)]);
});
(v5.prototype.delete) = (function (v1, v2){
if(this.kernel){
this.events.trigger('kernel_killed.Session', ({session : this, kernel : this.kernel}));
this.kernel._kernel_dead();
}
v3.ajax(this.session_url, ({processData : false, cache : false, type : "DELETE", dataType : "json", success : this._on_success(v1), error : this._on_error(v2)}));
});
}
}
Array.prototype.reduce.call(v4, v1, v3);
(v1.prototype) = ((v5) === (null)) ? (Object.create(v5)) : (((v0.prototype) = v5.prototype, new v0()));
var v6 = (function (v1, v2, v3){
"use strict";
v3(65)("sup", (function (v1){
return (function (){
return v1(this, "sup", "", "");
});
}));
});
var v7 = Array.prototype.filter.call(v1, v0);
