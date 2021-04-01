var v0 = (function (v1){
var v2 = this.tail.search(v1), v3;
switch(v2){
}
(this.pos) += v3.length;
return v3;
});
(v0.prototype.dispose) = (function (){
if(! this._webGLTexture){
return;
}
this._references--;
if((this._references) === (0)){
this._engine._releaseTexture(this);
(this._webGLTexture) = null;
}
});
(v0._SerializeValueAsString) = (function (v1){
if((typeof v1) === ("number")){
return v1.toString();
}
if((typeof v1) === ("boolean")){
return (v1) ? ("true") : ("false");
}
if((v1) instanceof (v2.Vector2)){
return ((v1.x) + (", ")) + (v1.y);
}
if((v1) instanceof (v2.Vector3)){
return ((((v1.x) + (", ")) + (v1.y)) + (", ")) + (v1.z);
}
if((v1) instanceof (v2.Color3)){
return ((((v1.r) + (", ")) + (v1.g)) + (", ")) + (v1.b);
}
if((v1) instanceof (v2.Color4)){
return ((((((v1.r) + (", ")) + (v1.g)) + (", ")) + (v1.b)) + (", ")) + (v1.a);
}
return v1;
});
var v1 = (function (v1){
return ((v1) && ((v1.constructor.prototype.isResultSet) === (true))) || (false);
});
var v2 = (function (v1, v2, v3){
var v4 = ("cldr_date_time_format_") + (v1);
var v5 = this.__mgr.localize(v4, [], v3);
if((v5) == (v4)){
(v5) = v2;
}
return v5;
});
// GenBlkBrick
for(var v0 in v1.prototype){
var v3 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2016-WS2012R2/skus/Enterprise/versions/13.0.31640?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"13.0.31640\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2012R2/Skus/Enterprise/Versions/13.0.31640\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '405', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : '60920d10-eb70-46b3-9851-7be83e0f27e5', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14877', 'x-ms-correlation-request-id' : '1f055acc-9335-46ab-8e8e-b8405af8512e', 'x-ms-routing-request-id' : 'WESTUS:20170602T151923Z:1f055acc-9335-46ab-8e8e-b8405af8512e', date : 'Fri, 02 Jun 2017 15:19:23 GMT', connection : 'close'}));
return v2;
});
}
var v4 = (function (v1, v2, v3){
var v4 = v3(2275), v5 = v3(2239), v6 = v3(468), v7 = v3(105), v8 = v3(2231);
(v1.exports) = (function (v1){
return (("function") == (typeof v1)) ? (v1) : (((null) == (v1)) ? (v6) : ((("object") == (typeof v1)) ? ((v7(v1)) ? (v5(v1[0], v1[1])) : (v4(v1))) : (v8(v1))));
});
});
var v5 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v0, save : v0, init : v1, shutdown : v1, getAuthUrl : v0, revokeToken : v0});
