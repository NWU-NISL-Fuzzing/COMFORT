var v0 = (function (v1){
(this.printerparams) = v1;
(this.oldt) = "";
this.fireChanged();
});
var v1 = (function (v1, v2){
if(v1.assignee){
if((v1.assignee.login) !== (v2)){
return false;
}
}
if((v1.user.login) !== (v2)){
return false;
}
return true;
});
(v0.prototype.reset) = (function (){
(this.length) = 0;
this._duplicateId++;
});
var v2 = (function (v1){
return ("") + (v1);
});
(v1.DATA_VERSION_2_3) = "2.3";
(v2.prototype.incrementReferences) = (function (){
this._references++;
});
// GenBlkBrick
for((v3) = 0;(v3) < (10);v3++){
(v1.prototype.lookupTiddlerInMap) = (function (v1, v2){
var v3 = this.listWidget.wiki.getTiddler(v1);
if(v3){
var v4 = v3.fields["draft.of"];
if((v4) && (this.map.positions[v4])){
return this.map.positions[v4];
}
}
if(this.map.positions[v1]){
return this.map.positions[v1];
}
var v5;
switch(this.map.positionNew){
}
(v5) = (v5) || (({x : 0, y : 0, w : 100, h : 100}));
(this.map.positions[v1]) = v5;
return v5;
});
}
// GenBlkBrick
for(var v4 = 0;(v4) < (500);v4++){
// GenBlkBrick
for(((v0) = v1, (v2) = v3);(v0) < (v2);(v0) += v4){
var v5 = (function (v1, v2){
var v3 = this;
var v4 = v3.layersByLevel[v1];
if((! v4) || ((v4.length) === (0))){
return false;
}
var v5 = 0;
for(var v6 = 0;(v6) < (v4.length);v6++){
var v7 = v4[v6];
if((v7.reqs) > (0)){
return false;
}
if(v7.invalid){
return false;
}
(v5) += v7.eles.length;
}
if((v5) !== (v2.length)){
return false;
}
return true;
});
}
}
