var v0 = (function (v1, v2){
var v3 = [], v4, v5, v6;
for(((v5) = 0, (v6) = (v2) || (0), (v4) = v1.length);(v6) < (v4);(v5++, v6++)){
(v3[v5]) = v1[v6];
}
return v3;
});
var v1 = (function (v1){
v0(v1, v1);
function v1(){
v1.apply(this, arguments);
}
return v1;
})(Error);
(v1.prototype) = Object.create(v0.prototype);
(v1.parse) = v0.parse;
// GenBlkBrick
while((v0) && (v0.firstChild)){
var v2 = (function (v1){
(v1.VendorPrefixes) = [];
});
var v3 = (function (v1, v2, v3){
var v4 = v3(34), v5 = v3(9);
var Set = v4(v5, 'Set');
(v1.exports) = Set;
});
}
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
v2("person", "people");
v2("man", "men");
v2("child", "children");
v2("sex", "sexes");
v2("move", "moves");
v2("cow", "kine");
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
(v1.prototype.checkInputs) = (function (){
if(this._leftjoystick){
var v1 = this.camera;
var v2 = (v1._computeLocalCameraSpeed()) * (50);
var v3 = v4.Matrix.RotationYawPitchRoll(v1.rotation.y, v1.rotation.x, 0);
var v5 = v4.Vector3.TransformCoordinates(new v4.Vector3((this._leftjoystick.deltaPosition.x) * (v2), (this._leftjoystick.deltaPosition.y) * (v2), (this._leftjoystick.deltaPosition.z) * (v2)), v3);
(v1.cameraDirection) = v1.cameraDirection.add(v5);
(v1.cameraRotation) = v1.cameraRotation.addVector3(this._rightjoystick.deltaPosition);
if(! this._leftjoystick.pressed){
(this._leftjoystick.deltaPosition) = this._leftjoystick.deltaPosition.scale(0.9);
}
if(! this._rightjoystick.pressed){
(this._rightjoystick.deltaPosition) = this._rightjoystick.deltaPosition.scale(0.9);
}
}
});
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v1(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v1(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
});
