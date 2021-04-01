var v0 = (function (v1){
var v2 = ({ZERO : "zero", ONE : "one", TWO : "two", FEW : "few", MANY : "many", OTHER : "other"});
v1.value("$locale", ({"DATETIME_FORMATS" : ({"AMPMS" : [], "DAY" : [], "MONTH" : [], "SHORTDAY" : [], "SHORTMONTH" : [], "fullDate" : "EEEE, d. MMMM y", "longDate" : "d. MMMM y", "medium" : "dd.MM.yyyy HH:mm:ss", "mediumDate" : "dd.MM.yyyy", "mediumTime" : "HH:mm:ss", "short" : "dd.MM.yy HH:mm", "shortDate" : "dd.MM.yy", "shortTime" : "HH:mm"}), "NUMBER_FORMATS" : ({"CURRENCY_SYM" : "\u20ac", "DECIMAL_SEP" : ",", "GROUP_SEP" : ".", "PATTERNS" : []}), "id" : "de-de", "pluralCat" : (function (v3){
if((v3) == (1)){
return v2.ONE;
}
return v2.OTHER;
})}));
});
var v1 = (function (v1, v2, v3){
var v4 = v3(396), v5 = v3(176).concat("length", "prototype");
(v2.f) = (Object.getOwnPropertyNames) || ((function (v1){
return v4(v1, v5);
}));
});
(v2) = (function (){
v0();
v1();
});
(v1.prototype.insert) = (function (v1, v2){
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
(this._root) = v0(v5);
return v5;
});
var v3 = (function (){
(this.features) = [];
this.changed();
});
function v4(v1, v2){
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
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
(v0.formatDijitFormWidget) = v4;
// GenBlkBrick
for(var v0 in v0.prototype){
(v0.prototype.attachToMesh) = (function (v1){
(this._attachedMesh) = v1;
});
function v5(v1){
return v0(v1, 0, v1.length);
}
}
