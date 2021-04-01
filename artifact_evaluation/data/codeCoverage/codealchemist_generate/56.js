var v0 = (function (v1, v2, v3){
"use strict";
(v1.exports) = v3(5222);
});
(v0.Transform) = (function (v1, v2){
var v3 = new v0(new v4.Vector3(0, 0, 0), new v4.Vector3(0, 0, 0));
v0.TransformToRef(v1, v2, v3);
return v3;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(26), v5 = v3(91), v6 = v3(34)("species");
(v1.exports) = (function (v1, v2){
var v3, v7 = v4(v1).constructor;
return (((void 0) === (v7)) || ((void 0) == ((v3) = v4(v7)[v6]))) ? (v2) : (v5(v3));
});
});
var v2 = (function (v1, v2, v3){
var v4 = v3(4722), v5 = v3(4728);
(v1.exports) = (function (v1, v2){
var v3 = v5(v1, v2);
return (v4(v3)) ? (v3) : (void 0);
});
});
Object.defineProperty(v2, "MatricesWeightsKind", ({get : (function (){
return v2._MatricesWeightsKind;
}), enumerable : true, configurable : true}));
(v1.prototype._createIndexBuffer) = (function (){
var v1 = this._scene.getEngine();
(this._indexBuffer) = v1.createIndexBuffer([]);
});
var v3 = (function (v1){
var v2 = this.addPoint(v1), v3 = this.canvas.contextTop;
this._saveAndTransform(v3);
this.dot(v3, v2);
v3.restore();
});
var v4 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v0, save : v0, init : v3, shutdown : v3, getAuthUrl : v0, revokeToken : v0});
