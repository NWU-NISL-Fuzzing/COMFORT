var v0 = (function (v1){
return (this.combineParametric) && (this.viewer.hasParametricPair(v1));
});
(v0.prototype._removeHelperElements) = (function (){
if((this.drawerInstance.$popupWrapper) && (this.drawerInstance.$popupWrapper.length)){
this.drawerInstance.$popupWrapper.remove();
}
var v1 = this.drawerInstance.$canvasEditContainer.find(('.') + (this.popupClass));
if((v1) && (v1.length)){
v1.remove();
}
(this.drawerInstance.$popupWrapper) = undefined;
(this.$popup) = undefined;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(5195), v5 = v3(153), v6 = Object.prototype, v8 = v6.hasOwnProperty, v9 = v6.propertyIsEnumerable, v10 = (v4((function (){
return arguments;
})())) ? (v4) : ((function (v1){
return ((v5(v1)) && (v8.call(v1, "callee"))) && (! v9.call(v1, "callee"));
}));
(v1.exports) = v10;
});
var v2 = (function (v1, v2, v3){
var v4 = v3(3), v5 = v3(525), v6 = Math.abs;
v4(v4.S, "Number", ({isSafeInteger : (function (v1){
return (v5(v1)) && ((v6(v1)) <= (9007199254740991));
})}));
});
(v2.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v0.prototype) = v1.prototype, new v0()));
Object.defineProperty(v0.prototype, "cubeTexture", ({get : (function (){
return this._renderTargetTexture;
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v0 in v2.prototype){
// GenBlkBrick
while(false){
var v3 = (function (v1){
return (((typeof v1) === ('string')) && ((v1.length) === (1))) && (/^\w+$/.test(v1));
});
var v4 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/e3fbc705-9213-44a3-bfe5-49483f6568ac?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : 'af70a7f0-ea71-49d8-be77-832ca2ed2d20', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14992', 'x-ms-correlation-request-id' : '2fb6a926-f972-420f-bd2b-17f75f59ebdd', 'x-ms-routing-request-id' : 'WESTEUROPE:20171002T203442Z:2fb6a926-f972-420f-bd2b-17f75f59ebdd', date : 'Mon, 02 Oct 2017 20:34:42 GMT', connection : 'close'}));
return v2;
});
}
var v5 = (function (v1, v2, v3){
var v4 = v3(263).Symbol;
(v1.exports) = v4;
});
}
function v6(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v4(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
