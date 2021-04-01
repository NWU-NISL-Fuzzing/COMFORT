var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/86008176-e61b-4868-a07e-5292b93df1a7?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '2baed75e-b042-4053-aa0f-c1169d1c9e03', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14991', 'x-ms-correlation-request-id' : '99f71ebf-64c3-40d2-a7ff-d287edf72107', 'x-ms-routing-request-id' : 'WESTEUROPE:20170704T142610Z:99f71ebf-64c3-40d2-a7ff-d287edf72107', date : 'Tue, 04 Jul 2017 14:26:10 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMStart/providers/Microsoft.Storage/storageAccounts/xplattstoragestsp1430?api-version=2015-05-01-preview').reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-failure-cause' : 'gateway', 'x-ms-request-id' : '6582db85-dfed-4472-ae18-9216bcc507a4', 'x-ms-correlation-request-id' : '6582db85-dfed-4472-ae18-9216bcc507a4', 'x-ms-routing-request-id' : 'EASTASIA:20150427T144647Z:6582db85-dfed-4472-ae18-9216bcc507a4', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Mon, 27 Apr 2015 14:46:46 GMT', connection : 'close', 'content-length' : '69'}));
return v2;
});
(v1.escapeString) = v0;
// GenBlkBrick
for(((v0) = v1, (v2) = v3);(v0) < (v2);(v0) += v4){
var v2 = (function (v1, v2, v3){
'use strict';
v1('./_string-html')('strike', (function (v4){
return (function v5(){
return v4(this, 'strike', '', '');
});
}));
});
(v2.prototype.getRightJoystick) = (function (){
return this._rightjoystick;
});
}
(v2.prototype._detachCameras) = (function (v1){
var v2 = v3.Tools.MakeArray((v1) || (this._cameras));
for(var v4 = 0;(v4) < (v2.length);v4++){
var v5 = v2[v4];
var v6 = v5.name;
v5.detachPostProcess(this._postProcesses[(this._singleInstance) ? (0) : (v6)], this._indicesForCamera[v6]);
var v7 = this._cameras.indexOf(v6);
this._indicesForCamera.splice(v7, 1);
this._cameras.splice(v7, 1);
for(var v8 in this._renderPasses){
this._renderPasses[v8]._decRefCount();
}
}
});
// GenBlkBrick
for(var v3 = 0;(v3) < (4);v3++){
var v4 = (function (v1, v2, v3){
var v4 = v3(3), v5 = v3(545)(! 1);
v4(v4.S, "Object", ({values : (function (v1){
return v5(v1);
})}));
});
// GenBlkBrick
for(var v5 in v1){
(v6) = v5.toLowerCase().indexOf((v2) + ('').toLowerCase());
var v7 = ((v5) === ('x')) ? (v6) : (((v6) & (0x3)) | (0x8));
}
}
// GenBlkBrick
for(var v8 = 0;(v8) < (2);v8++){
(v9) = v1(v2, v3, v8);
}
(v10) = (v6) ? (v0(v7, v6)) : (('') + (Math.round(v7))).split('.');
