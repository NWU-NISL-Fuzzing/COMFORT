var v0 = (function (v1, v2){
if(! v1){
return null;
}
return this.decryptKeyAndMessage_(v1, this.eskPackets[v2]);
});
var v1 = (function (){
this.require([]);
});
(v0.formatPropertyName) = v1;
(v0.prototype) = new v1();
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v1(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v0(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
(v0.SupportedGeometries) = ({LINE_STRING : 'LINESTRING', MULTI_LINE_STRING : 'MULTILINESTRING', POLYGON : 'POLYGON', MULTI_POLYGON : 'MULTIPOLYGON', POINT : 'POINT', MULTI_POINT : 'MULTIPOINT', TRIANGLE : 'TRIANGLE', GEOMETRY_COLLECTION : 'GEOMETRYCOLLECTION'});
var v3 = (function (v1, v2, v3){
v3(v1.callee, v2, "Expression");
if(v1.arguments){
for(var v4 = 0;(v4) < (v1.arguments.length);++v4){
v3(v1.arguments[v4], v2, "Expression");
}
}
});
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
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
