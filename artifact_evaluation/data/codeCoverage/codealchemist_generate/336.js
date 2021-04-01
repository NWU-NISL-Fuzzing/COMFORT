var v0 = (function (v1, v2){
return (((this.x) < (v1.x)) ? ((this.x) = v1.x) : (((this.x) > (v2.x)) && ((this.x) = v2.x)), ((this.y) < (v1.y)) ? ((this.y) = v1.y) : (((this.y) > (v2.y)) && ((this.y) = v2.y)), ((this.z) < (v1.z)) ? ((this.z) = v1.z) : (((this.z) > (v2.z)) && ((this.z) = v2.z)), this);
});
// GenBlkBrick
for((v1) = 0;(v1) < (1e4);v1++){
var v2 = (function (v1){
var v2 = 0;
for(var v3 = 0;(v3) < (v1.length);++v3){
(v2) = ((v3) == (0)) ? (v1[v3]) : (((v2) * (256)) + (v1[v3]));
}
return v2;
});
}
(v2.prototype.get) = (function (v1){
if((v1) >= (this.size)){
return v2;
}
return v0(this._root, v1);
});
// GenBlkBrick
for(var v3 = 0;(v3) < (24);v3++){
// GenBlkBrick
for((v4) = (v1) - (1);(v4) >= (0);--v4){
// GenBlkBrick
for(var v5 = 1;(v5) < (v1);v5++){
var v6 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("be9e74e5e0bc5666b51a51e86e779200.svg");
});
(v7) = v6(v2, v3, v5);
}
(Boolean.prototype[1]) = true;
}
}
for(var v8 = 0;(v8) < (v3);v8++){
(v9) = (v8) % (v3);
v4.push((v5) + (v9), (v1) + (v9));
if((v9) == (v4)){
if(((v8) == (v7)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v5, v1);
}
v4.push(((v1) + (v3)) - (1), v1);
(v3) += v3;
(v5) += v3;
(v1) = 0;
}else {
if(((v8) >= (v7)) && ((v10) == (true))){
v4.push(v5, v1);
}else {
if((v8) < (v7)){
if((v10) == (true)){
v4.push(v5, v1);
}
v4.push(((v1) + (v3)) - (1), v1);
(v5) += v3;
(v1) += v3;
}
}
}
}
}
var v10 = v9, v11 = (v9) - (14);
var v12 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = v3(635);
(v1.exports) = (function (v1){
return ((v1) = (v1) || (v2.navigator.userAgent), (v4(v1)) || ((/iPhone|iPod|iPad|Mobile|Tablet/i.test(v1)) && (/Firefox/i.test(v1))));
});
}).call(this, v3(9));
});
var v13 = ((Math.sin(v1)) * (v11)) * (Math.cos(v5));
