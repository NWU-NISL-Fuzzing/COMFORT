var v0 = (function (v1, v2, v3){
v3(1606)("Map");
});
var v1 = (function (v1){
(v1.BitmapFillMode) = ({REPEAT : "repeat", SCALE : "scale", CLIP : "clip"});
});
var v2 = (function (v1, v2){
(v1[0]) = v2[0];
(v1[1]) = v2[1];
(v1[4]) = v2[2];
(v1[5]) = v2[3];
(v1[12]) = v2[4];
(v1[13]) = v2[5];
return v1;
});
(v3) = (function (v1, v2){
if((v1.substr(0, 1).toUpperCase()) == (v2.substr(0, 1).toUpperCase())){
v1(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v1(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
v2(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
}else {
v1(new RegExp(((v1.substr(0, 1).toUpperCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v1(new RegExp(((v1.substr(0, 1).toLowerCase()) + (v1.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v1(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toUpperCase()) + (v2.substr(1)));
v1(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
v2(new RegExp(((v2.substr(0, 1).toUpperCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toUpperCase()) + (v1.substr(1)));
v2(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v1.substr(0, 1).toLowerCase()) + (v1.substr(1)));
}
});
(function (){
v3(/$/, "s");
v3(/s$/i, "s");
v3(/(ax|test)is$/i, "$1es");
v3(/(octop|vir)us$/i, "$1i");
v3(/(octop|vir)i$/i, "$1i");
v3(/(alias|status)$/i, "$1es");
v3(/(bu)s$/i, "$1ses");
v3(/(buffal|tomat)o$/i, "$1oes");
v3(/([ti])a$/i, "$1a");
v3(/([ti])um$/i, "$1a");
v3(/sis$/i, "ses");
v3(/ses$/i, "ses");
v3(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v3(/(hive)$/i, "$1s");
v3(/([^aeiouy]|qu)y$/i, "$1ies");
v3(/(x|ch|ss|sh)$/i, "$1es");
v3(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v3(/([m|l])ouse$/i, "$1ice");
v3(/([m|l])ice$/i, "$1ice");
v3(/^(ox)$/i, "$1en");
v3(/^(ox)en$/i, "$1en");
v3(/(quiz)$/i, "$1zes");
v1(/s$/i, "");
v1(/ss$/i, "ss");
v1(/(n)ews$/i, "$1ews");
v1(/([ti])um$/i, "$1um");
v1(/([ti])a$/i, "$1um");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v1(/(^analy)ses$/i, "$1sis");
v1(/(^analy)sis$/i, "$1sis");
v1(/([^f])ves$/i, "$1fe");
v1(/(hive)s$/i, "$1");
v1(/(tive)s$/i, "$1");
v1(/([lr])ves$/i, "$1f");
v1(/([^aeiouy]|qu)ies$/i, "$1y");
v1(/(s)eries$/i, "$1eries");
v1(/(m)ovies$/i, "$1ovie");
v1(/(x|ch|ss|sh)es$/i, "$1");
v1(/([m|l])ice$/i, "$1ouse");
v1(/([m|l])ouse$/i, "$1ouse");
v1(/(bus)es$/i, "$1");
v1(/(bus)$/i, "$1");
v1(/(o)es$/i, "$1");
v1(/(shoe)s$/i, "$1");
v1(/(cris|ax|test)es$/i, "$1is");
v1(/(cris|ax|test)is$/i, "$1is");
v1(/(octop|vir)i$/i, "$1us");
v1(/(octop|vir)us$/i, "$1us");
v1(/(alias|status)es$/i, "$1");
v1(/(alias|status)$/i, "$1");
v1(/^(ox)en/i, "$1");
v1(/(vert|ind)ices$/i, "$1ex");
v1(/(matr)ices$/i, "$1ix");
v1(/(quiz)zes$/i, "$1");
v1(/(database)s$/i, "$1");
v0("person", "people");
v0("man", "men");
v0("child", "children");
v0("sex", "sexes");
v0("move", "moves");
v0("cow", "kine");
v2("equipment");
v2("information");
v2("rice");
v2("money");
v2("species");
v2("series");
v2("fish");
v2("sheep");
v2("jeans");
})();
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v3(v1);
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
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v2(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
// GenBlkBrick
for((v0) = v1;(v0) < (v2);(v0) += v3){
var v5 = (function (v1){
var v2 = v1('https://ciserversdk.table.core.windows.net:443').filteringRequestBody((function (v3){
return '*';
})).post('/tabledatatype4', '*').reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" m:etag=\"W/&quot;datetime'2013-03-27T11%3A02%3A04.297705Z'&quot;\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>https://ciserversdk.table.core.windows.net/tabledatatype4(PartitionKey='1',RowKey='3')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-03-27T11:02:04Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"tabledatatype4\" href=\"tabledatatype4(PartitionKey='1',RowKey='3')\" />\r\n  <category term=\"ciserversdk.tabledatatype4\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:PartitionKey>1</d:PartitionKey>\r\n      <d:RowKey>3</d:RowKey>\r\n      <d:Timestamp m:type=\"Edm.DateTime\">2013-03-27T11:02:04.297705Z</d:Timestamp>\r\n      <d:IntNumberValue m:type=\"Edm.Int32\">200</d:IntNumberValue>\r\n      <d:DoubleNumberValue m:type=\"Edm.Double\">2.5</d:DoubleNumberValue>\r\n      <d:FalseBooleanValue m:type=\"Edm.Boolean\">false</d:FalseBooleanValue>\r\n      <d:TrueBooleanValue m:type=\"Edm.Boolean\">true</d:TrueBooleanValue>\r\n      <d:StringValue>hi there</d:StringValue>\r\n      <d:DateValue m:type=\"Edm.DateTime\">2012-11-10T03:04:05.2Z</d:DateValue>\r\n    </m:properties>\r\n  </content>\r\n</entry>", ({'cache-control' : 'no-cache', 'transfer-encoding' : 'chunked', 'content-type' : 'application/atom+xml;charset=utf-8', etag : 'W/"datetime\'2013-03-27T11%3A02%3A04.297705Z\'"', location : 'https://ciserversdk.table.core.windows.net/tabledatatype4(PartitionKey=\'1\',RowKey=\'3\')', server : 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0', 'x-ms-request-id' : 'e5de1525-e28e-4267-bc3d-bfa20df6deed', 'x-ms-version' : '2011-08-18', date : 'Wed, 27 Mar 2013 11:02:03 GMT', connection : 'close'}));
return v2;
});
}
// GenBlkBrick
for(var v0 in v5){
var v6 = (function (v1, v2, v3){
var v4 = v3(5184);
(v1.exports) = (function (v1, v2){
return (! ((null) == (v1)) || (! v1.length)) && ((v4(v1, v2, 0)) > (- 1));
});
});
(v4.prototype.update) = (function (){
var v1 = this.bone;
var v2 = this.target;
var v3 = this._tmpVec1;
var v4 = this._tmpVec2;
var v5 = this._tmpVec3;
var v6 = this._tmpVec4;
var v7 = this._tmpMat1;
var v8 = this._tmpMat2;
v1.getAbsolutePositionToRef(this.mesh, v3);
v2.subtractToRef(v3, v4);
v4.normalize();
v9.Vector3.CrossToRef(this.upAxis, v4, v5);
v5.normalize();
v9.Vector3.CrossToRef(v4, v5, v6);
v6.normalize();
v9.Matrix.FromXYZAxesToRef(v5, v6, v4, v7);
if(((this.adjustYaw) || (this.adjustPitch)) || (this.adjustRoll)){
v9.Matrix.RotationYawPitchRollToRef(this.adjustYaw, this.adjustPitch, this.adjustRoll, v8);
v8.multiplyToRef(v7, v7);
}
this.bone.setRotationMatrix(v7, v9.Space.WORLD, this.mesh);
});
}
