var v0 = (function (v1, v2, v3){
var v4 = v3(399), v5 = Math.max, v7 = Math.min;
(v1.exports) = (function (v1, v2){
return (((v1) = v4(v1)) < (0)) ? (v5((v1) + (v2), 0)) : (v7(v1, v2));
});
});
(v0.prototype.save) = (function (v1, v2, v3){
var v4 = "tiddlywiki.html", v5 = v6.location.pathname.lastIndexOf("/");
if((v5) !== (- 1)){
(v4) = v6.location.pathname.substr((v5) + (1));
}
var v7 = new v8([], ({type : "text/html"}));
v9.navigator.msSaveBlob(v7, v4);
v3(null);
return true;
});
var v1 = (function (v1, v2, v3){
var v4 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, v5 = /\\(\\)?/g, v6 = v3(2267)((function (v1){
var v2 = [];
return (((46) === (v1.charCodeAt(0))) && (v2.push("")), v1.replace(v4, (function (v1, v3, v4, v6){
v2.push((v4) ? (v6.replace(v5, "$1")) : ((v3) || (v1)));
})), v2);
}));
(v1.exports) = v6;
});
// GenBlkBrick
for(var v2 in v0){
if(v0(v2)){
continue ;
}
// GenBlkBrick
for(var v3 = 1;(v3) <= (v1);v3++){
(v3) += 16;
}
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v4 = (function (){
this.callBase();
this._renderImpl();
});
}
// GenBlkBrick
for(var v5 = - 5;(v5) < (v1);v5++){
(v5) = ((v5) & (2147483647)) | (0);
}
(v5) *= Math.pow(2.0, (v3) / (4.0));
(v1.prototype.get) = (function (v1){
var v2 = this._keys.indexOf(v1);
return ((v2) === (- 1)) ? (undefined) : (this._values[v2]);
});
