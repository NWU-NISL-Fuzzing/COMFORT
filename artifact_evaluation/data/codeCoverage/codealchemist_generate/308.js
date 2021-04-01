var v0 = (function (v1, v2, v3){
var v4 = v3(206), v5 = v3(110);
(v1.exports) = (function (v1){
return v4(v5(v1));
});
});
var v1 = (function (){
(this.dept) = "sales";
(this.quota) = 100;
});
var v2 = (function (v1, v2, v3){
var v4 = Object;
(v2.exports) = ({create : v4.create, getProto : v4.getPrototypeOf, isEnum : ({}).propertyIsEnumerable, getDesc : v4.getOwnPropertyDescriptor, setDesc : v4.defineProperty, setDescs : v4.defineProperties, getKeys : v4.keys, getNames : v4.getOwnPropertyNames, getSymbols : v4.getOwnPropertySymbols, each : [].forEach});
});
// GenBlkBrick
for(var v0 in v0.prototype){
var v3 = 0.0001;
}
(v4) = v1(v2, v3, v3);
(v2.prototype._adjustPosition) = (function (v1){
var v2 = this._getAvailableSpace(v1), v3;
this.positions.forEach((function (v4, v5){
var v6 = (v2[v4]) && (v2.popup[v4]);
if((! v3) && (v6)){
var v7 = (v2.popup[v4]) + (v2.popup.arrowSize), v8 = ((v2[v4]) - (v7)) > (0);
(v3) = (v8) && (v4);
}
}));
if(v3){
this._movePopup(v3);
}
});
v0("fish");
var v5 = (function (v1, v2){
(v1) = (v1) | (0);
(v2) = (v2) | (0);
return + ((v1) >>> (0)) >> ((v2) >>> (0));
});
