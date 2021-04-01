var v0 = (function (v1, v2, v3){
var v4 = v1('./_to-object'), v5 = v1('./_object-gpo');
v1('./_object-sap')('getPrototypeOf', (function (){
return (function (v6){
return v5(v4(v6));
});
}));
});
(v0.prototype.normalizePlaceholder) = (function (v1, v2){
if((typeof v2) === ('string')){
(v2) = ({id : '', text : v2});
}
return v2;
});
var v1 = (function (v1, v2){
if((v2) === (undefined)){
(v2) = 1;
}
var v4 = null;
for(var v5 = 0;(v5) < (v2);v5++){
(v4) = v1.shift();
v1.push(v4);
}
return v4;
});
var v2 = (function (v1){
return v1('uibTooltipHtml', 'tooltip', 'mouseenter', ({useContentExp : true}));
});
(v2._SerializeValueAsString) = (function (v1){
if((typeof v1) === ("number")){
return v1.toString();
}
if((typeof v1) === ("boolean")){
return (v1) ? ("true") : ("false");
}
if((v1) instanceof (v2.Vector2)){
return ((v1.x) + (", ")) + (v1.y);
}
if((v1) instanceof (v2.Vector3)){
return ((((v1.x) + (", ")) + (v1.y)) + (", ")) + (v1.z);
}
if((v1) instanceof (v2.Color3)){
return ((((v1.r) + (", ")) + (v1.g)) + (", ")) + (v1.b);
}
if((v1) instanceof (v2.Color4)){
return ((((((v1.r) + (", ")) + (v1.g)) + (", ")) + (v1.b)) + (", ")) + (v1.a);
}
return v1;
});
var v3 = (function (v1, v2, v3){
var v4 = v3(28);
v3(94)("isFrozen", (function (v1){
return (function (v2){
return (! v4(v2)) || ((! ! v1) && (v1(v2)));
});
}));
});
// GenBlkBrick
while((v0) < (0)){
var v4 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("1923b5f96b83785235595042bd7f5a0d.png");
});
(Math.get) = (function (){
return "VerifyMathObject";
});
}
v3(/(vert|ind)ices$/i, "$1ex");
