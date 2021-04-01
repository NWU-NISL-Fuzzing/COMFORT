// GenBlkBrick
for(var v0 = 0;(v0) < (7);v0++){
if((v0) < (20)){
break ;
}
}
(v0) = Math.min(Math.max(0, v0), 20);
var v1 = (function (){
if((this.assembly_step) == (1)){
(this.assembly_step) = 2;
this.setAndBroadcastState('stand1');
this.apiSetTimer('onAssemblyStep', 1100);
}else {
if((this.assembly_step) == (2)){
(this.assembly_step) = 3;
this.setAndBroadcastState('stand2');
this.apiSetTimer('onAssemblyStep', 1100);
}else {
if((this.assembly_step) == (3)){
this.setAndBroadcastState('stand2Hold');
(this.is_assembled) = true;
}
}
}
if(this.auto_build){
if(! this.is_assembled){
if(! this.apiTimerExists('onAssemblyStep')){
this.apiSetTimer('onApplyPart', 1000);
}
}else {
delete this.auto_build;
}
}
});
(v1.prototype.updateControlsFromObject) = (function (v1){
this.collectDataFromObject(v1);
this.updateControls(this.data);
});
if((v0) < (0)){
(v0) = (v0) + (4294967296);
}
function v2(v1, v2, v3, v4){
var v5 = '';
switch(v3){
}
(v5) = ((v1(v1, v4)) + (' ')) + (v5);
return v5;
}
if(v2.toSource){
(v1.toSource) = (function v2(){
return v2.toSource();
});
}
(v2.prototype.removeNode) = (function (v1){
this.shiftDown(v1);
var v2 = v1.parent;
if((v2.left) === (v1)){
(v2.left) = v3;
}else {
if((v2.right) === (v1)){
(v2.right) = v3;
}
}
this.removeLeafNode(v1);
(this._root) = v1(v2);
return v1;
});
