var v0 = (function (v1, v2, v3){
'use strict';
var v4 = v3(88);
var v5 = v3(39);
var v6 = v3(89);
var v7 = ({screenX : null, screenY : null, clientX : null, clientY : null, ctrlKey : null, shiftKey : null, altKey : null, metaKey : null, getModifierState : v6, button : (function (v8){
var v9 = v8.button;
if(('which') in (v8)){
return v9;
}
return ((v9) === (2)) ? (2) : (((v9) === (4)) ? (1) : (0));
}), buttons : null, relatedTarget : (function (v8){
return (v8.relatedTarget) || (((v8.fromElement) === (v8.srcElement)) ? (v8.toElement) : (v8.fromElement));
}), pageX : (function (v8){
return (('pageX') in (v8)) ? (v8.pageX) : ((v8.clientX) + (v5.currentScrollLeft));
}), pageY : (function (v8){
return (('pageY') in (v8)) ? (v8.pageY) : ((v8.clientY) + (v5.currentScrollTop));
})});
function v10(v11, v12, v13, v14){
v4.call(this, v11, v12, v13, v14);
}
v4.augmentClass(v10, v7);
(v1.exports) = v10;
});
(v0.prototype.visitCall) = (function (v1){
return v1.update(this.visit(v1.obj), this.visitMany(v1.args));
});
(v0.BONE_POSE) = "bonePose";
(function (){
(this.stepBackward) = (function (){
(this.$tokenIndex) -= 1;
while((this.$tokenIndex) < (0)){
(this.$row) -= 1;
if((this.$row) < (0)){
(this.$row) = 0;
return null;
}
(this.$rowTokens) = this.$session.getTokens(this.$row);
(this.$tokenIndex) = (this.$rowTokens.length) - (1);
}
return this.$rowTokens[this.$tokenIndex];
});
(this.stepForward) = (function (){
(this.$tokenIndex) += 1;
var v0;
while((this.$tokenIndex) >= (this.$rowTokens.length)){
(this.$row) += 1;
if(! v0){
(v0) = this.$session.getLength();
}
if((this.$row) >= (v0)){
(this.$row) = (v0) - (1);
return null;
}
(this.$rowTokens) = this.$session.getTokens(this.$row);
(this.$tokenIndex) = 0;
}
return this.$rowTokens[this.$tokenIndex];
});
(this.getCurrentToken) = (function (){
return this.$rowTokens[this.$tokenIndex];
});
(this.getCurrentTokenRow) = (function (){
return this.$row;
});
(this.getCurrentTokenColumn) = (function (){
var v1 = this.$rowTokens;
var v2 = this.$tokenIndex;
var v3 = v1[v2].start;
if((v3) !== (undefined)){
return v3;
}
(v3) = 0;
while((v2) > (0)){
(v2) -= 1;
(v3) += v1[v2].value.length;
}
return v3;
});
}).call(v0.prototype);
// GenBlkBrick
for(var v1 = 0;(v1) < (20);v1++){
// GenBlkBrick
for((v2) = 0;(v2) < (16);(v2) = (v2) + (1)){
if((v2) < (20)){
break ;
}
}
}
(v3) = (v1) ? (v0(v2, v1)) : (('') + (Math.round(v2))).split('.');
var v4 = (v3[1]) === (v0());
do {
(v4) = ! v4;
}while(v4)
