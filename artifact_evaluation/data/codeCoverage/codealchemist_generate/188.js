var v0 = (v1) === ((v1) | (0));
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("a8fe9ef329a78fedc16653f6cd269c0f.svg");
});
(v1.AABB) = "aabb";
function v2(){
if(! v0){
(v0) = true;
v1(v3.get());
}
return v4;
}
function v3(){
if(! v0){
(v0) = true;
v1(v3.get());
}
return v4;
}
var v4 = (function (v1){
return (function v2(v3, v4){
if((v3.val) > (v4.val)){
return (v1) ? (- 1) : (1);
}
if((v4.val) > (v3.val)){
return (v1) ? (1) : (- 1);
}
return 0;
});
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
v4(/s$/i, "");
v4(/ss$/i, "ss");
v4(/(n)ews$/i, "$1ews");
v4(/([ti])um$/i, "$1um");
v4(/([ti])a$/i, "$1um");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v4(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v4(/(^analy)ses$/i, "$1sis");
v4(/(^analy)sis$/i, "$1sis");
v4(/([^f])ves$/i, "$1fe");
v4(/(hive)s$/i, "$1");
v4(/(tive)s$/i, "$1");
v4(/([lr])ves$/i, "$1f");
v4(/([^aeiouy]|qu)ies$/i, "$1y");
v4(/(s)eries$/i, "$1eries");
v4(/(m)ovies$/i, "$1ovie");
v4(/(x|ch|ss|sh)es$/i, "$1");
v4(/([m|l])ice$/i, "$1ouse");
v4(/([m|l])ouse$/i, "$1ouse");
v4(/(bus)es$/i, "$1");
v4(/(bus)$/i, "$1");
v4(/(o)es$/i, "$1");
v4(/(shoe)s$/i, "$1");
v4(/(cris|ax|test)es$/i, "$1is");
v4(/(cris|ax|test)is$/i, "$1is");
v4(/(octop|vir)i$/i, "$1us");
v4(/(octop|vir)us$/i, "$1us");
v4(/(alias|status)es$/i, "$1");
v4(/(alias|status)$/i, "$1");
v4(/^(ox)en/i, "$1");
v4(/(vert|ind)ices$/i, "$1ex");
v4(/(matr)ices$/i, "$1ix");
v4(/(quiz)zes$/i, "$1");
v4(/(database)s$/i, "$1");
v1("person", "people");
v1("man", "men");
v1("child", "children");
v1("sex", "sexes");
v1("move", "moves");
v1("cow", "kine");
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
(v2.match.Twitter) = v2.Util.extend(v2.match.Match, ({getType : (function (){
return 'twitter';
}), getTwitterHandle : (function (){
return this.twitterHandle;
}), getAnchorHref : (function (){
return ('https://twitter.com/') + (this.twitterHandle);
}), getAnchorText : (function (){
return ('@') + (this.twitterHandle);
})}));
