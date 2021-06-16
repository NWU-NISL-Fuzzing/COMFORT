var v0 = (function (v1){
if((v1) !== (0)){
return 'nz';
}
if(((1) / (v1)) > (0)){
return 'pos';
}else {
return 'neg';
}
});
// GenBlkBrick
while((v0) < (- 8)){
var v1 = (function (v1){
var v2 = this.elements;
var v3 = v1.x, v4 = v1.y, v5 = v1.z, v6 = v1.w;
(v1.x) = ((((v2[0]) * (v3)) + ((v2[4]) * (v4))) + ((v2[8]) * (v5))) + ((v2[12]) * (v6));
(v1.y) = ((((v2[1]) * (v3)) + ((v2[5]) * (v4))) + ((v2[9]) * (v5))) + ((v2[13]) * (v6));
(v1.z) = ((((v2[2]) * (v3)) + ((v2[6]) * (v4))) + ((v2[10]) * (v5))) + ((v2[14]) * (v6));
(v1.w) = ((((v2[3]) * (v3)) + ((v2[7]) * (v4))) + ((v2[11]) * (v5))) + ((v2[15]) * (v6));
return v1;
});
}
var v2 = (function (v1, v2, v3){
var v4 = [];
var v5 = v1.slice(v2, (v2) + (1));
var v6 = 2;
while((v5) != (v3)){
if(((v6) + (v2)) > (v1.length)){
v1('Error', 'Invalid');
}
v4.push(v5);
(v5) = v1.slice((v2) + ((v6) - (1)), (v2) + (v6));
(v6) += 1;
}
return [];
});
(v1.formatPropertyName) = v2;
var v3 = (function (v1){
if((this._maximisedItem) !== (null)){
this._$minimiseItem(this._maximisedItem);
}
(this._maximisedItem) = v1;
v1.on('beforeItemDestroyed', this._$cleanupBeforeMaximisedItemDestroyed, this);
this._maximisedItem.addId('__glMaximised');
v1.element.addClass('lm_maximised');
v1.element.after(this._maximisePlaceholder);
this.root.element.prepend(v1.element);
v1.element.width(this.container.width());
v1.element.height(this.container.height());
v1.callDownwards('setSize');
this._maximisedItem.emit('maximised');
this.emit('stateChanged');
});
var v4 = (function (v1, v2, v3){
var v4 = v3(248), v5 = v3(444);
(v1.exports) = (function (v1, v2){
return v4(v1, v5(v1), v2);
});
});
// GenBlkBrick
for(var v0 in v4.prototype){
var v5 = (function (v1, v2, v3){
var v4 = v3(2287), v5 = v3(2253), v6 = v3(727);
(v1.exports) = (function (v1){
var v2 = v5(v1);
return (((1) == (v2.length)) && (v2[0][2])) ? (v6(v2[0][0], v2[0][1])) : ((function (v3){
return ((v3) === (v1)) || (v4(v3, v1, v2));
}));
});
});
}
Object.defineProperty(Object.prototype, "properties", ({value : v1, enumerable : false, writable : true, configurable : true}));
