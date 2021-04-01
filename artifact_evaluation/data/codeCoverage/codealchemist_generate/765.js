var v0 = (function (v1, v2, v3){
var v4 = v3(2203), v5 = v3(2202), v6 = v3(446), v7 = v3(212);
(v1.exports) = (function (v1){
return (v6(v1)) ? (v4(v7(v1))) : (v5(v1));
});
});
(v0.prototype.getTypeName) = (function (){
return "FreeCameraVirtualJoystickInput";
});
function v1(){
return (v0()) | (0);
}
// GenBlkBrick
while((v0) >= (2)){
var v2 = (function (){
if(this.BGPriorityEnabled){
(this.BGLayerRender) = this.BGGBCLayerRender;
(this.WindowLayerRender) = this.WindowGBCLayerRender;
}else {
(this.BGLayerRender) = this.BGGBCLayerRenderNoPriorityFlagging;
(this.WindowLayerRender) = this.WindowGBCLayerRenderNoPriorityFlagging;
}
});
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/0502de55-2f7a-41b3-9185-51e349c8b573?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '30', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'retry-after' : '10', 'x-ms-request-id' : '01feaa4f-9942-4aee-81cd-f06f490f6831', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14997', 'x-ms-correlation-request-id' : '9eb9d654-5684-4472-8c1e-0e49080ef16e', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T120924Z:9eb9d654-5684-4472-8c1e-0e49080ef16e', date : 'Fri, 28 Jul 2017 12:09:23 GMT', connection : 'close'}));
return v2;
});
}
(v2.prototype._defaultCropOptions) = ({});
(function (){
v0(/$/, "s");
v0(/s$/i, "s");
v0(/(ax|test)is$/i, "$1es");
v0(/(octop|vir)us$/i, "$1i");
v0(/(octop|vir)i$/i, "$1i");
v0(/(alias|status)$/i, "$1es");
v0(/(bu)s$/i, "$1ses");
v0(/(buffal|tomat)o$/i, "$1oes");
v0(/([ti])a$/i, "$1a");
v0(/([ti])um$/i, "$1a");
v0(/sis$/i, "ses");
v0(/ses$/i, "ses");
v0(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v0(/(hive)$/i, "$1s");
v0(/([^aeiouy]|qu)y$/i, "$1ies");
v0(/(x|ch|ss|sh)$/i, "$1es");
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v0(/([m|l])ouse$/i, "$1ice");
v0(/([m|l])ice$/i, "$1ice");
v0(/^(ox)$/i, "$1en");
v0(/^(ox)en$/i, "$1en");
v0(/(quiz)$/i, "$1zes");
v2(/s$/i, "");
v2(/ss$/i, "ss");
v2(/(n)ews$/i, "$1ews");
v2(/([ti])um$/i, "$1um");
v2(/([ti])a$/i, "$1um");
v2(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v2(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v2(/(^analy)ses$/i, "$1sis");
v2(/(^analy)sis$/i, "$1sis");
v2(/([^f])ves$/i, "$1fe");
v2(/(hive)s$/i, "$1");
v2(/(tive)s$/i, "$1");
v2(/([lr])ves$/i, "$1f");
v2(/([^aeiouy]|qu)ies$/i, "$1y");
v2(/(s)eries$/i, "$1eries");
v2(/(m)ovies$/i, "$1ovie");
v2(/(x|ch|ss|sh)es$/i, "$1");
v2(/([m|l])ice$/i, "$1ouse");
v2(/([m|l])ouse$/i, "$1ouse");
v2(/(bus)es$/i, "$1");
v2(/(bus)$/i, "$1");
v2(/(o)es$/i, "$1");
v2(/(shoe)s$/i, "$1");
v2(/(cris|ax|test)es$/i, "$1is");
v2(/(cris|ax|test)is$/i, "$1is");
v2(/(octop|vir)i$/i, "$1us");
v2(/(octop|vir)us$/i, "$1us");
v2(/(alias|status)es$/i, "$1");
v2(/(alias|status)$/i, "$1");
v2(/^(ox)en/i, "$1");
v2(/(vert|ind)ices$/i, "$1ex");
v2(/(matr)ices$/i, "$1ix");
v2(/(quiz)zes$/i, "$1");
v2(/(database)s$/i, "$1");
v3("person", "people");
v3("man", "men");
v3("child", "children");
v3("sex", "sexes");
v3("move", "moves");
v3("cow", "kine");
v1("equipment");
v1("information");
v1("rice");
v1("money");
v1("species");
v1("series");
v1("fish");
v1("sheep");
v1("jeans");
})();
(v2.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v3(v4.directions[0], v4, v5)){
return false;
}
if(! v3(v4.directions[1], v4, v5)){
return false;
}
if(! v3(v4.directions[2], v4, v5)){
return false;
}
if(! v3(v5.directions[0], v4, v5)){
return false;
}
if(! v3(v5.directions[1], v4, v5)){
return false;
}
if(! v3(v5.directions[2], v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v3(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
(function (){
v1(/$/, "s");
v1(/s$/i, "s");
v1(/(ax|test)is$/i, "$1es");
v1(/(octop|vir)us$/i, "$1i");
v1(/(octop|vir)i$/i, "$1i");
v1(/(alias|status)$/i, "$1es");
v1(/(bu)s$/i, "$1ses");
v1(/(buffal|tomat)o$/i, "$1oes");
v1(/([ti])a$/i, "$1a");
v1(/([ti])um$/i, "$1a");
v1(/sis$/i, "ses");
v1(/ses$/i, "ses");
v1(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v1(/(hive)$/i, "$1s");
v1(/([^aeiouy]|qu)y$/i, "$1ies");
v1(/(x|ch|ss|sh)$/i, "$1es");
v1(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v1(/([m|l])ouse$/i, "$1ice");
v1(/([m|l])ice$/i, "$1ice");
v1(/^(ox)$/i, "$1en");
v1(/^(ox)en$/i, "$1en");
v1(/(quiz)$/i, "$1zes");
v3(/s$/i, "");
v3(/ss$/i, "ss");
v3(/(n)ews$/i, "$1ews");
v3(/([ti])um$/i, "$1um");
v3(/([ti])a$/i, "$1um");
v3(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v3(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v3(/(^analy)ses$/i, "$1sis");
v3(/(^analy)sis$/i, "$1sis");
v3(/([^f])ves$/i, "$1fe");
v3(/(hive)s$/i, "$1");
v3(/(tive)s$/i, "$1");
v3(/([lr])ves$/i, "$1f");
v3(/([^aeiouy]|qu)ies$/i, "$1y");
v3(/(s)eries$/i, "$1eries");
v3(/(m)ovies$/i, "$1ovie");
v3(/(x|ch|ss|sh)es$/i, "$1");
v3(/([m|l])ice$/i, "$1ouse");
v3(/([m|l])ouse$/i, "$1ouse");
v3(/(bus)es$/i, "$1");
v3(/(bus)$/i, "$1");
v3(/(o)es$/i, "$1");
v3(/(shoe)s$/i, "$1");
v3(/(cris|ax|test)es$/i, "$1is");
v3(/(cris|ax|test)is$/i, "$1is");
v3(/(octop|vir)i$/i, "$1us");
v3(/(octop|vir)us$/i, "$1us");
v3(/(alias|status)es$/i, "$1");
v3(/(alias|status)$/i, "$1");
v3(/^(ox)en/i, "$1");
v3(/(vert|ind)ices$/i, "$1ex");
v3(/(matr)ices$/i, "$1ix");
v3(/(quiz)zes$/i, "$1");
v3(/(database)s$/i, "$1");
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
