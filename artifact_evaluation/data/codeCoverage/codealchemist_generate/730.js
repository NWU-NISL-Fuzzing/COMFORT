var v0 = (function (v1, v2, v3){
var v4 = v3(564), v5 = v3(2239), v6 = v3(2235), v7 = v3(440), v8 = v3(689), v9 = v3(688), v10 = v3(209), v11 = 1, v12 = 2;
(v1.exports) = (function (v1, v2){
return ((v7(v1)) && (v8(v2))) ? (v9(v10(v1), v2)) : ((function (v3){
var v7 = v5(v3, v1);
return (((void 0) === (v7)) && ((v7) === (v2))) ? (v6(v3, v1)) : (v4(v2, v7, (v11) | (v12)));
}));
});
});
var v1 = (function (v1, v2, v3, v4){
return ((("undefined") == (typeof v2)) && ((v2) = 0), (("undefined") == (typeof v3)) && ((v3) = 0), (("undefined") == (typeof v4)) && ((v4) = 0), this.data.addShape(v1, [], v4), this.shapeChanged(), v1);
});
// GenBlkBrick
for(var v2 = 0;(v2) < (v1);(v2) += 3){
(v0.PingPong) = (function (v1, v2){
var v3 = v0.Repeat(v1, (v2) * (2.0));
return (v2) - (Math.abs((v3) - (v2)));
});
}
var v3 = (function (v1, v2, v3){
var v4 = v1('cordova/modulemapper');
v4.merges('cordova', 'cordova');
v4.clobbers('cordova/exec', 'cordova.exec');
v4.clobbers('cordova/exec', 'Cordova.exec');
});
(v3.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v1.prototype) = v0.prototype, new v1()));
Array.prototype.forEach.call(v0, v3);
function v4(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v0(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v3(v1.left, v1.left.right);
(v1) = v0(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v3(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v0(v1.right, v1.right.left);
(v1) = v3(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v4(v1.left, false);
v4(v1.right, true);
(v1) = v4(v1, true);
(v1) = v4(v1, false);
return v1;
}
function v5(v1, v2, v3, v4, v5){
(v3) = v0(v3);
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
(v8) = new v3(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
