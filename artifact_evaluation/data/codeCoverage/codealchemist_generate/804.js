var v0 = (function (v1){
return v1._visit(this, (function (){
this.body._walk(v1);
}));
});
(v0.prototype.updateOnTool) = (function (v1){
var v2 = (v1.toolOptionsList) && ((v1.toolOptionsList.indexOf(this.optionName)) !== (- 1)), v3 = (! this.showOnEditMode) || (v1.isEditing), v4 = (v2) && (v3);
if(v4){
(this.active) = true;
this.showControls();
if(this.onActivateTool){
this.onActivateTool(v1);
}
}else {
(this.active) = false;
this.hideControls(v1.forceOptionsHide);
}
});
(v0.ROTATE) = "rotate";
var v1 = (function (v1, v2, v3){
var v4 = v3(257).Symbol;
(v1.exports) = v4;
});
// GenBlkBrick
for((v2) = 0;(v2) < ((v1) || ("").length);v2++){
var v3 = (function (){
(this._scrollParents) = [];
(this._scrollPos) = ({top : 0, left : 0});
var v1 = this;
while(v1){
if((v1.style) && (((v1.style.overflowY) === ('scroll')) || ((v1.style.overflowX) === ('scroll')))){
this._scrollParents.push(v1);
}
(v1) = v1.parentNode;
}
});
}
Array.prototype.reduce.call(v1, v3, v2);
v3(/([m|l])ouse$/i, "$1ice");
if((v2) > (1)){
(v4) = false;
}
