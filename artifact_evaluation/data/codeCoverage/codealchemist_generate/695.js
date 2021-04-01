var v0 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = (v2.navigator) && (v2.navigator.userAgent), v5 = v3(315), v6 = v3(314), v7 = v3(207), v8 = v3(456), v9 = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
(v1.exports) = ({isIE9 : v8, isAndroidChrome : (function (v1){
var v2 = (v1) || (v4);
return (v5(v2)) && (v6(v2));
}), isIos : v7, isKitKatWebview : (function (v1){
var v2 = (v1) || (v4);
return (v5(v2)) && (v9.test(v2));
}), isSamsungBrowser : (function (v1){
return (/SamsungBrowser/.test((v1) = (v1) || (v4))) || ((function (v1){
return (! v6(v1)) && ((v1.indexOf("Samsung")) > (- 1));
})(v1));
})});
}).call(this, v3(10));
});
(v0.prototype.name) = 'XRefParseException';
(v0.ACTION) = "action";
var v1 = (function (v1, v2, v3){
var v4 = v3(678);
(v1.exports) = (function (v1){
var v2 = new v1.constructor(v1.byteLength);
return (new v4(v2).set(new v4(v1)), v2);
});
});
var v2 = (function (v1){
this._setProperty('-webkit-user-select', v1);
});
(v0.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v1(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
v0(v2, v1);
(v1.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v2.prototype) = v0.prototype, new v2()));
