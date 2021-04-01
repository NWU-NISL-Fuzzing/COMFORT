var v0 = (function (v1){
(this.__sequence) = (this.__sequence) + (1);
return ((("/* ") + (this.__sequence)) + (" */  ")) + (v1);
});
(v0.prototype.isUpdatable) = (function (){
return this._updatable;
});
(v0.prototype.updateSize) = (function (v1, v2, v3){
if((v3) === (void 0)){
(v3) = 1;
}
(this.width) = v1;
(this.height) = v2;
(this.depth) = v3;
(this.baseWidth) = v1;
(this.baseHeight) = v2;
(this.baseDepth) = v3;
(this._size) = ((v1) * (v2)) * (v3);
});
// GenBlkBrick
for(((v1) = 0, (v1) = v2);(v1) < (v1);++v1){
if((v0) && ((v0.length) > (0))){
for(((v1) = 0, (v2) = v0.length);(v1) < (v2);v1++){
(v1) += ((v0[v1].width) * (v0[v1].scaleX)) + (v4);
}
var v5 = (- v1) / (2.0);
for(((v1) = 0, (v2) = v0.length);(v1) < (v2);v1++){
(v6) = v0[v1];
(v7) = v6.scaleX;
(v8) = v0[v1].width;
v6.setPosition((v5) + (((v8) * (v7)) / (2)), 0);
(v5) += ((v8) * (v7)) + (v4);
}
}
var v2 = (function (v1){
this._saveValueChangeEvent(v1.event);
this.option("value", null);
this.option("opened", false);
});
}
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1927), v5 = v3(1924).isHTTPS, v6 = v3(72), v7 = v3(15), v8 = v3(47), v9 = v3(612), v10 = v3(28), v11 = v3(25);
(v1.exports) = ({create : v11((function (v1){
return v6.verify(({name : "3D Secure", client : v1.client})).then((function (){
var v2, v3 = v1.client.getConfiguration();
return ((v3.gatewayConfiguration.threeDSecureEnabled) || ((v2) = v9.THREEDS_NOT_ENABLED), (("TOKENIZATION_KEY") === (v3.authorizationType)) && ((v2) = v9.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY), ((("production") === (v3.gatewayConfiguration.environment)) && (! v5())) && ((v2) = v9.THREEDS_HTTPS_REQUIRED), (v2) ? (v10.reject(new v7(v2))) : ((v8.sendEvent(v1.client, "threedsecure.initialized"), new v4(v1))));
}));
})), VERSION : "3.28.0"});
});
(v3.DURATION) = "duration";
var v4 = (function v4(v1){
if((! v1) || ((v3.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v0.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v0.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v0.call(v1, v6));
});
if((v1) < (- 1)){
(v1) += 2.0;
}
