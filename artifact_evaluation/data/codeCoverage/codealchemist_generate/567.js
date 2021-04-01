var v0 = (function (){
this.set(this.y, - this.x);
return this;
});
(v0.fn.plugin2) = (function (){
return 'plugin2';
});
// GenBlkBrick
for((v1) = 2;(v1) <= (v1);++v1){
if((v1) < (20)){
break ;
}
var v2 = (function (){
return this.a.b.Y();
});
}
var v3 = (function (v1, v2){
this.unionExtent(v1.getApproximateExtent(v2));
});
// GenBlkBrick
while(typeof 11){
(function (){
(this.execute) = (function (v0){
var v1 = v0.args[0];
(this.$doc) = v0.args[1];
this.$undoStack.push(v1);
(this.$redoStack) = [];
});
(this.undo) = (function (v2){
var v1 = this.$undoStack.pop();
var v3 = null;
if(v1){
(v3) = this.$doc.undoChanges(v1, v2);
this.$redoStack.push(v1);
}
return v3;
});
(this.redo) = (function (v2){
var v1 = this.$redoStack.pop();
var v4 = null;
if(v1){
(v4) = this.$doc.redoChanges(v1, v2);
this.$undoStack.push(v1);
}
return v4;
});
(this.reset) = (function (){
(this.$undoStack) = [];
(this.$redoStack) = [];
});
(this.hasUndo) = (function (){
return (this.$undoStack.length) > (0);
});
(this.hasRedo) = (function (){
return (this.$redoStack.length) > (0);
});
}).call(v0.prototype);
}
(v0.prototype.removeNode) = (function (v1){
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
(this._root) = v3(v2);
return v1;
});
// GenBlkBrick
while((v0) < (0)){
(v0.prototype.restart) = (function (v1, v2, v3){
var v4 = this;
var v5 = (function (){
if((v1) && (v1.notebook_path)){
(v4.notebook_model.path) = v1.notebook_path;
}
if((v1) && (v1.kernel_name)){
(v4.kernel_model.name) = v1.kernel_name;
}
(v4.kernel_model.id) = null;
v4.start(v2, v3);
});
this.delete(v5, v5);
});
var v4 = (function (v1, v2, v3, v4){
var v5 = v2.x, v6 = v2.y, v7 = 1, v8 = 0, v9, v10, v11;
while((v9) = this.layoutFunc_(v8)){
(v8) += v7;
(v10) = ~ ~ v9[0];
(v11) = ~ ~ v9[1];
if((Math.min(Math.abs(v10), Math.abs(v11))) >= (v4)){
break ;
}
(v2.x) = (v5) + (v10);
(v2.y) = (v6) + (v11);
if((((((v2.x) + (v2.x0)) < (0)) || (((v2.y) + (v2.y0)) < (0))) || (((v2.x) + (v2.x1)) > (this.w))) || (((v2.y) + (v2.y1)) > (this.h))){
continue ;
}
if((! v3) || (! this.cloudCollide(v2, v1, this.w))){
if((! v3) || (this.collideRects(v2, v3))){
var v13 = v2.sprite, v14 = (v2.width) >> (5), v15 = (this.w) >> (5), v16 = (v2.x) - ((v14) << (4)), v17 = (v16) & (0x7f), v18 = (32) - (v17), v19 = (v2.y1) - (v2.y0), v20 = (((v2.y) + (v2.y0)) * (v15)) + ((v16) >> (5)), v21;
for(var v22 = 0;(v22) < (v19);v22++){
(v21) = 0;
for(var v23 = 0;(v23) <= (v14);v23++){
(v1[(v20) + (v23)]) |= ((v21) << (v18)) | (((v23) < (v14)) ? (((v21) = v13[((v22) * (v14)) + (v23)]) >>> (v17)) : (0));
}
(v20) += v15;
}
delete v2.sprite;
return true;
}
}
}
return false;
});
}
(v1) = ((v1) | ((v1) << (4))) & (252645135);
