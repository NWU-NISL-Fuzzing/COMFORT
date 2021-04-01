var v0 = (function (v1){
return this._connections[v1];
});
(v0.prototype._onLoad) = (function (v1){
this._onAssetLoad.call(this._scope, this.propertyName, this.parent, v1);
});
// GenBlkBrick
for(var v0 = v1;(v0) < (v2);v0++){
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("d003c9ad26b3ef868c38fec9982c1a24.svg");
});
// GenBlkBrick
for(var v2 = 0;(v2) < (10);v2++){
if((v2) < (20)){
break ;
}
var v3 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("4e119a2ac01300de41aee4e941c8f714.svg");
});
}
}
(v2) = ((v2) >= (Math.pow(2, 31))) ? ((v2) - (Math.pow(2, 32))) : (v2);
var v4 = ({source : [], formatDropdownItem : v3, formatResult : v0});
Array.prototype.reduce.call(v3, v0, v2);
function v5(v1, v2, v3, v4, v5){
(v3) = v3(v3);
if(! v4){
(v4) = v7.base;
}
var v8;
(function v9(v1, v10, v11){
if((v1.start) > (v2)){
return;
}
var v12 = (v11) || (v1.type);
if((((v1.end) <= (v2)) && ((! v8) || ((v8.node.end) < (v1.end)))) && (v3(v12, v1))){
(v8) = new v0(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
Object.defineProperty(v4, "prop", ({get : v5, set : v0, enumerable : true, configurable : true}));
