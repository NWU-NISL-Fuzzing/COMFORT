// GenBlkBrick
for((v0) = 0;(v0) < (9);v0++){
var v1 = (function (v1, v2){
if((typeof v1) === ('string')){
(v1) = v1.replace(/^\s+|\s+$/g, '');
if((v2) && (/^[0-9\s]+$/.test(v1))){
(v1) = v1.replace(/\s/g, '');
}
if(this.decimalRegex){
(v1) = v1.replace(this.decimalRegex, '$1.$2');
}
}
return v1;
});
var v2 = (function (v1, v2, v3){
var v4 = (function (v5){
(this.less) = v5;
(this.visitors) = [];
(this.postProcessors) = [];
(this.installedPlugins) = [];
(this.fileManagers) = [];
});
(v4.prototype.addPlugins) = (function (v6){
if(v6){
for(var v7 = 0;(v7) < (v6.length);v7++){
this.addPlugin(v6[v7]);
}
}
});
(v4.prototype.addPlugin) = (function (v8){
this.installedPlugins.push(v8);
v8.install(this.less, this);
});
(v4.prototype.addVisitor) = (function (v9){
this.visitors.push(v9);
});
(v4.prototype.addPostProcessor) = (function (v10, v11){
var v12;
for((v12) = 0;(v12) < (this.postProcessors.length);v12++){
if((this.postProcessors[v12].priority) >= (v11)){
break ;
}
}
this.postProcessors.splice(v12, 0, ({postProcessor : v10, priority : v11}));
});
(v4.prototype.addFileManager) = (function (v13){
this.fileManagers.push(v13);
});
(v4.prototype.getPostProcessors) = (function (){
var v14 = [];
for(var v7 = 0;(v7) < (this.postProcessors.length);v7++){
v14.push(this.postProcessors[v7].postProcessor);
}
return v14;
});
(v4.prototype.getVisitors) = (function (){
return this.visitors;
});
(v4.prototype.getFileManagers) = (function (){
return this.fileManagers;
});
(v2.exports) = v4;
});
}
(v2.prototype.getPass) = (function (v1){
for(var v2 in this._renderPasses){
if((v2) === (v1)){
return this._renderPasses[v1];
}
}
});
{
(v0) = (v0) * (v0);
}
if((v0) && (v1)){
var v2 = 0;
var v3 = v1.length;
while((v2) != (- 1)){
(v2) = v0.indexOf(v1, v2);
if((v2) != (- 1)){
(v2) += v3;
v0++;
}
}
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v3 = Math.floor((v2) / (3600));
if((v3) < (20)){
break ;
}
}
Array.prototype.reduce.call(v1, v2, v3);
// GenBlkBrick
for((v4) = 0;(v4) < (6);v4++){
{
if((v4) == (2)){
(v5) = "";
}
}
}
(v6) = v1(v3, v4, v5);
