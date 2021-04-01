var v0 = (function (){
this.addSlider('size', 'Size', 0, 1, 0.5, 0.01);
this.addSlider('amount', 'Amount', 0, 1, 0.5, 0.01);
});
var v1 = (function (v1){
var v2 = ({});
for(var v3 = 0;(v3) < (v1.length);v3++){
v0(v1[v3], v2);
}
return v2;
});
function v2(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v0(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v1(v1.left, v1.left.right);
(v1) = v0(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v1(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v0(v1.right, v1.right.left);
(v1) = v1(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v2(v1.left, false);
v2(v1.right, true);
(v1) = v2(v1, true);
(v1) = v2(v1, false);
return v1;
}
function v3(v1, v2, v3, v4, v5){
(v3) = v0(v3);
if(! v4){
(v4) = v7.base;
}
var v8;
(function v9(v1, v10, v11){
if((v1.start) > (v2)){
return;
}
var v12 = (v11) || (v1.type);
if((((v1.end) <= (v2)) && ((! v8) || ((v8.node.end) < (v1.end)))) && (v3(v12, v1))){
(v8) = new v2(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v1(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
// GenBlkBrick
for((v5) = 0;(v5) < (4);v5++){
// GenBlkBrick
for(var v6 = 0;(v6) < (2);v6++){
// GenBlkBrick
for(var v7 = 0;(v7) < (5);++v7){
for((v8) = (v7) - (1);(v8) >= (0);--v8){
(v2[v8]) = 0;
}
(v7) += (v7) >> (16);
}
}
(function (){
v4(/$/, "s");
v4(/s$/i, "s");
v4(/(ax|test)is$/i, "$1es");
v4(/(octop|vir)us$/i, "$1i");
v4(/(octop|vir)i$/i, "$1i");
v4(/(alias|status)$/i, "$1es");
v4(/(bu)s$/i, "$1ses");
v4(/(buffal|tomat)o$/i, "$1oes");
v4(/([ti])a$/i, "$1a");
v4(/([ti])um$/i, "$1a");
v4(/sis$/i, "ses");
v4(/ses$/i, "ses");
v4(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v4(/(hive)$/i, "$1s");
v4(/([^aeiouy]|qu)y$/i, "$1ies");
v4(/(x|ch|ss|sh)$/i, "$1es");
v4(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v4(/([m|l])ouse$/i, "$1ice");
v4(/([m|l])ice$/i, "$1ice");
v4(/^(ox)$/i, "$1en");
v4(/^(ox)en$/i, "$1en");
v4(/(quiz)$/i, "$1zes");
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
}
// GenBlkBrick
for((v9) = 0;(v9) < ((v1) || ("").length);v9++){
var v10 = ((- v5) - (Math.sqrt(v8))) / ((2) * (v9));
}
while(((Date.now()) - (v5)) < (v10)){
}
