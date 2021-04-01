var v0 = (function (v1){
var v2 = v1.length, v3 = v1[0];
(this.north) = (this.south) = v3.lat;
(this.east) = (this.west) = v3.lon;
for(var v4 = 1;(v4) < (v2);v4++){
this.encloseLocation(v1[v4]);
}
});
function v1(v1, v2, v3){
var v4 = ({'mm' : (v2) ? ('хвилина_хвилини_хвилин') : ('хвилину_хвилини_хвилин'), 'hh' : (v2) ? ('година_години_годин') : ('годину_години_годин'), 'dd' : 'день_дні_днів', 'MM' : 'місяць_місяці_місяців', 'yy' : 'рік_роки_років'});
if((v3) === ('m')){
return (v2) ? ('хвилина') : ('хвилину');
}else {
if((v3) === ('h')){
return (v2) ? ('година') : ('годину');
}else {
return ((v1) + (' ')) + (v0(v4[v3], + v1));
}
}
}
Object.defineProperty(Array.prototype, "map", ({value : v0, writable : true, enumerable : false, configurable : true}));
var v2 = (function (v1, v2, v3){
var v4 = v3(153);
if((! v4) || (! v4.now)){
(v4) = Date;
}
var v6 = v4.now.bind(v4);
(v1.exports) = v6;
});
// GenBlkBrick
while((v0) && (v1)){
var v3 = (function (v1){
return (! v1.start.isCertain('month')) && (! v1.start.isCertain('weekday'));
});
(v3.prototype.dispose) = (function (){
this._shadowMap.dispose();
if(this._shadowMap2){
this._shadowMap2.dispose();
}
if(this._downSamplePostprocess){
this._downSamplePostprocess.dispose();
}
if(this._boxBlurPostprocess){
this._boxBlurPostprocess.dispose();
}
});
}
// GenBlkBrick
for(var v0 in v2){
(v1.prototype) = v2.prototype;
}
(v3.prototype.onSamplerPreview) = (function (v1, v2){
if((v3.kolorPicker) != (this)){
return;
}
this.element.css('background-color', v2);
(v2) = v3.getColor();
this.changeColor(v2);
});
// GenBlkBrick
while((v0) && (v0.firstChild)){
var v4 = (function (v1){
var v2 = this, v3 = false, v4;
if(((v1.node.parent) !== (v2.rootNode)) && (v1.node.isLeaf)){
(v4) = v1.node;
while(! v3){
(v4) = v2.nodeMap[v4.parent];
if((v4.parent) === (v2.rootNode)){
(v3) = v4.id;
}
}
}
return v3;
});
}
