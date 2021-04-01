var v0 = (function (v1, v2, v3){
var v4 = v3(1875), v5 = v3(137);
(v1.exports) = (function (v2, v3, v6, v7, v8){
return ((v2) === (v3)) || (((((null) == (v2)) || ((null) == (v3))) || ((! v5(v2)) && (! v5(v3)))) ? (((v2) != (v2)) && ((v3) != (v3))) : (v4(v2, v3, v6, v7, v1, v8)));
});
});
// GenBlkBrick
for(var v1 = 0;(v1) < (32);v1++){
(v1[1]) = 10;
}
(v0.prototype._handleSelectOnClose) = (function (v1, v2){
if((v2) && ((v2.originalSelect2Event) != (null))){
var v3 = v2.originalSelect2Event;
if(((v3._type) === ('select')) || ((v3._type) === ('unselect'))){
return;
}
}
var v4 = this.getHighlightedResults();
if((v4.length) < (1)){
return;
}
var v5 = v6.GetData(v4[0], 'data');
if((((v5.element) != (null)) && (v5.element.selected)) || (((v5.element) == (null)) && (v5.selected))){
return;
}
this.trigger('select', ({data : v5}));
});
var v2 = (function (v1, v2){
return (v1._curLevel) - (v2._curLevel);
});
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
(this._root) = v2(v2);
return v1;
});
if((v1) < (0)){
(v1) += (2) * (Math.PI);
}
for(var v3 = 0;(v3) <= (v1);v3++){
v0(v3);
}
(v2.default) = v0;
