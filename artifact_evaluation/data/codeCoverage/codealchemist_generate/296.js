var v0 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/CIStressbasic2294bbed7fed4ffda3ca53a926793769-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'bb61c63cb23901f3a7ff3901c244bbfd', date : 'Tue, 02 Aug 2016 21:09:55 GMT', connection : 'close'}));
return v2;
});
(v0.prototype) = ({applyBehavior : (function (v1){
var v2 = this.attractor.sub(v1);
var v3 = v2.magSquared();
if((v3) < (this.radiusSquared)){
var v4 = v2.normalizeTo((1.0) - ((v3) / (this.radiusSquared))).jitter(this.jitter).scaleSelf(this.attrStrength);
v1.addForce(v4);
}
}), configure : (function (v5){
(this.timeStep) = v5;
this.setStrength(this.strength);
}), getAttractor : (function (){
return this.attractor;
}), getJitter : (function (){
return this.jitter;
}), getRadius : (function (){
return this.radius;
}), getStrength : (function (){
return this.strength;
}), setAttractor : (function (v6){
(this.attractor) = v6;
}), setJitter : (function (v7){
(this.jitter) = v7;
}), setRadius : (function (v8){
(this.radius) = v8;
(this.radiusSquared) = (v8) * (v8);
}), setStrength : (function (v9){
(this.strength) = v9;
(this.attrStrength) = (v9) * (this.timeStep);
})});
var v1 = (function (v1, v2, v3){
v1("./$.collection-to-json")("Set");
});
var v2 = (function v2(v1){
if((! v1) || ((v1.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v0.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v0.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v0.call(v1, v6));
});
(v3) = (function (){
v0();
v2();
});
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
(v1.escapeString) = v0;
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
v2("person", "people");
v2("man", "men");
v2("child", "children");
v2("sex", "sexes");
v2("move", "moves");
v2("cow", "kine");
v4("equipment");
v4("information");
v4("rice");
v4("money");
v4("species");
v4("series");
v4("fish");
v4("sheep");
v4("jeans");
})();
