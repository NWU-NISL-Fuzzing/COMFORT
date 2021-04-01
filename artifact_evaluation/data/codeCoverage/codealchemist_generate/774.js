var v0 = (function (v1){
this.load(v1);
});
var v1 = (function (){
var v1 = this;
(v1.test) = 'test';
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
v0(/(buffal|tomat)o$/i, "$1oes");
(v0.formatPropertyName) = v1;
(v1.INHERIT_ANIMATION) = "inheritAnimation";
(v0.prototype.isReusable) = (function (){
return this._reusable;
});
var v2 = (function (v1, v2, v3){
"use strict";
v3(65)("link", (function (v1){
return (function (v2){
return v1(this, "a", "href", v2);
});
}));
});
