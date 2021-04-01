var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5), v5 = v3(356)(! 1);
v4(v4.P, "String", ({codePointAt : (function (v1){
return v5(this, v1);
})}));
});
var v1 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v3 = ({current : (function (v1){
return v2.cancelAnimationFrame(v1);
}), inject : (function (v1){
(v3.current) = v1;
})});
(v1.exports) = v3;
}).call(v2, v3(11));
});
(v0.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v1(v4.directions[0], v4, v5)){
return false;
}
if(! v1(v4.directions[1], v4, v5)){
return false;
}
if(! v1(v4.directions[2], v4, v5)){
return false;
}
if(! v1(v5.directions[0], v4, v5)){
return false;
}
if(! v1(v5.directions[1], v4, v5)){
return false;
}
if(! v1(v5.directions[2], v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v1(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
(v0.prototype.concat) = (function (v1){
if((v1.length) === (0)){
return;
}
if(((this.length) + (v1.length)) > (this.data.length)){
(this.data.length) = ((this.length) + (v1.length)) * (2);
}
for(var v2 = 0;(v2) < (v1.length);v2++){
(this.data[this.length++]) = (v1.data) || (v1)[v2];
}
});
// GenBlkBrick
for(var v2 = 0;(v2) < (500000);++v2){
var v3 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/1ad6a362-5f45-4fa5-b540-f010a0c7f8c0?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : 'f79c4ad0-26c0-4ccd-be84-28e0ab7c962f', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14999', 'x-ms-correlation-request-id' : '5cce1e4e-6e79-4f10-9d63-6eecb63b7d2e', 'x-ms-routing-request-id' : 'WESTEUROPE:20171003T074739Z:5cce1e4e-6e79-4f10-9d63-6eecb63b7d2e', date : 'Tue, 03 Oct 2017 07:47:38 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
for(var v4 = [], v5 = 0;(v5) < (256);v5++){
// GenBlkBrick
while((v0) && (v1)){
var v6 = (function (v1){
if(v1.trust){
return v1.trust;
}
return 'TRUST_ALL_CERTIFICATES';
});
}
v4.reduce(v6, v5);
}
}
var v7 = (function (v1, v2, v3){
var v4 = v3(4810), v5 = v3(309), v6 = Object.prototype, v8 = v6.hasOwnProperty, v9 = v6.propertyIsEnumerable, v10 = (v4((function (){
return arguments;
})())) ? (v4) : ((function (v1){
return ((v5(v1)) && (v8.call(v1, "callee"))) && (! v9.call(v1, "callee"));
}));
(v1.exports) = v10;
});
var v8 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("05573db5ee01f834ae3e2b780bd77bfe.svg");
});
// GenBlkBrick
for(var v9 = 0;(v9) < (100);++v9){
var v10 = ((v1) | (0)) < ((v9) | (0));
}
