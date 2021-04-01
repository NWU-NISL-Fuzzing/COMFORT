var v0 = (function (v1, v2, v3){
var v4 = v3(5057), v5 = v3(5051);
(v1.exports) = (function (v1, v2){
var v3 = v5(v1, v2);
return (v4(v3)) ? (v3) : (void 0);
});
});
var v1 = (function (v1, v2){
v1.addTest('emoji', (function (){
if(! v1.canvastext){
return false;
}
var v3 = v2('canvas');
var v4 = v3.getContext('2d');
var v5 = (((((v4.webkitBackingStorePixelRatio) || (v4.mozBackingStorePixelRatio)) || (v4.msBackingStorePixelRatio)) || (v4.oBackingStorePixelRatio)) || (v4.backingStorePixelRatio)) || (1);
var v6 = (12) * (v5);
(v4.fillStyle) = '#f00';
(v4.textBaseline) = 'top';
(v4.font) = '32px Arial';
v4.fillText('\ud83d\udc28', 0, 0);
return (v4.getImageData(v6, v6, 1, 1).data[0]) !== (0);
}));
});
var v2 = ({source : [], formatDropdownItem : v0, formatResult : v1});
Object.defineProperty(v2, "prop", ({get : v1, set : undefined, enumerable : false, configurable : false}));
(v2.__objtypespecmethod0) = v0;
(v1.EVENT) = "event";
function v3(v1, v2){
if(! v2){
(v2) = v3.base;
}
var v4 = v1(v2);
for(var v6 in v1){
(v4[v6]) = v1[v6];
}
return v4;
}
(v0.prototype.dispose) = (function (){
if(this._ownsBuffer){
this._buffer.dispose();
}
});
