var v0 = (function (v1){
function v2(v3){
var v4 = Object.keys(v3).reduce((function (v6, v7){
(v6) += ((v7) + (': ')) + (v3[v7]);
return v6;
}), '{');
(v4) += '}';
return v4;
}
return (((((('[') + (v1.type)) + (' tagName <b>')) + (v1.tagName)) + ('</b> attrs: ')) + (v2(v1.attributes))) + (']');
});
(v0.prototype.showCropper) = (function (){
if((this.$cropperContainer) && (this.$cropperContainer.length)){
this.$cropperContainer.removeClass('hidden');
}
});
// GenBlkBrick
for(var v1 = 0;(v1) < (1);++v1){
var v2 = (function (v1){
var v2 = v1('https://ciserversdk.blob.core.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).put('/upload-download-test11/pageblob_nodesdktest?comp=page', '*').reply(201, "", ({'transfer-encoding' : 'chunked', 'content-md5' : 'm7eRGzEnx19aZ1QqvjWN2Q==', 'last-modified' : 'Tue, 30 Jul 2013 13:28:49 GMT', etag : '"0x8D05B3FDC756605"', server : 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : 'd13baf80-f10b-4bd9-9730-73e19dfdb7e4', 'x-ms-version' : '2012-02-12', 'x-ms-blob-sequence-number' : '0', date : 'Tue, 30 Jul 2013 13:28:49 GMT'}));
return v2;
});
}
while(v1--){
new v0();
}
for(var v3 = 0;(v3) <= (v1);v3++){
v2(v3);
}
(v4) = (v1) ? (v0(v3, v1)) : (('') + (Math.round(v3))).split('.');
var v5 = (function (v1, v2, v3){
var v4 = v0(v1, v2);
var v6 = v0(v1, v3);
return v2(v4.min, v4.max, v6.min, v6.max);
});
(v0.PrepareAttributesForInstances) = (function (v1, v2){
if(v2["INSTANCES"]){
v1.push("world0");
v1.push("world1");
v1.push("world2");
v1.push("world3");
}
});
