// GenBlkBrick
while(typeof 11){
var v0 = (function (v1, v2, v3){
'use strict';
var v4 = v1('./subtypes');
(v2.exports) = (function (v5, v6){
var v7 = v5.cd;
var v8 = v5.xaxis;
var v9 = v5.yaxis;
var v10 = [];
var v11 = v7[0].trace;
var v12;
var v13;
var v14;
var v15;
var v16 = (! v4.hasMarkers(v11)) && (! v4.hasText(v11));
if(v16){
return [];
}
if((v6) === (false)){
for((v12) = 0;(v12) < (v7.length);v12++){
(v7[v12].selected) = 0;
}
}else {
for((v12) = 0;(v12) < (v7.length);v12++){
(v13) = v7[v12];
(v14) = v8.c2p(v13.x);
(v15) = v9.c2p(v13.y);
if(((v13.i) !== (null)) && (v6.contains([], false, v12, v5))){
v10.push(({pointNumber : v13.i, x : v8.c2d(v13.x), y : v9.c2d(v13.y)}));
(v13.selected) = 1;
}else {
(v13.selected) = 0;
}
}
}
return v10;
});
});
// GenBlkBrick
for(((v1) = 0, (v1) = v2);(v1) < (v1);++v1){
if((v1) === (6)){
break ;
}
(v1) = (v1) - (2);
}
}
// GenBlkBrick
for(var v2 = 0;(v2) < (12);v2++){
var v3 = (function (v1){
var v2 = ((((((((((((((((((((((((((('attribute vec4 vertexPoint;\n') + ('uniform mat4 mvpMatrix;\n')) + ('uniform float numDays;\n')) + ('uniform vec2 magnitudeRange;\n')) + ('varying float magnitudeWeight;\n')) + ('float normalizeAngle(float angle) {\n')) + ('   float angleDivisions = angle / 360.0;\n')) + ('   return 360.0 * (angleDivisions - floor(angleDivisions));\n')) + ('}\n')) + ('vec3 computePosition(float dec, float ra) {\n')) + ('   float GMST = normalizeAngle(280.46061837 + 360.98564736629 * numDays);\n')) + ('   float GHA = normalizeAngle(GMST - ra);\n')) + ('   float lon = -GHA + 360.0 * step(180.0, GHA);\n')) + ('   float latRad = radians(dec);\n')) + ('   float lonRad = radians(lon);\n')) + ('   float radCosLat = cos(latRad);\n')) + ('   return vec3(radCosLat * sin(lonRad), sin(latRad), radCosLat * cos(lonRad));\n')) + ('}\n')) + ('float normalizeScalar(float value, float minValue, float maxValue){\n')) + ('   return (value - minValue) / (maxValue - minValue);\n')) + ('}\n')) + ('void main() {\n')) + ('   vec3 vertexPosition = computePosition(vertexPoint.x, vertexPoint.y);\n')) + ('   gl_Position = mvpMatrix * vec4(vertexPosition.xyz, 1.0);\n')) + ('   gl_Position.z = gl_Position.w - 0.00001;\n')) + ('   gl_PointSize = vertexPoint.z;\n')) + ('   magnitudeWeight = normalizeScalar(vertexPoint.w, magnitudeRange.x, magnitudeRange.y);\n')) + ('}'), v3 = ((((((((((((('precision mediump float;\n') + ('uniform sampler2D textureSampler;\n')) + ('uniform int textureEnabled;\n')) + ('varying float magnitudeWeight;\n')) + ('const vec4 white = vec4(1.0, 1.0, 1.0, 1.0);\n')) + ('const vec4 grey = vec4(0.5, 0.5, 0.5, 1.0);\n')) + ('void main() {\n')) + ('   if (textureEnabled == 1) {\n')) + ('       gl_FragColor = texture2D(textureSampler, gl_PointCoord);\n')) + ('   }\n')) + ('   else {\n')) + ('       gl_FragColor = mix(white, grey, magnitudeWeight);\n')) + ('   }\n')) + ('}');
v4.call(this, v1, v2, v3, []);
(this.vertexPointLocation) = this.attributeLocation(v1, "vertexPoint");
(this.mvpMatrixLocation) = this.uniformLocation(v1, "mvpMatrix");
(this.numDaysLocation) = this.uniformLocation(v1, "numDays");
(this.magnitudeRangeLocation) = this.uniformLocation(v1, "magnitudeRange");
(this.textureUnitLocation) = this.uniformLocation(v1, "textureSampler");
(this.textureEnabledLocation) = this.uniformLocation(v1, "textureEnabled");
});
}
while((v1--) > (0)){
v0();
}
// GenBlkBrick
while((v0) > (v2)){
var v4 = (function (){
(this.length) = "hi";
});
}
if((v1) > (v2)){
(v1) = v2;
}
Array.prototype.reduce.call(v3, v4, v1);
(v3.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v0(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v0(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v4(v5);
return v5;
});
if((v2) === (1)){
(v5) = (v1) === (0);
}
