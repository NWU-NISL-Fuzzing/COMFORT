var v0 = (function (v1, v2, v3){
var v4 = v3(5), v5 = Math.imul;
v4((v4.S) + ((v4.F) * (v3(26)((function (){
return ((- 5) != (v5(4294967295, 5))) || ((2) != (v5.length));
})))), "Math", ({imul : (function (v1, v2){
var v3 = + v1, v4 = + v2, v5 = (65535) & (v3), v7 = (65535) & (v4);
return (0) | (((v5) * (v7)) + ((((((65535) & ((v3) >>> (16))) * (v7)) + ((v5) * ((65535) & ((v4) >>> (16))))) << (16)) >>> (0)));
})}));
});
(v0.prototype.add) = (function (v1){
(this.x) += v1.x;
(this.y) += v1.y;
(this.skew) += v1.skew;
(this.rotation) += v1.rotation;
(this.scaleX) *= v1.scaleX;
(this.scaleY) *= v1.scaleY;
return this;
});
(v0.matchParser) = ({});
var v1 = (function (v1, v2, v3){
var v4 = v1();
if(v5.Tags){
v5.Tags.AddTagsTo(v4, v2.tags);
}
var v6 = v0(v4);
for(var v8 in v6){
var v9 = v6[v8];
var v10 = v2[v8];
var v11 = v9.type;
if(((v10) !== (undefined)) && ((v10) !== (null))){
switch(v11){
}
}
}
return v4;
});
var v2 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2014SP1-WS2012R2/skus?api-version=2017-03-30').reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Enterprise\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2/Skus/Enterprise\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Enterprise-Optimized-for-DW\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2/Skus/Enterprise-Optimized-for-DW\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Enterprise-Optimized-for-OLTP\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2/Skus/Enterprise-Optimized-for-OLTP\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Express\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2/Skus/Express\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Standard\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2/Skus/Standard\"\r\n  },\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"Web\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2/Skus/Web\"\r\n  }\r\n]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1755', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : '9c0aa358-90c7-4954-b188-19d51fae46b8', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14916', 'x-ms-correlation-request-id' : '6e5ed34d-4562-4bed-8d5a-a6e7c8abd395', 'x-ms-routing-request-id' : 'WESTUS:20170602T151906Z:6e5ed34d-4562-4bed-8d5a-a6e7c8abd395', date : 'Fri, 02 Jun 2017 15:19:06 GMT', connection : 'close'}));
return v2;
});
(v0.BONE_POSE) = "bonePose";
// GenBlkBrick
while((v0) >= (0x20)){
(v2.prototype.copyFrom) = (function (v1){
(this.alphaMultiplier) = v1.alphaMultiplier;
(this.redMultiplier) = v1.redMultiplier;
(this.greenMultiplier) = v1.greenMultiplier;
(this.blueMultiplier) = v1.blueMultiplier;
(this.alphaOffset) = v1.alphaOffset;
(this.redOffset) = v1.redOffset;
(this.greenOffset) = v1.greenOffset;
(this.blueOffset) = v1.blueOffset;
});
var v3 = (function (v1){
if(! v1){
return;
}
(this.color) = v1;
this.onValueChanged();
});
}
// GenBlkBrick
for(;(v0) < (10);){
var v4 = (function (v1, v2, v3){
var v4;
(v4) = [];
for(var v5 = 0;(v5) < (v3);v5++){
var v6 = v1.slice((v2) + ((v5) - (1)), (v2) + (v5));
v4.push(v6);
(v3) -= v2(v6);
}
return [];
});
}
