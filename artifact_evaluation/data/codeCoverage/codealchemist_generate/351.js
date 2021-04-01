var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2016-WS2012R2-BYOL/skus/Enterprise/versions/13.0.16021?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"13.0.16021\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2012R2-BYOL/Skus/Enterprise/Versions/13.0.16021\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '410', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'fa7d9615-cb28-4615-afcc-3d70579ca598', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14880', 'x-ms-correlation-request-id' : '50b6930c-e0f0-49f7-9529-57cb23bcffbb', 'x-ms-routing-request-id' : 'WESTUS:20170602T151923Z:50b6930c-e0f0-49f7-9529-57cb23bcffbb', date : 'Fri, 02 Jun 2017 15:19:23 GMT', connection : 'close'}));
return v2;
});
(v0.prototype._getEffectiveTarget) = (function (v1, v2){
return this._actionManager._getEffectiveTarget(v1, v2);
});
var v1 = (function (v1, v2, v3){
var v4 = v1("./$.assert").fn;
(v2.exports) = (function (v5, v6, v7){
v4(v5);
if((~ v7) && ((v6) === (undefined))){
return v5;
}
switch(v7){
}
return (function (){
return v5.apply(v6, arguments);
});
});
});
(v0.ALPHA_OFFSET) = "aO";
(v1.default) = v0;
(v0.prototype.toString) = (function (){
var v1 = this.o;
var v2 = this.names.map(v3);
return (("{\n  ") + (v2.join(",\n  "))) + ("\n}");
function v3(v4){
var v5 = "", v6 = Object.getOwnPropertyDescriptor(v1, v4);
if(! v6){
return (("nonexistent ") + (v4)) + (": undefined");
}
if(! v6.configurable){
(v5) += "permanent ";
}
if(((v6.get) && (! v6.set)) || (! v6.writable)){
(v5) += "readonly ";
}
if(! v6.enumerable){
(v5) += "hidden ";
}
if((v6.get) || (v6.set)){
(v5) += ("accessor ") + (v4);
}else {
(v5) += ((v4) + (": ")) + (((typeof v6.value) === ("function")) ? ("function") : (v6.value));
}
return v5;
}
});
var v2 = (function (v1, v2, v3){
var v4 = v3(1267);
(v1.exports) = (function (v1, v2){
return new v4(v1)(v2);
});
});
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
