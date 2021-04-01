var v0 = (function (){
var v1 = this;
var v2 = v1.drag;
return (v2) && (v2.get('dragging'));
});
var v1 = (function (v1){
v1.getSessionSingleton.expect('dbClientDone').return();
try{
v1.sut();
}catch(v2){
(v1.didThrow) = true;
}
});
(v1.prototype.apply) = (function (){
if(! this._effect.isReady()){
return null;
}
this._engine.enableEffect(this._effect);
this._engine.setState(false);
this._engine.setAlphaMode(v1.Engine.ALPHA_DISABLE);
this._engine.setDepthBuffer(false);
this._engine.setDepthWrite(false);
this._effect._bindTexture("textureSampler", this._textures.data[this._currentRenderTextureInd]);
this._effect.setVector2("scale", this._scaleRatio);
this.onApplyObservable.notifyObservers(this._effect);
return this._effect;
});
var v2 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"dfe0f633-ce19-4bd3-bea6-684df62c2c74\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ecde1d8d-b8b3-49f5-9fda-3139885f730d\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": [],\r\n    \"enableDdosProtection\": false,\r\n    \"enableVmProtection\": false\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '753', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"dfe0f633-ce19-4bd3-bea6-684df62c2c74"', 'x-ms-request-id' : '98e1aeac-7c96-4ebb-a964-503d9b395819', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14999', 'x-ms-correlation-request-id' : 'e5ef00eb-1b6e-4029-a3e1-15a65d5db860', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T082921Z:e5ef00eb-1b6e-4029-a3e1-15a65d5db860', date : 'Wed, 27 Sep 2017 08:29:21 GMT', connection : 'close'}));
return v2;
});
var v3 = (function (v1){
return (((v1.type) === ('ExpressionStatement')) && ((v1.expression.type) === ('Literal'))) && ((v1.expression.value) === (this.splitPoint));
});
(function (){
v0(/$/, "s");
v0(/s$/i, "s");
v0(/(ax|test)is$/i, "$1es");
v0(/(octop|vir)us$/i, "$1i");
v0(/(octop|vir)i$/i, "$1i");
v0(/(alias|status)$/i, "$1es");
v0(/(bu)s$/i, "$1ses");
v0(/(buffal|tomat)o$/i, "$1oes");
v0(/([ti])a$/i, "$1a");
v0(/([ti])um$/i, "$1a");
v0(/sis$/i, "ses");
v0(/ses$/i, "ses");
v0(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v0(/(hive)$/i, "$1s");
v0(/([^aeiouy]|qu)y$/i, "$1ies");
v0(/(x|ch|ss|sh)$/i, "$1es");
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v0(/([m|l])ouse$/i, "$1ice");
v0(/([m|l])ice$/i, "$1ice");
v0(/^(ox)$/i, "$1en");
v0(/^(ox)en$/i, "$1en");
v0(/(quiz)$/i, "$1zes");
v1(/s$/i, "");
v1(/ss$/i, "ss");
v1(/(n)ews$/i, "$1ews");
v1(/([ti])um$/i, "$1um");
v1(/([ti])a$/i, "$1um");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v1(/(^analy)ses$/i, "$1sis");
v1(/(^analy)sis$/i, "$1sis");
v1(/([^f])ves$/i, "$1fe");
v1(/(hive)s$/i, "$1");
v1(/(tive)s$/i, "$1");
v1(/([lr])ves$/i, "$1f");
v1(/([^aeiouy]|qu)ies$/i, "$1y");
v1(/(s)eries$/i, "$1eries");
v1(/(m)ovies$/i, "$1ovie");
v1(/(x|ch|ss|sh)es$/i, "$1");
v1(/([m|l])ice$/i, "$1ouse");
v1(/([m|l])ouse$/i, "$1ouse");
v1(/(bus)es$/i, "$1");
v1(/(bus)$/i, "$1");
v1(/(o)es$/i, "$1");
v1(/(shoe)s$/i, "$1");
v1(/(cris|ax|test)es$/i, "$1is");
v1(/(cris|ax|test)is$/i, "$1is");
v1(/(octop|vir)i$/i, "$1us");
v1(/(octop|vir)us$/i, "$1us");
v1(/(alias|status)es$/i, "$1");
v1(/(alias|status)$/i, "$1");
v1(/^(ox)en/i, "$1");
v1(/(vert|ind)ices$/i, "$1ex");
v1(/(matr)ices$/i, "$1ix");
v1(/(quiz)zes$/i, "$1");
v1(/(database)s$/i, "$1");
v3("person", "people");
v3("man", "men");
v3("child", "children");
v3("sex", "sexes");
v3("move", "moves");
v3("cow", "kine");
v2("equipment");
v2("information");
v2("rice");
v2("money");
v2("species");
v2("series");
v2("fish");
v2("sheep");
v2("jeans");
})();
var v4 = (function (v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v2[v3];
v1.lineTo(v4.x, v4.y);
}
});
(v1.prototype._removeElements) = (function (){
if(this.$cropperContainer){
this.$cropperContainer.remove();
delete this.$cropperContainer;
}
if(this.drawer.$cropperContainer){
delete this.drawer.$cropperContainer;
}
if(this.cropper){
this.cropper._destroy();
delete this.cropper;
}
});
