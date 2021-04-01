var v0 = (function (v1){
(v1) = (v1) || ([]);
if((v1.length) === (0)){
return;
}
(v1[0][0]) = "m";
(v1[0][1]) -= this.lastM[0];
(v1[0][2]) -= this.lastM[1];
(this.lastM[0]) += v1[0][1];
(this.lastM[1]) += v1[0][2];
this.path.push(v1[0]);
for(var v2 = 1, v3 = v1.length;(v2) < (v3);v2++){
if((v1[v2][0]) === ("m")){
(this.lastM[0]) += v1[v2][1];
(this.lastM[1]) += v1[v2][2];
}
this.path.push(v1[v2]);
}
});
(v0.FRAME_Y) = "frameY";
// GenBlkBrick
for(var v1 = 0;(v1) < (500);v1++){
(v1) = ("0") + (v1);
var v3 = Math.floor((Math.random()) * (v1.length));
}
(v1) = v1.substring(0, (v3) + (1));
var v4 = ({buildCallback : (function (v1){
(v2) = new v0(v1, this);
}), renderCallback : (function (v1, v4){
v2.setKolorPicker(v5(v1).data(v1));
v2.render(v4);
})});
if((v4.length) > (0)){
var v1 = v4[0];
var v2 = (v4.length) - (1);
var v3 = Math.floor((v2) / (2));
var v5 = false;
var v6 = (((v2) % (2)) === (0)) ? (null) : (v4[(v4.length) - (1)]);
if(v3){
for(var v7 = 0;(v7) < (v3);v7++){
if((v1) === (v4[((v7) * (2)) + (1)])){
(v8) = v4[((v7) * (2)) + (2)];
(v5) = true;
break ;
}
}
}
if((! v5) && (v6)){
(v8) = v6;
}
}
// GenBlkBrick
while((v0) < (0)){
var v5 = (function (v1, v2, v3){
var v4 = v3(4997);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? ("") : (v4(v1));
});
});
// GenBlkBrick
for(var v6 = 5;(v6) < (10);v6++){
if((v6) === (6)){
break ;
}
}
}
function v7(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v5(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v0(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
