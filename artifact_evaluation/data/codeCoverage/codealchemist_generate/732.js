var v0 = (function (){
return - 2147483648;
});
(v0.STRINGS) = "strings";
var v1 = (function (v1){
var v2 = v1('https://ciserversdk.blob.core.windows.net:443').put('/upload-download-test11/pageblob_nodesdktest?comp=page').reply(201, "", ({'transfer-encoding' : 'chunked', 'last-modified' : 'Tue, 30 Jul 2013 13:28:50 GMT', etag : '"0x8D05B3FDC89D8EB"', server : 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : 'd24f77a2-4720-4598-8e8f-0d8c1d2af08f', 'x-ms-version' : '2012-02-12', 'x-ms-blob-sequence-number' : '0', date : 'Tue, 30 Jul 2013 13:28:48 GMT'}));
return v2;
});
(v0.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v1(this._root, v1);
return this.removeNode(v3);
});
var v2 = (function (){
var v1 = this.pattern.toString();
return v1.substr(1, (v1.length) - (2));
});
(v0.prototype.navigateTo) = (function (v1){
var v2 = this.listWidget.findListItem(0, v1.title);
if((v2) === (undefined)){
return;
}
var v4 = this.listWidget.children[v2], v5 = v4.findFirstDomNode();
this.listWidget.dispatchEvent(({type : "tm-scroll", target : v5}));
});
var v3 = (function (){
return (0) + (new Date());
});
(v1.prototype.getStrideSize) = (function (){
return this._stride;
});
