var v0 = (function (){
if(this._onlyTests.length){
(this.tests) = this._onlyTests;
(this.suites) = [];
}else {
(this.tests) = [];
this._onlySuites.forEach((function (v1){
if(v1.hasOnly()){
v1.filterOnly();
}
}));
var v2 = this._onlySuites;
(this.suites) = this.suites.filter((function (v3){
return ((v2.indexOf(v3)) !== (- 1)) || (v3.filterOnly());
}));
}
return ((this.tests.length) > (0)) || ((this.suites.length) > (0));
});
(v0.prototype.updateColor) = (function (){
var v1 = this.getColor();
this.elements.preview.css('background-color', v1);
this.elements.input.val(v1);
this.kolorPicker.changeColor(v1);
});
// GenBlkBrick
for(;(v0) < (10);){
var v1 = (function (v1){
delete this['!offering'];
return this.parent_onInteractionEnding(v1);
});
var v2 = (function (v1, v2){
if(! v1){
return this.unsubscribeAll();
}
var v3 = false;
for(var v4 = 0, v5 = this.subscribers.length;(v4) < (v5);++v4){
var v6 = this.subscribers[v4];
if((v6) && (v6.contains(v1, v2))){
this._delete(v4);
(v3) = true;
}
}
return v3;
});
}
var v3 = (function (v1, v2, v3){
var v4 = v3(1625), v5 = v3(1632);
(v1.exports) = (function (v1, v2){
var v3 = v5(v1, v2);
return (v4(v3)) ? (v3) : (void 0);
});
});
// GenBlkBrick
for(var v0 in v3){
function v4(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v3(v7)]) = v0(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
function v5(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v3(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v4(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
}
Object.defineProperty(Array.prototype, "every", ({value : v4, writable : true, enumerable : false, configurable : true}));
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
// GenBlkBrick
for(var v0 in v3.prototype){
// GenBlkBrick
for(var v6 = 0;(v6) < (100);v6++){
(v3.DATA_VERSION_4_5) = "4.5";
}
}
