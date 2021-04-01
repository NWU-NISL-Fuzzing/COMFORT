var v0 = (function (v1){
var v2 = (v1) ? (true) : ("-1");
return (v2) | (0);
});
(v0.prototype._createIndexBuffer) = (function (){
var v1 = this._scene.getEngine();
var v2 = [];
v2.push(0);
v2.push(1);
v2.push(2);
v2.push(0);
v2.push(2);
v2.push(3);
(this._indexBuffer) = v1.createIndexBuffer(v2);
});
// GenBlkBrick
for(var v1 = 0;(v1) < (20);v1++){
var v2 = String(Math.floor((v1) / (60)));
}
var v3 = (function (v1, v2){
for(var v3 = 0, v4 = (this.length) >>> (0);(v3) < (v4);v3++){
if(((v3) in (this)) && (v1.call(v2, this[v3], v3, this))){
return true;
}
}
return false;
});
v3(new RegExp(((v2.substr(0, 1).toLowerCase()) + (v2.substr(1))) + ("$")), (v2.substr(0, 1).toLowerCase()) + (v2.substr(1)));
for(var v4 = 0;(v4) <= (v1);v4++){
v3(v4);
}
// GenBlkBrick
for(var v5 = 0;(v5) < (v1);v5++){
if((v5) === (2)){
(v6) = false;
}
if((v5) < (20)){
break ;
}
}
if(v6){
v5++;
}else {
v5--;
}
