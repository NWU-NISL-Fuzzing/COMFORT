var v0 = (function (){
var v1 = this.uri.path.split(':'), v2 = v1[0], v3 = v1[1];
(this.socketPath) = v2;
(this.uri.pathname) = v3;
(this.uri.path) = v3;
(this.uri.host) = v2;
(this.uri.hostname) = v2;
(this.uri.isUnix) = true;
});
var v1 = (function (v1){
v0(v1, v1);
function v1(){
v1.apply(this, arguments);
}
return v1;
})(Error);
var v2 = (function (v1, v2, v3){
var v4 = v3(496), v5 = v3(4649), v6 = v3(4650), v7 = "[object Null]", v8 = "[object Undefined]", v9 = (v4) ? (v4.toStringTag) : (void 0);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? (((void 0) === (v1)) ? (v8) : (v7)) : (((v9) && ((v9) in (Object(v1)))) ? (v5(v1)) : (v6(v1)));
});
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
var v4 = ({thereYet : v0, cap : v2});
(v0.prototype.toString) = (function (){
return ((((((((((("[object dragonBones.Transform] x:") + (this.x)) + (" y:")) + (this.y)) + (" skewX:")) + (((this.skew) * (180.0)) / (Math.PI))) + (" skewY:")) + (((this.rotation) * (180.0)) / (Math.PI))) + (" scaleX:")) + (this.scaleX)) + (" scaleY:")) + (this.scaleY);
});
(v4.property460) = 460;
var v5 = v4.length, v2, v3, v4;
