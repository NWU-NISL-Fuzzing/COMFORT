var v0 = (function (){
return this.ariaRole_;
});
var v1 = (function (v1, v2){
return v1[v2];
});
var v2 = (function (v1, v2, v3){
for(var v4 in v1){
if(v1.call(v1, v4)){
v2.call(v3, v1[v4], v4, v1);
}
}
});
var v3 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/875dd2a1-5a1a-48d0-9ed8-4d802098f332?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '29', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : 'b269bbfd-5e43-44bc-b096-fceb0ac8724a', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14996', 'x-ms-correlation-request-id' : '75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T080604Z:75b0c3ac-92ab-4c12-8af7-ff1ad9503ec8', date : 'Wed, 27 Sep 2017 08:06:04 GMT', connection : 'close'}));
return v2;
});
(v3.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
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
(v3.prototype._buildTree) = (function (v1, v2){
if(this._invalidTree){
(v1) = (v1) || (0);
(v2) = (v2) || (this.getRootContexts().length);
(this._invalidTree) = false;
(this._aRowIndexMap) = [];
v3.prototype._buildTree.call(this, v1, v2);
}
});
function v4(v1, v2){
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
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v0(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
