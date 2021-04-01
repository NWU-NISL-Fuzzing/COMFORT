var v0 = (function (){
var v1;
return (v1) = 1;
});
(v0._getBlendMode) = (function (v1){
switch(v1.toLowerCase()){
}
});
// GenBlkBrick
for((v1) = 1;(v1) < (1e3);v1++){
(v2) = new Date();
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(15), v5 = v3(46), v6 = v3(73), v7 = v3(630), v8 = v3(29), v9 = v3(25), v10 = v3(1986);
(v1.exports) = ({create : v9((function (v1){
return v6.verify(({name : "PayPal Checkout", client : v1.client})).then((function (){
var v2 = v1.client.getConfiguration();
return (v2.gatewayConfiguration.paypalEnabled) ? ((v2.gatewayConfiguration.paypal.clientId) ? ((v5.sendEvent(v1.client, "paypal-checkout.initialized"), new v10(v1))) : (v8.reject(new v4(v7.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED)))) : (v8.reject(new v4(v7.PAYPAL_NOT_ENABLED)));
}));
})), isSupported : (function (){
return ! 0;
}), VERSION : "3.28.0"});
});
}
(v3.prototype.onSamplerSelect) = (function (v1, v2){
if((v3.kolorPicker) != (this)){
return;
}
(v3.sampling) = false;
this.canvas.colorSampler('disable');
this.setColor(v2);
(v2) = v3.getColor();
this.selectColor(v2);
});
(v0.prototype.concat) = (function (v1){
var v2 = (this.a) * (v1.a);
var v3 = 0.0;
var v4 = 0.0;
var v5 = (this.d) * (v1.d);
var v6 = ((this.tx) * (v1.a)) + (v1.tx);
var v7 = ((this.ty) * (v1.d)) + (v1.ty);
if(((this.b) !== (0.0)) || ((this.c) !== (0.0))){
(v2) += (this.b) * (v1.c);
(v3) += (this.b) * (v1.d);
(v4) += (this.c) * (v1.a);
(v5) += (this.c) * (v1.b);
}
if(((v1.b) !== (0.0)) || ((v1.c) !== (0.0))){
(v3) += (this.a) * (v1.b);
(v4) += (this.d) * (v1.c);
(v6) += (this.ty) * (v1.c);
(v7) += (this.tx) * (v1.b);
}
(this.a) = v2;
(this.b) = v3;
(this.c) = v4;
(this.d) = v5;
(this.tx) = v6;
(this.ty) = v7;
return this;
});
(v2) = new Date(v2.getUTCFullYear(), v2.getUTCMonth(), v2.getUTCDate(), v2.getUTCHours(), v2.getUTCMinutes(), v2.getUTCSeconds());
// GenBlkBrick
for(var v4 = 0;(v4) < (3);v4++){
[].reduce(v0, v4);
Object.assign(v0.prototype, ({equals : (function (v2){
return ((this.globalId) === (v2.globalId)) && ((this.revision) === (v2.revision));
}), notequals : (function (v2){
return ((this.globalId) !== (v2.globalId)) || ((this.revision) !== (v2.revision));
}), copy : (function (v2){
(this.globalId) = v2.globalId;
(this.revision) = v2.revision;
}), reset : (function (){
(this.globalId) = 0;
(this.revision) = 0;
})}));
}
(v5) = (v1) ? (v0(v4, v1)) : (('') + (Math.round(v4))).split('.');
