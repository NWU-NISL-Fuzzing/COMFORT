var v0 = (function (v1){
var v2 = (v1) && (v1.fn_);
while(v2){
(v1) = v2();
(v2) = (v1) && (v1.fn_);
}
});
// GenBlkBrick
while(v1--){
(v2) = (v1) === (2);
if(v2){
v1++;
}else {
v1--;
}
}
if(v2){
v1++;
}else {
v1--;
}
var v3 = (function (){
return this._positionType;
});
var v4 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v0, v1);
});
// GenBlkBrick
for(var v5 = 0;(v5) < (1);++v5){
if((v5) === (0)){
(v6) = (typeof v2) === ("undefined");
}
}
(v5) = (v5) | ((v5) >> (2));
var v7 = (function v7(v1){
if((! v1) || ((v3.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v4.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v4.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v4.call(v1, v6));
});
