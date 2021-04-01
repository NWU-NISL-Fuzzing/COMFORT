var v0, v1, v2, v3, v4;
var v0 = (function (v1){
if(/^\s*$/.test(v1)){
return null;
}
if(/^(true|false)$/i.test(v1)){
return (v1.toLowerCase()) === ("true");
}
if(isFinite(v1)){
return parseFloat(v1);
}
return v1;
});
var v1 = (function (){
function v1(){
var v2;
if((arguments.length) == (0)){
(v2) = Object.getOwnPropertyNames(this);
}else {
if(((arguments.length) == (1)) && (Array.isArray(arguments[0]))){
(v2) = arguments[0];
}else {
(v2) = Array.prototype.splice.call(arguments, 0);
}
}
return new v6(this, v2);
}
Object.defineProperty(Object.prototype, "properties", ({value : v1, enumerable : false, writable : true, configurable : true}));
function v6(v7, v2){
(this.o) = v7;
(this.names) = v2;
}
(v6.prototype.hide) = (function (){
var v7 = this.o, v8 = ({enumerable : false});
this.names.forEach((function (v9){
if(v7.hasOwnProperty(v9)){
Object.defineProperty(v7, v9, v8);
}
}));
return this;
});
(v6.prototype.freeze) = (function (){
var v7 = this.o, v10 = ({writable : false, configurable : false});
this.names.forEach((function (v9){
if(v7.hasOwnProperty(v9)){
Object.defineProperty(v7, v9, v10);
}
}));
return this;
});
(v6.prototype.descriptors) = (function (){
var v7 = this.o, v11 = ({});
this.names.forEach((function (v9){
if(! v7.hasOwnProperty(v9)){
return;
}
(v11[v9]) = Object.getOwnPropertyDescriptor(v7, v9);
}));
return v11;
});
(v6.prototype.toString) = (function (){
var v7 = this.o;
var v12 = this.names.map(v13);
return (("{\n  ") + (v12.join(",\n  "))) + ("\n}");
function v13(v9){
var v14 = "", v11 = Object.getOwnPropertyDescriptor(v7, v9);
if(! v11){
return (("nonexistent ") + (v9)) + (": undefined");
}
if(! v11.configurable){
(v14) += "permanent ";
}
if(((v11.get) && (! v11.set)) || (! v11.writable)){
(v14) += "readonly ";
}
if(! v11.enumerable){
(v14) += "hidden ";
}
if((v11.get) || (v11.set)){
(v14) += ("accessor ") + (v9);
}else {
(v14) += ((v9) + (": ")) + (((typeof v11.value) === ("function")) ? ("function") : (v11.value));
}
return v14;
}
});
v6.prototype.properties().hide();
});
var v2 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/CIStressbasicc73f876c0b464af7a0384be6305d7849-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '6622ad0e87cb04209b0ae65c1f42f7a6', date : 'Tue, 02 Aug 2016 19:57:16 GMT', connection : 'close'}));
return v2;
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
(v3.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v1.prototype) = v2.prototype, new v1()));
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v1(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v1(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
});
(function (){
v2(/$/, "s");
v2(/s$/i, "s");
v2(/(ax|test)is$/i, "$1es");
v2(/(octop|vir)us$/i, "$1i");
v2(/(octop|vir)i$/i, "$1i");
v2(/(alias|status)$/i, "$1es");
v2(/(bu)s$/i, "$1ses");
v2(/(buffal|tomat)o$/i, "$1oes");
v2(/([ti])a$/i, "$1a");
v2(/([ti])um$/i, "$1a");
v2(/sis$/i, "ses");
v2(/ses$/i, "ses");
v2(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v2(/(hive)$/i, "$1s");
v2(/([^aeiouy]|qu)y$/i, "$1ies");
v2(/(x|ch|ss|sh)$/i, "$1es");
v2(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v2(/([m|l])ouse$/i, "$1ice");
v2(/([m|l])ice$/i, "$1ice");
v2(/^(ox)$/i, "$1en");
v2(/^(ox)en$/i, "$1en");
v2(/(quiz)$/i, "$1zes");
v0(/s$/i, "");
v0(/ss$/i, "ss");
v0(/(n)ews$/i, "$1ews");
v0(/([ti])um$/i, "$1um");
v0(/([ti])a$/i, "$1um");
v0(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v0(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v0(/(^analy)ses$/i, "$1sis");
v0(/(^analy)sis$/i, "$1sis");
v0(/([^f])ves$/i, "$1fe");
v0(/(hive)s$/i, "$1");
v0(/(tive)s$/i, "$1");
v0(/([lr])ves$/i, "$1f");
v0(/([^aeiouy]|qu)ies$/i, "$1y");
v0(/(s)eries$/i, "$1eries");
v0(/(m)ovies$/i, "$1ovie");
v0(/(x|ch|ss|sh)es$/i, "$1");
v0(/([m|l])ice$/i, "$1ouse");
v0(/([m|l])ouse$/i, "$1ouse");
v0(/(bus)es$/i, "$1");
v0(/(bus)$/i, "$1");
v0(/(o)es$/i, "$1");
v0(/(shoe)s$/i, "$1");
v0(/(cris|ax|test)es$/i, "$1is");
v0(/(cris|ax|test)is$/i, "$1is");
v0(/(octop|vir)i$/i, "$1us");
v0(/(octop|vir)us$/i, "$1us");
v0(/(alias|status)es$/i, "$1");
v0(/(alias|status)$/i, "$1");
v0(/^(ox)en/i, "$1");
v0(/(vert|ind)ices$/i, "$1ex");
v0(/(matr)ices$/i, "$1ix");
v0(/(quiz)zes$/i, "$1");
v0(/(database)s$/i, "$1");
v1("person", "people");
v1("man", "men");
v1("child", "children");
v1("sex", "sexes");
v1("move", "moves");
v1("cow", "kine");
v3("equipment");
v3("information");
v3("rice");
v3("money");
v3("species");
v3("series");
v3("fish");
v3("sheep");
v3("jeans");
})();
