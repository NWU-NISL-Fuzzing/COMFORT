var v0 = (function (v1){
var v2 = [];
v2.push([]);
v2.push([]);
if((v1) && (! v1.skills_has("alchemy_1"))){
v2.push([]);
}
return v2;
});
(v0.prototype._rebuild) = (function (){
(this._buffer) = null;
this.create(this._data);
});
var v1 = (function (v1){
var v2 = v1('https://ciserversdk.table.core.windows.net:443').get('/Tables').reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>https://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-03-27T11:01:58Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>https://ciserversdk.table.core.windows.net/Tables('tabledatatype3')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-03-27T11:01:58Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('tabledatatype3')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>tabledatatype3</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", ({'cache-control' : 'no-cache', 'transfer-encoding' : 'chunked', 'content-type' : 'application/atom+xml;charset=utf-8', server : 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : '3193528d-58d1-4fdb-9a8c-25ac2f4897b6', 'x-ms-version' : '2011-08-18', date : 'Wed, 27 Mar 2013 11:01:58 GMT', connection : 'close'}));
return v2;
});
function v2(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v0(v3)) + (v1(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
(v1.prototype.resolve) = (function (v1){
(this.value) = v1;
delete this.errbacks;
var v2 = this.callbacks;
delete this.callbacks;
for(var v3 = 0;(v3) < (v2.length);v3++){
v2[v3](this.value);
}
});
// GenBlkBrick
for(var v3 = 0;(v3) < (20);v3++){
var v4 = (function (v1){
(v1.registerA) = v1.memoryReader[v1.programCounter](v1, v1.programCounter);
(v1.programCounter) = ((v1.programCounter) + (1)) & (0xFFFF);
});
}
var v5 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v2, v3);
});
(v5.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v1(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v4(v1, v1.right);
}else {
break ;
}
}
}
}
});
