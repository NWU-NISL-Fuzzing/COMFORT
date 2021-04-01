var v0 = (function (v1, v2, v3){
var v4 = v3(5);
v4(v4.S, "Math", ({log1p : v3(516)}));
});
(v0.PERMISSION_DENIED) = 1;
(v0.prototype.isUpdatable) = (function (){
return this._buffer.isUpdatable();
});
var v1 = (function (v1){
if(((((((this.min.x) <= (v1.min.x)) && ((v1.max.x) <= (this.max.x))) && ((this.min.y) <= (v1.min.y))) && ((v1.max.y) <= (this.max.y))) && ((this.min.z) <= (v1.min.z))) && ((v1.max.z) <= (this.max.z))){
return true;
}
return false;
});
(v0.prototype.pathDiff) = (function v1(v2, v3){
var v4 = this.extractUrlParts(v2), v5 = this.extractUrlParts(v3), v6, v7, v8, v9, v10 = "";
if((v4.hostPart) !== (v5.hostPart)){
return "";
}
(v7) = Math.max(v5.directories.length, v4.directories.length);
for((v6) = 0;(v6) < (v7);v6++){
if((v5.directories[v6]) !== (v4.directories[v6])){
break ;
}
}
(v9) = v5.directories.slice(v6);
(v8) = v4.directories.slice(v6);
for((v6) = 0;(v6) < ((v9.length) - (1));v6++){
(v10) += "../";
}
for((v6) = 0;(v6) < ((v8.length) - (1));v6++){
(v10) += (v8[v6]) + ("/");
}
return v10;
});
(v0.DISPLAY) = "display";
v0(v1);
// GenBlkBrick
for(var v0 = v1;(v0) <= (v2);v0++){
var v2 = (function (v1, v2){
var v3 = new Array(v1);
for(var v5 = 0;(v5) < (v1);v5++){
(v3[v5]) = v2(v5);
}
return v3;
});
}
