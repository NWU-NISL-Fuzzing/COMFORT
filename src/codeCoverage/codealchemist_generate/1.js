var v0 = (function (v1){
return v1.extend(({selectRecordsView : 'views/modals/select-category-tree-records', autocompleteDisabled : false, fetchSearch : (function (){
var v2 = v1.prototype.fetchSearch.call(this);
if(! v2){
return v2;
}
(v2.type) = 'inCategory';
return v2;
})}));
});
// GenBlkBrick
while((v0) < (v1)){
var v1 = (function (v1){
if((((! v1) || (this.isObject(v1))) || (v1.nodeType)) || (this.isWindow(v1))){
return false;
}
try{
if(((v1.constructor) && (! this.hasOwn.call(v1, "constructor"))) && (! this.hasOwn.call(v1.constructor.prototype, "isPrototypeOf"))){
return false;
}
}catch(v2){
return false;
}
var v3;
for(v3 in v1){
}
return ((v3) === (undefined)) || (this.hasOwn.call(v1, v3));
});
}
(v0._getBoneType) = (function (v1){
switch(v1.toLowerCase()){
}
});
var v2 = (function (v1){
return ({api : v1.settings.api});
});
var v3 = (function (v1, v2, v3){
var v4 = v3(5134);
(v1.exports) = (function (v1, v2){
var v3 = v1.__data__;
return (v4(v2)) ? (v3[(("string") == (typeof v2)) ? ("string") : ("hash")]) : (v3.map);
});
});
var v4 = (function (v1){
if((v1.h) != (v1.w)){
return null;
}
var v2 = v1;
var v3 = v1.mul(v1);
var v4 = v1;
var v5 = 1;
var v6 = 1;
for(var v7 = 0;(v7) < (20);v7++){
(v5) *= (((v7) * (2)) + (2)) * (((v7) * (2)) + (3));
(v6) = - v6;
(v4) = v4.mul(v3);
(v2) = v2.add(v4.mulr((v6) / (v5)));
}
return v2;
});
// GenBlkBrick
for(var v0 in v3){
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v3(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
}
var v6 = (function (v1){
var v2 = v1('https://ciserversdk.table.core.windows.net:443').get('/tabledatatype6()?%24filter=StringValue%20eq%20%27hi%20there%27').reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">tabledatatype6</title>\r\n  <id>https://ciserversdk.table.core.windows.net/tabledatatype6</id>\r\n  <updated>2013-03-27T11:02:23Z</updated>\r\n  <link rel=\"self\" title=\"tabledatatype6\" href=\"tabledatatype6\" />\r\n  <entry m:etag=\"W/&quot;datetime'2013-03-27T11%3A02%3A21.0049264Z'&quot;\">\r\n    <id>https://ciserversdk.table.core.windows.net/tabledatatype6(PartitionKey='1',RowKey='2')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-03-27T11:02:23Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"tabledatatype6\" href=\"tabledatatype6(PartitionKey='1',RowKey='2')\" />\r\n    <category term=\"ciserversdk.tabledatatype6\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:PartitionKey>1</d:PartitionKey>\r\n        <d:RowKey>2</d:RowKey>\r\n        <d:Timestamp m:type=\"Edm.DateTime\">2013-03-27T11:02:21.0049264Z</d:Timestamp>\r\n        <d:IntNumberValue m:type=\"Edm.Int32\">200</d:IntNumberValue>\r\n        <d:DoubleNumberValue m:type=\"Edm.Double\">2.5</d:DoubleNumberValue>\r\n        <d:FalseBooleanValue m:type=\"Edm.Boolean\">false</d:FalseBooleanValue>\r\n        <d:TrueBooleanValue m:type=\"Edm.Boolean\">true</d:TrueBooleanValue>\r\n        <d:StringValue>hi there</d:StringValue>\r\n        <d:DateValue m:type=\"Edm.DateTime\">2012-11-10T03:04:05.2Z</d:DateValue>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n  <entry m:etag=\"W/&quot;datetime'2013-03-27T11%3A02%3A21.3649642Z'&quot;\">\r\n    <id>https://ciserversdk.table.core.windows.net/tabledatatype6(PartitionKey='1',RowKey='3')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-03-27T11:02:23Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"tabledatatype6\" href=\"tabledatatype6(PartitionKey='1',RowKey='3')\" />\r\n    <category term=\"ciserversdk.tabledatatype6\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:PartitionKey>1</d:PartitionKey>\r\n        <d:RowKey>3</d:RowKey>\r\n        <d:Timestamp m:type=\"Edm.DateTime\">2013-03-27T11:02:21.3649642Z</d:Timestamp>\r\n        <d:IntNumberValue m:type=\"Edm.Int32\">200</d:IntNumberValue>\r\n        <d:DoubleNumberValue m:type=\"Edm.Double\">2.5</d:DoubleNumberValue>\r\n        <d:FalseBooleanValue m:type=\"Edm.Boolean\">false</d:FalseBooleanValue>\r\n        <d:TrueBooleanValue m:type=\"Edm.Boolean\">true</d:TrueBooleanValue>\r\n        <d:StringValue>hi there</d:StringValue>\r\n        <d:DateValue m:type=\"Edm.DateTime\">2012-11-10T03:04:05.2Z</d:DateValue>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", ({'cache-control' : 'no-cache', 'transfer-encoding' : 'chunked', 'content-type' : 'application/atom+xml;charset=utf-8', server : 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : 'c34eef98-33e5-4d47-bb82-72406e0a48c6', 'x-ms-version' : '2011-08-18', date : 'Wed, 27 Mar 2013 11:02:22 GMT', connection : 'close'}));
return v2;
});
