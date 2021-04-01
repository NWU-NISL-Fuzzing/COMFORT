(v0) = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
// GenBlkBrick
do {
var v1 = (function (v1, v2, v3){
'use strict';
var v4 = v1('./_export');
var v5 = v1('./_new-promise-capability');
var v6 = v1('./_perform');
v4(v4.S, 'Promise', ({'try' : (function (v7){
var v8 = v5.f(this);
var v9 = v6(v7);
(v9.e) ? (v8.reject) : (v8.resolve)(v9.v);
return v8.promise;
})}));
});
(v1.prototype.transformPoint) = (function (v1, v2, v3, v4){
if((v4) === (void 0)){
(v4) = false;
}
(v3.x) = ((this.a) * (v1)) + ((this.c) * (v2));
(v3.y) = ((this.b) * (v1)) + ((this.d) * (v2));
if(! v4){
(v3.x) += this.tx;
(v3.y) += this.ty;
}
});
} while(v0);
for(var v2 = 0;(v2) < (0x8000);v2++){
(v0) += "a,";
}
while((v0.length) < (v2)){
(v0) = (v0) + (v0);
}
var v3 = (function (v1, v2, v3){
var v4 = v3(752)(Object.getPrototypeOf, Object);
(v1.exports) = v4;
});
// GenBlkBrick
for((v4) = 0;(v4) < (1e3);v4++){
var v5 = (function (v1, v2){
var v3 = (function (){
v2.apply(this, arguments);
this.off(v1, v3);
}).bind(this);
this.on(v1, v3);
return this;
});
Object.defineProperty(v5.prototype, "frameTimeCounter", ({get : (function (){
return this._frameTime;
}), enumerable : true, configurable : true}));
}
// GenBlkBrick
while((v0) > (0)){
(v3.prototype.get) = (function (v1){
if((v1) >= (this.size)){
return v2;
}
return v1(this._root, v1);
});
}
(v6) = (((v2) >>> (0)) % ((v4) >>> (0))) | (0);
