var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(72), v5 = v3(1910), v6 = v3(24);
(v1.exports) = ({create : v6((function (v1){
return v4.verify(({name : "Vault Manager", client : v1.client})).then((function (){
return new v5(v1);
}));
})), VERSION : "3.28.0"});
});
v0(/ses$/i, "ses");
var v1 = (function (){
function v1(v1, v2){
(this.minimum) = v1;
(this.maximum) = v2;
(this._isLocked) = false;
(this.boundingBox) = new v3.BoundingBox(v1, v2);
(this.boundingSphere) = new v3.BoundingSphere(v1, v2);
}
Object.defineProperty(v1.prototype, "isLocked", ({get : (function (){
return this._isLocked;
}), set : (function (v5){
(this._isLocked) = v5;
}), enumerable : true, configurable : true}));
(v1.prototype.update) = (function (v6){
if(this._isLocked){
return;
}
this.boundingBox._update(v6);
this.boundingSphere._update(v6);
});
(v1.prototype.centerOn) = (function (v7, v8){
(this.minimum) = v7.subtract(v8);
(this.maximum) = v7.add(v8);
(this.boundingBox) = new v3.BoundingBox(this.minimum, this.maximum);
(this.boundingSphere) = new v3.BoundingSphere(this.minimum, this.maximum);
return this;
});
(v1.prototype.isInFrustum) = (function (v9){
if(! this.boundingSphere.isInFrustum(v9)){
return false;
}
return this.boundingBox.isInFrustum(v9);
});
Object.defineProperty(v1.prototype, "diagonalLength", ({get : (function (){
var v10 = this.boundingBox;
var v11 = v10.maximumWorld.subtract(v10.minimumWorld);
return v11.length();
}), enumerable : true, configurable : true}));
(v1.prototype.isCompletelyInFrustum) = (function (v9){
return this.boundingBox.isCompletelyInFrustum(v9);
});
(v1.prototype._checkCollision) = (function (v12){
return v12._canDoCollision(this.boundingSphere.centerWorld, this.boundingSphere.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld);
});
(v1.prototype.intersectsPoint) = (function (v13){
if(! this.boundingSphere.centerWorld){
return false;
}
if(! this.boundingSphere.intersectsPoint(v13)){
return false;
}
if(! this.boundingBox.intersectsPoint(v13)){
return false;
}
return true;
});
(v1.prototype.intersects) = (function (v14, v15){
if((! this.boundingSphere.centerWorld) || (! v14.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v14.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v14.boundingBox)){
return false;
}
if(! v15){
return true;
}
var v16 = this.boundingBox;
var v17 = v14.boundingBox;
if(! v0(v16.directions[0], v16, v17)){
return false;
}
if(! v0(v16.directions[1], v16, v17)){
return false;
}
if(! v0(v16.directions[2], v16, v17)){
return false;
}
if(! v0(v17.directions[0], v16, v17)){
return false;
}
if(! v0(v17.directions[1], v16, v17)){
return false;
}
if(! v0(v17.directions[2], v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[0], v17.directions[0]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[0], v17.directions[1]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[0], v17.directions[2]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[1], v17.directions[0]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[1], v17.directions[1]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[1], v17.directions[2]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[2], v17.directions[0]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[2], v17.directions[1]), v16, v17)){
return false;
}
if(! v0(v3.Vector3.Cross(v16.directions[2], v17.directions[2]), v16, v17)){
return false;
}
return true;
});
return v1;
})();
var v2 = (function v2(v1){
if((! v1) || ((v0.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v1.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v1.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v1.call(v1, v6));
});
function v3(v1, v2){
var v3 = ({dx : v1.v, dv : v2(v1)}), v5 = v1(v1, (v2) * (0.5), v3), v7 = v1(v1, (v2) * (0.5), v5), v8 = v1(v1, v2, v7), v9 = ((1.0) / (6.0)) * (((v3.dx) + ((2.0) * ((v5.dx) + (v7.dx)))) + (v8.dx)), v10 = ((1.0) / (6.0)) * (((v3.dv) + ((2.0) * ((v5.dv) + (v7.dv)))) + (v8.dv));
(v1.x) = (v1.x) + ((v9) * (v2));
(v1.v) = (v1.v) + ((v10) * (v2));
return v1;
}
(v3.escapeString) = v2;
(function (){
v1(/$/, "s");
v1(/s$/i, "s");
v1(/(ax|test)is$/i, "$1es");
v1(/(octop|vir)us$/i, "$1i");
v1(/(octop|vir)i$/i, "$1i");
v1(/(alias|status)$/i, "$1es");
v1(/(bu)s$/i, "$1ses");
v1(/(buffal|tomat)o$/i, "$1oes");
v1(/([ti])a$/i, "$1a");
v1(/([ti])um$/i, "$1a");
v1(/sis$/i, "ses");
v1(/ses$/i, "ses");
v1(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v1(/(hive)$/i, "$1s");
v1(/([^aeiouy]|qu)y$/i, "$1ies");
v1(/(x|ch|ss|sh)$/i, "$1es");
v1(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v1(/([m|l])ouse$/i, "$1ice");
v1(/([m|l])ice$/i, "$1ice");
v1(/^(ox)$/i, "$1en");
v1(/^(ox)en$/i, "$1en");
v1(/(quiz)$/i, "$1zes");
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
v2("person", "people");
v2("man", "men");
v2("child", "children");
v2("sex", "sexes");
v2("move", "moves");
v2("cow", "kine");
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
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
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
