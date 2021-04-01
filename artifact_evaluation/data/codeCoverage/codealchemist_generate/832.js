// GenBlkBrick
for((v0) = 0;(v0) < ((v1) + (1));v0++){
if((v0) === (6)){
break ;
}
}
var v1 = (function (){
return ({restrict : 'EA', require : [], controller : 'UibTimepickerController', controllerAs : 'timepicker', replace : true, scope : ({}), templateUrl : (function (v1, v2){
return (v2.templateUrl) || ('template/timepicker/timepicker.html');
}), link : (function (v3, v1, v2, v4){
var v5 = v4[0], v6 = v4[1];
if(v6){
v5.init(v6, v1.find('input'));
}
})});
});
(v1.BindClipPlane) = (function (v1, v2){
if(v2.clipPlane){
var v3 = v2.clipPlane;
v1.setFloat4("vClipPlane", v3.normal.x, v3.normal.y, v3.normal.z, v3.d);
}
});
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2012SP3-WS2012R2-BYOL/skus/Enterprise/versions/11.3.65235?api-version=2017-03-30').reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"name\": \"11.3.65235\",\r\n  \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP3-WS2012R2-BYOL/Skus/Enterprise/Versions/11.3.65235\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '413', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : '9800865a-8aea-48cc-89c1-d6f1ff906858', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14869', 'x-ms-correlation-request-id' : '6f74228a-e495-485b-af06-0bb880e82cce', 'x-ms-routing-request-id' : 'WESTUS:20170602T151923Z:6f74228a-e495-485b-af06-0bb880e82cce', date : 'Fri, 02 Jun 2017 15:19:23 GMT', connection : 'close'}));
return v2;
});
var v3 = (function (v1, v2, v3){
var v4 = (function (){
this.reset();
});
(function (){
(this.execute) = (function (v5){
var v6 = v5.args[0];
(this.$doc) = v5.args[1];
this.$undoStack.push(v6);
(this.$redoStack) = [];
});
(this.undo) = (function (v7){
var v6 = this.$undoStack.pop();
var v8 = null;
if(v6){
(v8) = this.$doc.undoChanges(v6, v7);
this.$redoStack.push(v6);
}
return v8;
});
(this.redo) = (function (v7){
var v6 = this.$redoStack.pop();
var v9 = null;
if(v6){
(v9) = this.$doc.redoChanges(v6, v7);
this.$undoStack.push(v6);
}
return v9;
});
(this.reset) = (function (){
(this.$undoStack) = [];
(this.$redoStack) = [];
});
(this.hasUndo) = (function (){
return (this.$undoStack.length) > (0);
});
(this.hasRedo) = (function (){
return (this.$redoStack.length) > (0);
});
}).call(v4.prototype);
(v2.UndoManager) = v4;
});
(v2.UTC) = v3.UTC;
function v4(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v3(v3);
(v4) += v2(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
(v1.prototype.intersectsMesh) = (function (v1){
if((! this._boundingInfo) || (! v1._boundingInfo)){
return false;
}
if(this._sps._bSphereOnly){
return v2.BoundingSphere.Intersects(this._boundingInfo.boundingSphere, v1._boundingInfo.boundingSphere);
}
return this._boundingInfo.intersects(v1._boundingInfo, false);
});
