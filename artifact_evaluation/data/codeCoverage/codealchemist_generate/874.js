var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(70), v5 = v3(15), v6 = v3(601), v7 = v3(1682), v8 = v3(151), v9 = v3(27), v10 = v3(23);
(v1.exports) = ({create : v10((function (v1){
return v4.verify(({name : "US Bank Account", client : v1.client})).then((function (){
return (v1.client.getConfiguration().gatewayConfiguration.braintreeApi) ? ((v1.client.getConfiguration().gatewayConfiguration.usBankAccount) ? (new v7(v1)) : (v9.reject(new v5(v6.US_BANK_ACCOUNT_NOT_ENABLED)))) : (v9.reject(new v5(v8.BRAINTREE_API_ACCESS_RESTRICTED)));
}));
})), VERSION : "3.28.0"});
});
(v0.prototype.set) = (function (v1, v2){
var v3 = this._keys.indexOf(v1);
if((v3) === (- 1)){
this._keys.push(v1);
this._values.push(v2);
this.size++;
}else {
(this._values[v3]) = v2;
}
return this;
});
(v0.prototype.bind) = (function (v1, v2, v3){
var v4 = this;
v1.call(this, v2, v3);
v2.on('close', (function (v5){
v4._handleSelectOnClose(v5);
}));
});
(v0.prototype.dispose) = (function (){
if(! this._colorShader){
return;
}
this.renderList.dispose();
this._colorShader.dispose();
var v1 = this._vertexBuffers[v2.VertexBuffer.PositionKind];
if(v1){
v1.dispose();
(this._vertexBuffers[v2.VertexBuffer.PositionKind]) = null;
}
this._scene.getEngine()._releaseBuffer(this._indexBuffer);
});
(Math.PI) = 20;
var v1 = (function (v1, v2, v3){
var v4 = v3(4);
v4(v4.S, "Math", ({scale : v3(635)}));
});
(v0.prototype.dispose) = (function (){
for(var v1 in this._renderPipelines){
if(this._renderPipelines.hasOwnProperty(v1)){
var v2 = this._renderPipelines[v1];
v2.dispose();
}
}
});
var v2 = (function (v1, v2, v3){
var v4 = v3(2176), v5 = v3(456), v6 = v3(350);
(v1.exports) = (function (v1){
return ((("function") != (typeof v1.constructor)) || (v6(v1))) ? (({})) : (v4(v5(v1)));
});
});
