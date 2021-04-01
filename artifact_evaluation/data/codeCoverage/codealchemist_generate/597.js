var v0 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').delete('/8d57ddbd-c779-40ea-b660-1015f4bf027d/services/WebSpaces/uksouthwebspace/sites/clitests5648?deleteEmptyServerFarm=true&deleteMetrics=true&deleteAllSlots=true').reply(200, "", ({'cache-control' : 'private', 'transfer-encoding' : 'chunked', etag : '"1D23527A7EEAFC0"', server : '1.0.6198.442 (rd_rdfe_stable.161012-2349) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'e338c0af9bcf3a6cb5a70a9505e6fa08', date : 'Wed, 02 Nov 2016 16:39:29 GMT', connection : 'close'}));
return v2;
});
(v0.RemoveTagsFrom) = (function (v1, v2){
if(! v0.HasTags(v1)){
return;
}
var v3 = v2.split(" ");
for(var v4 in v3){
v0._RemoveTagFrom(v1, v3[v4]);
}
});
// GenBlkBrick
for(v0 in []){
var v1 = (function (v1){
var v2 = v1('https://ciserversdk.blob.core.windows.net:443').put('/upload-download-test0/blockblob_nodesdktest?comp=properties').reply(200, "", ({'transfer-encoding' : 'chunked', 'last-modified' : 'Tue, 30 Jul 2013 13:28:45 GMT', etag : '"0x8D05B3FD99ABC11"', server : 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : '8179da92-7468-43d1-b4af-fd3935d35fc4', 'x-ms-version' : '2012-02-12', date : 'Tue, 30 Jul 2013 13:28:43 GMT'}));
return v2;
});
}
// GenBlkBrick
for(var v0 in v0.prototype){
(v0.prototype.getGBuffer) = (function (){
return this._multiRenderTarget;
});
}
var v2 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v0, save : v0, init : v1, shutdown : v1, getAuthUrl : v0, revokeToken : v0});
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : false, configurable : false}));
v1(/(m)ovies$/i, "$1ovie");
var v3 = v0(2, 3);
