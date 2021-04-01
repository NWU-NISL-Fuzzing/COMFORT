// GenBlkBrick
while((--v0) >= (0)){
for(var v1 = 0;(v1) < (10);v1++){
v0++;
}
}
function v2(v1, v2, v3){
v1++;
if((v0) !== (v2)){
return true;
}else {
v0++;
return false;
}
}
var v3 = (function (){
if((this.sentinel.previous) == (this.sentinel)){
return null;
}
var v1 = this.sentinel.previous;
(v1.previous.next) = this.sentinel;
(this.sentinel.previous) = v1.previous;
this.size--;
return v1.data;
});
(v4) = ((v1) | (0)) >= ((v0) | (0));
(v2.prototype.intersectsTriangle) = (function (v1, v2, v3){
if(! this._edge1){
(this._edge1) = v4.Vector3.Zero();
(this._edge2) = v4.Vector3.Zero();
(this._pvec) = v4.Vector3.Zero();
(this._tvec) = v4.Vector3.Zero();
(this._qvec) = v4.Vector3.Zero();
}
v2.subtractToRef(v1, this._edge1);
v3.subtractToRef(v1, this._edge2);
v4.Vector3.CrossToRef(this.direction, this._edge2, this._pvec);
var v5 = v4.Vector3.Dot(this._edge1, this._pvec);
if((v5) === (0)){
return null;
}
var v6 = (1) / (v5);
this.origin.subtractToRef(v1, this._tvec);
var v7 = (v4.Vector3.Dot(this._tvec, this._pvec)) * (v6);
if(((v7) < (0)) || ((v7) > (1.0))){
return null;
}
v4.Vector3.CrossToRef(this._tvec, this._edge1, this._qvec);
var v8 = (v4.Vector3.Dot(this.direction, this._qvec)) * (v6);
if(((v8) < (0)) || (((v7) + (v8)) > (1.0))){
return null;
}
var v9 = (v4.Vector3.Dot(this._edge2, this._qvec)) * (v6);
if((v9) > (this.length)){
return null;
}
return new v4.IntersectionInfo(v7, v8, v9);
});
if((v1) > (v0)){
(v1) = (v4) ? (0) : (v0);
}
if(! v0){
(v5) = v1;
}
if(v4){
(v1) = (v1) * (- 1);
}
