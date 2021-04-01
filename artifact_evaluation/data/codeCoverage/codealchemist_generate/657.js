var v0 = (function (v1, v2, v3){
var v4 = v3(100), v5 = v3(397), v6 = v3(4267), v7 = v3(486);
(v1.exports) = (function (v1, v2){
return (v4(v1)) ? (v1) : ((v5(v1, v2)) ? ([]) : (v6(v7(v1))));
});
});
var v1 = (function (v1, v2){
(this.x) = Math.max(v1.x, Math.min(v2.x, this.x));
(this.y) = Math.max(v1.y, Math.min(v2.y, this.y));
return this;
});
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(73), v5 = v3(15), v6 = v3(622), v7 = v3(1924), v8 = v3(150), v9 = v3(29), v10 = v3(26);
(v1.exports) = ({create : v10((function (v1){
return v4.verify(({name : "US Bank Account", client : v1.client})).then((function (){
return (v1.client.getConfiguration().gatewayConfiguration.braintreeApi) ? ((v1.client.getConfiguration().gatewayConfiguration.usBankAccount) ? (new v7(v1)) : (v9.reject(new v5(v6.US_BANK_ACCOUNT_NOT_ENABLED)))) : (v9.reject(new v5(v8.BRAINTREE_API_ACCESS_RESTRICTED)));
}));
})), VERSION : "3.28.0"});
});
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v2(v1, v1.right);
}else {
break ;
}
}
}
}
});
var v3 = (function (v1, v2, v3){
var v4 = v3(554), v5 = v3(2170), v6 = v3(2166), v7 = v3(435), v8 = v3(680), v9 = v3(679), v10 = v3(206), v11 = 1, v12 = 2;
(v1.exports) = (function (v1, v2){
return ((v7(v1)) && (v8(v2))) ? (v9(v10(v1), v2)) : ((function (v3){
var v7 = v5(v3, v1);
return (((void 0) === (v7)) && ((v7) === (v2))) ? (v6(v3, v1)) : (v4(v2, v7, (v11) | (v12)));
}));
});
});
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
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
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
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
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
(v1.prototype) = ((v4) === (null)) ? (Object.create(v4)) : (((v2.prototype) = v4.prototype, new v2()));
