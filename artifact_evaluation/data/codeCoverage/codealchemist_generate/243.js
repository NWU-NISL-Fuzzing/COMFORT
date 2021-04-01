var v0 = (function (v1, v2, v3, v4){
(this.src) = '';
if(v4){
this.add(v4);
}
});
(v0.DEG_RAD) = (Math.PI) / (180.0);
var v1 = (function (v1, v2){
var v3 = this._identifierIndex;
v1.iterateTokensByType('Identifier', (function (v4){
var v5 = v4.value;
if((((v5[0]) === ('_')) || ((v5.slice(- 1)) === ('_'))) && ((v3.indexOf(v5)) < (0))){
v2.add('Invalid dangling underscore found', v4);
}
}));
});
(v0.SKEW) = "skew";
// GenBlkBrick
for(var v2 = 0;(v2) <= (15);v2++){
var v3 = (function (v1){
return ({x : (v1.lng) / (180), y : (v1.lat) / (90)});
});
var v4 = (v2) >> (1);
}
while((v2--) > (0)){
v1();
}
Array.prototype.reduce.call(v3, v0, v4);
(v5) = v0(v2, v3, v2);
