var v0 = (function (v1, v2){
(v1.fillStyle) = v2.fill;
v1.beginPath();
v1.arc(v2.x, v2.y, v2.radius, 0, (Math.PI) * (2), false);
v1.closePath();
v1.fill();
});
(v0.prototype.intersectsTriangle) = (function (v1, v2, v3){
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
(v0.prototype.freeze) = (function (){
var v1 = this.o, v2 = ({writable : false, configurable : false});
this.names.forEach((function (v3){
if(v1.hasOwnProperty(v3)){
Object.defineProperty(v1, v3, v2);
}
}));
return this;
});
(v0.prototype.namespace) = 'OvercanvasPopup';
(v0.TransformToRef) = (function (v1, v2, v3){
v4.Vector3.TransformCoordinatesToRef(v1.origin, v2, v3.origin);
v4.Vector3.TransformNormalToRef(v1.direction, v2, v3.direction);
v1.direction.normalize();
});
// GenBlkBrick
while(false){
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("e64837d5443118ed58e06cbd890e642f.svg");
});
}
(v1.prototype.get) = (function (v1){
if((v1) >= (this.size)){
return v2;
}
return v0(this._root, v1);
});
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("4658ab963e9ac0f3c2581b384e6556f1.svg");
});
