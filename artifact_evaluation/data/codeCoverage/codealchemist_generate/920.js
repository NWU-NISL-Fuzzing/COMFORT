// GenBlkBrick
while((new Date()) < ((v1) * (1000))){
var v0 = (function (v1){
var v2 = 0;
var v3 = (v1) && (v1.length);
var v4;
for(;(v2) < (v3);v2++){
(v4) = v1[v2];
if((v4) > (0xFF)){
return false;
}
if((((v4) >= (0x00)) && ((v4) <= (0x07))) || ((v4) === (0xFF))){
return true;
}
}
return false;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(4940);
(v1.exports) = (function (v1, v2){
var v3 = v1.__data__;
return (v4(v2)) ? (v3[(("string") == (typeof v2)) ? ("string") : ("hash")]) : (v3.map);
});
});
}
(v0.ROTATE_MODE) = "rotateMode";
// GenBlkBrick
for(var v0 in v0.prototype){
// GenBlkBrick
while((new Date()) < ((v1) * (1000))){
var v2 = (function (v1, v2, v3){
var v4 = v1('net');
(v2.exports) = (function (v5){
var v6 = v4.createServer(), v7 = 0;
v6.on('listening', (function (){
(v7) = v6.address().port;
v6.close();
}));
v6.on('close', (function (){
v5(null, v7);
}));
v6.on('error', (function (v8){
v5(v8, null);
}));
v6.listen(0, '127.0.0.1');
});
});
var v3 = (function (v1, v2, v3){
(this.buffers) = [];
(this.offset) = v2;
(this.size) = v3;
});
}
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v3(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v0(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v0(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
}
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
v4("person", "people");
v4("man", "men");
v4("child", "children");
v4("sex", "sexes");
v4("move", "moves");
v4("cow", "kine");
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
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v0(v1);
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
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
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
// GenBlkBrick
for(var v0 in v2.prototype){
// GenBlkBrick
for(var v0 in v2.prototype){
var v6 = (function (v1){
(this.id) = v1;
(this.disposed) = false;
});
(v6.prototype.renderTransparentSorted) = (function (v1){
return v6.renderSorted(v1, this._transparentSortCompareFn, this._scene.activeCamera, true);
});
}
function v7(v1, v2, v3){
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
(v4) += ((v1(v3)) + (v2(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
}
// GenBlkBrick
while((v8) != (0)){
var v9 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v3, v8);
});
}
Array.prototype.reduce.call(v2, v3, v8);
