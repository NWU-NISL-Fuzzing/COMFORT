var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(65), v5 = v3(14), v6 = v3(1462), v7 = v3(1460), v8 = v3(26), v9 = v3(24);
(v1.exports) = ({create : v9((function (v1){
return v4.verify(({name : "Google Pay", client : v1.client})).then((function (){
return (v1.client.getConfiguration().gatewayConfiguration.androidPay) ? (new v7(v1).initialize()) : (v8.reject(new v5(({type : v5.types.MERCHANT, code : "GOOGLE_PAYMENT_NOT_ENABLED", message : "Google Pay is not enabled for this merchant."}))));
}));
})), isSupported : (function (){
return Boolean((v6.supportsPaymentRequestApi()) && (v6.isAndroid()));
}), VERSION : "3.28.0"});
});
(v0.prototype.detachCamerasFromRenderPipeline) = (function (v1, v2){
var v3 = this._renderPipelines[v1];
if(! v3){
return;
}
v3._detachCameras(v2);
});
(v0.prototype.dispatch) = (function (v1){
var v2 = v1.getMaterial();
var v3 = v1.getMesh();
if(((v2.needAlphaBlending()) || ((v3.visibility) < (1.0))) || (v3.hasVertexAlpha)){
this._transparentSubMeshes.push(v1);
}else {
if(v2.needAlphaTesting()){
this._alphaTestSubMeshes.push(v1);
}else {
this._opaqueSubMeshes.push(v1);
}
}
});
Object.defineProperty(v0, "FILTER_BLURVARIANCESHADOWMAP", ({get : (function (){
return v0._FILTER_BLURVARIANCESHADOWMAP;
}), enumerable : true, configurable : true}));
var v1 = (function (v1, v2){
var v3 = new Date(), v5;
(v5) = v1.call(v3);
v2.not(v3, v5, "Different objects");
v2.ok((v5) instanceof (Date), "Instance of Date");
v2(v3.getTime(), v5.getTime(), "Same time");
});
function v2(v1, v2, v3, v4, v5){
v1(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v0));
}
var v3 = (function (v1, v2, v3){
var v4 = v3(767), v5 = v3(5185), v6 = v3(5183);
(v1.exports) = (function (v1, v2){
return v6(v5(v1, v2, v4), (v1) + (""));
});
});
Object.defineProperty(Object.prototype, "constructor", ({get : v2, set : v0, configurable : true}));
