var v0 = (function (v1, v2, v3){
var v4 = v3(48), v5 = v3(18).Buffer;
(v1.exports) = (function (v1, v2){
return v5.from(v1.toRed(v4.mont(v2.modulus)).redPow(new v4(v2.publicExponent)).fromRed().toArray());
});
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(15), v5 = v3(46), v6 = v3(73), v7 = v3(629), v8 = v3(28), v9 = v3(25), v10 = v3(1968);
(v1.exports) = ({create : v9((function (v1){
return v6.verify(({name : "PayPal Checkout", client : v1.client})).then((function (){
var v2 = v1.client.getConfiguration();
return (v2.gatewayConfiguration.paypalEnabled) ? ((v2.gatewayConfiguration.paypal.clientId) ? ((v5.sendEvent(v1.client, "paypal-checkout.initialized"), new v10(v1))) : (v8.reject(new v4(v7.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED)))) : (v8.reject(new v4(v7.PAYPAL_NOT_ENABLED)));
}));
})), isSupported : (function (){
return ! 0;
}), VERSION : "3.28.0"});
});
// GenBlkBrick
for((v2) = (v3) = 0;((0) <= (v2)) ? ((v3) < (v2)) : ((v3) > (v2));(v2) = ((0) <= (v2)) ? (++v3) : (--v3)){
if((v3) > (v2)){
(v3) = v2;
}
if((v3) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
// GenBlkBrick
for((v4) = (v5) = 0;((0) <= (v2)) ? ((v5) < (v2)) : ((v5) > (v2));(v4) = ((0) <= (v2)) ? (++v5) : (--v5)){
{
var v6 = 0;
for(var v7 = 0;((v7) + (v5)) < (v3);v7++){
if((v4[(v7) + (v5)].area) > (v4[v7].area)){
var v5 = v4[(v7) + (v5)];
(v4[(v7) + (v5)]) = v4[v7];
(v4[v7]) = v5;
v6++;
}
}
if((v5) == (1)){
if((v6) == (0)){
break ;
}
}else {
(v5) = Math.floor(((v5) * (10)) / (13));
}
}
}
// GenBlkBrick
for(var v0 in v0){
Object.defineProperty(v0.prototype, "onBeforeRender", ({set : (function (v2){
if(this._onBeforeRenderObserver){
this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
}
(this._onBeforeRenderObserver) = this.onBeforeRenderObservable.add(v2);
}), enumerable : true, configurable : true}));
var v8 = (function (v1){
return (Object.prototype.toString.call(v1)) === ('[object Object]');
});
}
var v9 = (function (){
return this.world.emitImpactEvent;
});
for(var v10 = 0;(v10) < (v3);v10++){
(v11) = (v10) % (v3);
v4.push((v2) + (v11), (v4) + (v11));
if((v11) == (v6)){
if(((v10) == (v5)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v2, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v3) += v3;
(v2) += v3;
(v4) = 0;
}else {
if(((v10) >= (v5)) && ((v10) == (true))){
v4.push(v2, v4);
}else {
if((v10) < (v5)){
if((v10) == (true)){
v4.push(v2, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v2) += v3;
(v4) += v3;
}
}
}
}
}
(v12) = v1(v11, v5, v4);
