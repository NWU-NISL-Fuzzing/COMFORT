var v0 = (function (v1){
(v1.seriesTypes.scatter.prototype.pointClass) = v1.extendClass(v1.Point, ({init : (function (v2, v3){
(this.series) = v2;
(this.x) = v3[0];
(this.y) = v3[1];
return this;
}), pointAttr : ({})}));
(v1.seriesTypes.scatter.prototype.drawPoints) = (function (){
var v4 = this.points, v5 = this.chart.renderer, v6 = this.options.marker.radius, v7 = [], v8, v9 = v4.length, v10, v11 = this.layers;
if(! v11){
(v11) = (this.layers) = [];
}
while(v9--){
(v10) = v4[v9];
(v8) = Math.round((v10.plotY) / (v6));
if(! v7[v8]){
(v7[v8]) = [];
}
v7[v8].push(v10);
}
(v9) = v7.length;
while(v9--){
if(v7[v9]){
v7[v9].sort((function (v13, v14){
return (v13.plotX) - (v14.plotX);
}));
}
}
var v15 = [], v16 = 0, v17, v18 = v4.length, v19, v20, v21;
while(v18){
(v8) = [];
for((v9) = v16;(v9) < (v7.length);(v9) += 2){
(v17) = v7[v9];
if(v17){
(v21) = v17.length;
(v20) = null;
while(v21--){
(v19) = v17[v21].plotX;
if(((v20) === (null)) || (((v20) - (v19)) >= ((v6) * (2)))){
v8.push(v17[v21]);
v17.splice(v21, 1);
v18--;
(v20) = v19;
}
}
}
}
if(v8.length){
v15.push(v8);
}
if((! v8.length) && (! v16)){
(v16) = 1;
}
}
(v9) = v15.length;
var v22 = [];
while(v9--){
var v23 = [], v24;
(v8) = v15[v9];
for((v21) = 0;(v21) < (v8.length);(v21) += 1){
(v19) = Math.round(v8[v21].plotX);
(v24) = Math.round(v8[v21].plotY);
v23.push('M', (v19) - (v6), (v24) - (v6), 'L', (v19) + (v6), (v24) - (v6), (v19) + (v6), (v24) + (v6), (v19) - (v6), (v24) + (v6));
}
v22.push(v23);
}
for((v9) = 0;(v9) < (v22.length);(v9) += 1){
if(! v11[v9]){
(v11[v9]) = v5.path(v22[v9]).attr(({fill : this.pointAttribs().fill})).add(this.markerGroup);
}else {
v11[v9].attr(({d : v22[v9]}));
}
}
(v11.length) = v9;
});
});
var v1 = (function (v1, v2, v3, v4){
"use strict";
var v5 = v2.extend("sap.m.sample.ColorPalette.ColorPalette", ({handleColorSelect : (function (v6){
v4.show(((("Color Selected: value - ") + (v6.getParameter("value"))) + (", \n defaultAction - ")) + (v6.getParameter("defaultAction")));
})}));
return v5;
});
var v2 = (function (v1, v2, v3, v4){
var v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19;
(v5) = (v9) = (v10) = 0;
(v12) = Math.floor(v1);
(v13) = Math.floor(v2);
(v14) = Math.floor(v3);
(v6) = (v1) - (v12);
(v7) = (v2) - (v13);
(v8) = (v3) - (v14);
(v15) = (v6) !== (0);
(v16) = (v7) !== (0);
(v17) = (v8) !== (0);
if(((v15) && (v16)) && (v17)){
for((v18) = 0;(v18) < (2);(v18) += 1){
for((v19) = 0;(v19) < (2);(v19) += 1){
(v11) = this.orientation.convertIndexToOffsetNative((v12) + (v18), (v13) + (v19), v14);
(v9) = (this.getVoxelAtOffset(v11, v4, (v12) + (v18), (v13) + (v19), v14)) * ((1) - (v8));
(v11) = this.orientation.convertIndexToOffsetNative((v12) + (v18), (v13) + (v19), (v14) + (1));
(v10) = (this.getVoxelAtOffset(v11, v4, (v12) + (v18), (v13) + (v19), (v14) + (1))) * (v8);
(this.interpFirstPass[v18][v19]) = (v9) + (v10);
}
}
(this.interpSecondPass[0]) = ((this.interpFirstPass[0][0]) * ((1) - (v7))) + ((this.interpFirstPass[0][1]) * (v7));
(this.interpSecondPass[1]) = ((this.interpFirstPass[1][0]) * ((1) - (v7))) + ((this.interpFirstPass[1][1]) * (v7));
(v5) = ((this.interpSecondPass[0]) * ((1) - (v6))) + ((this.interpSecondPass[1]) * (v6));
}else {
if(((v15) && (v16)) && (! v17)){
for((v18) = 0;(v18) < (2);(v18) += 1){
(v11) = this.orientation.convertIndexToOffsetNative((v12) + (v18), v13, v14);
(v9) = (this.getVoxelAtOffset(v11, v4, (v12) + (v18), v13, v14)) * ((1) - (v7));
(v11) = this.orientation.convertIndexToOffsetNative((v12) + (v18), (v13) + (1), v14);
(v10) = (this.getVoxelAtOffset(v11, v4, (v12) + (v18), (v13) + (1), v14)) * (v7);
(this.interpSecondPass[v18]) = (v9) + (v10);
}
(v5) = ((this.interpSecondPass[0]) * ((1) - (v6))) + ((this.interpSecondPass[1]) * (v6));
}else {
if(((v15) && (! v16)) && (v17)){
for((v18) = 0;(v18) < (2);(v18) += 1){
(v11) = this.orientation.convertIndexToOffsetNative((v12) + (v18), v13, v14);
(v9) = (this.getVoxelAtOffset(v11, v4, (v12) + (v18), v13, v14)) * ((1) - (v8));
(v11) = this.orientation.convertIndexToOffsetNative((v12) + (v18), v13, (v14) + (1));
(v10) = (this.getVoxelAtOffset(v11, v4, (v12) + (v18), v13, (v14) + (1))) * (v8);
(this.interpSecondPass[v18]) = (v9) + (v10);
}
(v5) = ((this.interpSecondPass[0]) * ((1) - (v6))) + ((this.interpSecondPass[1]) * (v6));
}else {
if(((! v15) && (v16)) && (v17)){
for((v19) = 0;(v19) < (2);(v19) += 1){
(v11) = this.orientation.convertIndexToOffsetNative(v12, (v13) + (v19), v14);
(v9) = (this.getVoxelAtOffset(v11, v4, v12, (v13) + (v19), v14)) * ((1) - (v8));
(v11) = this.orientation.convertIndexToOffsetNative(v12, (v13) + (v19), (v14) + (1));
(v10) = (this.getVoxelAtOffset(v11, v4, v12, (v13) + (v19), (v14) + (1))) * (v8);
(this.interpSecondPass[v19]) = (v9) + (v10);
}
(v5) = ((this.interpSecondPass[0]) * ((1) - (v7))) + ((this.interpSecondPass[1]) * (v7));
}else {
if(((! v15) && (! v16)) && (v17)){
(v11) = this.orientation.convertIndexToOffsetNative(v12, v13, v14);
(v9) = (this.getVoxelAtOffset(v11, v4, v12, v13, v14)) * ((1) - (v8));
(v11) = this.orientation.convertIndexToOffsetNative(v12, v13, (v14) + (1));
(v10) = (this.getVoxelAtOffset(v11, v4, v12, v13, (v14) + (1))) * (v8);
(v5) = (v9) + (v10);
}else {
if(((! v15) && (v16)) && (! v17)){
(v11) = this.orientation.convertIndexToOffsetNative(v12, v13, v14);
(v9) = (this.getVoxelAtOffset(v11, v4, v12, v13, v14)) * ((1) - (v7));
(v11) = this.orientation.convertIndexToOffsetNative(v12, (v13) + (1), v14);
(v10) = (this.getVoxelAtOffset(v11, v4, v12, (v13) + (1), v14)) * (v7);
(v5) = (v9) + (v10);
}else {
if(((v15) && (! v16)) && (! v17)){
(v11) = this.orientation.convertIndexToOffsetNative(v12, v13, v14);
(v9) = (this.getVoxelAtOffset(v11, v4, v12, v13, v14)) * ((1) - (v6));
(v11) = this.orientation.convertIndexToOffsetNative((v12) + (1), v13, v14);
(v10) = (this.getVoxelAtOffset(v11, v4, (v12) + (1), v13, v14)) * (v6);
(v5) = (v9) + (v10);
}else {
(v5) = this.getVoxelAtOffset(this.orientation.convertIndexToOffsetNative(v1, v2, v3), v4, v1, v2, v3);
}
}
}
}
}
}
}
return v5;
});
Object.defineProperty(v1.prototype, "captureFrameTime", ({get : (function (){
return this._captureFrameTime;
}), set : (function (v2){
(this._captureFrameTime) = v2;
}), enumerable : true, configurable : true}));
(v0.prototype.contains) = (function (v1){
return (v1) in (this._entries);
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
(v3.prototype.shiftDown) = (function (v1){
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
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
// GenBlkBrick
for(var v0 in v1.prototype){
// GenBlkBrick
for(var v0 = v1;(v0) < (v2);v0++){
var v4 = (function (){
this.template('app.js', 'app.js', this.context);
this.template('client.js', 'client.js', this.context);
this.template('server.js', 'server.js', this.context);
this.template('start.js', 'start.js', this.context);
this.template('webpack.config.js', 'webpack.config.js', this.context);
this.template('webpack.config.production.js', 'webpack.config.production.js', this.context);
this.template('webpack-dev-server.js', 'webpack-dev-server.js', this.context);
this.directory('actions', 'actions', this.context);
this.directory('components', 'components', this.context);
this.directory('configs', 'configs', this.context);
this.directory('stores', 'stores', this.context);
this.template('_buildgitignore', 'build/js/.gitignore', this.context);
});
(v4.writable) = true;
}
}
