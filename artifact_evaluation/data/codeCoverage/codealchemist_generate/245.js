var v0 = (function (v1, v2, v3){
var v4 = v3(442), v5 = v3(290);
(v1.exports) = (function (v1, v2, v3){
var v6 = v2(v1);
return (v5(v1)) ? (v6) : (v4(v6, v3(v1)));
});
});
(v0.prototype.isInFrustum) = (function (v1){
for(var v2 = 0;(v2) < (6);v2++){
if((v1[v2].dotCoordinate(this.centerWorld)) <= (- this.radiusWorld)){
return false;
}
}
return true;
});
(v0.prototype.show) = (function (v1, v2){
if(! this._show){
(this._renderFunction) = this._render.bind(this);
(this._show) = true;
(this._scene) = v1;
(this._renderPoints) = [];
(this._renderLine) = v3.Mesh.CreateLines("ray", this._renderPoints, v1, true);
this._scene.registerBeforeRender(this._renderFunction);
}
if(v2){
this._renderLine.color.copyFrom(v2);
}
});
var v1 = (function (v1){
var v2 = v1.getStyles([]);
if((v2.transitionProperty.indexOf("none")) == (- 1)){
v1.setProperty("__qxtransition", v2);
v1.setStyle("transition", "none");
}
});
// GenBlkBrick
while((v2) != (0)){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
// GenBlkBrick
for(var v5 = 1;(v5) <= (20);v5++){
if((v2) > (5)){
(v5) = (v5) + (v2);
break ;
}
}
var v6 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1923), v5 = v3(1920).isHTTPS, v6 = v3(69), v7 = v3(16), v8 = v3(49), v9 = v3(629), v10 = v3(27), v11 = v3(25);
(v1.exports) = ({create : v11((function (v1){
return v6.verify(({name : "3D Secure", client : v1.client})).then((function (){
var v2, v3 = v1.client.getConfiguration();
return ((v3.gatewayConfiguration.threeDSecureEnabled) || ((v2) = v9.THREEDS_NOT_ENABLED), (("TOKENIZATION_KEY") === (v3.authorizationType)) && ((v2) = v9.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY), ((("production") === (v3.gatewayConfiguration.environment)) && (! v5())) && ((v2) = v9.THREEDS_HTTPS_REQUIRED), (v2) ? (v10.reject(new v7(v2))) : ((v8.sendEvent(v1.client, "threedsecure.initialized"), new v4(v1))));
}));
})), VERSION : "3.28.0"});
});
[].reduce(v1, v3);
