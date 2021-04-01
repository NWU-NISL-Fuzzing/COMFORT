var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(305), v5 = v3(304), v6 = v3(206), v7 = v3(1759), v8 = v3(418), v9 = v3(1758);
(v1.exports) = ({isAndroid : v4, isChrome : v5, isIos : v6, isIosSafari : v7, isSamsungBrowser : v8, isMobileFirefox : v9});
});
var v1 = (function (){
var v1 = [];
try{
Object.defineProperty(v1, "length", ({value : 4294967296}));
return false;
}catch(v3){
return (v3) instanceof (RangeError);
}
});
function v2(){
return v1();
}
var v3 = (function (){
return 'xxxxxxxx-xxxx'.replace(/[x]/g, (function (v1){
var v2 = ((Math.random()) * (16)) | (0), v4 = ((v1) === ('x')) ? (v2) : (((v2) & (0x3)) | (0x8));
return v4.toString(16);
}));
});
(v3.prototype.intersects) = (function (v1, v2){
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
if(! v0(v4.directions[0], v4, v5)){
return false;
}
if(! v0(v4.directions[1], v4, v5)){
return false;
}
if(! v0(v4.directions[2], v4, v5)){
return false;
}
if(! v0(v5.directions[0], v4, v5)){
return false;
}
if(! v0(v5.directions[1], v4, v5)){
return false;
}
if(! v0(v5.directions[2], v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v0(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
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
v1("person", "people");
v1("man", "men");
v1("child", "children");
v1("sex", "sexes");
v1("move", "moves");
v1("cow", "kine");
v0("equipment");
v0("information");
v0("rice");
v0("money");
v0("species");
v0("series");
v0("fish");
v0("sheep");
v0("jeans");
})();
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
