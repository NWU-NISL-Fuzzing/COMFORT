var v0 = (function (){
return (('dddd [') + (((this.hours()) !== (1)) ? ('ás') : ('a'))) + ('] LT');
});
(v0.Intersects) = (function (v1, v2){
var v3 = (v1.centerWorld.x) - (v2.centerWorld.x);
var v4 = (v1.centerWorld.y) - (v2.centerWorld.y);
var v5 = (v1.centerWorld.z) - (v2.centerWorld.z);
var v6 = Math.sqrt((((v3) * (v3)) + ((v4) * (v4))) + ((v5) * (v5)));
if(((v1.radiusWorld) + (v2.radiusWorld)) < (v6)){
return false;
}
return true;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(205), v5 = v3(1443), v6 = v3(1444), v7 = "[object Null]", v8 = "[object Undefined]", v9 = (v4) ? (v4.toStringTag) : (void 0);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? (((void 0) === (v1)) ? (v8) : (v7)) : (((v9) && ((v9) in (Object(v1)))) ? (v5(v1)) : (v6(v1)));
});
});
(v1.prototype) = new v0();
(v0.prototype.changeColor) = (function (v1){
if(v2.isFunction(this.options.onChange)){
this.options.onChange.call(this.element, v1);
}
});
// GenBlkBrick
for(var v0 in v1){
(v1.prototype._userIsMoving) = (function (){
if(! this._attachedCamera){
return false;
}
return ((((((this._attachedCamera.inertialAlphaOffset) !== (0)) || ((this._attachedCamera.inertialBetaOffset) !== (0))) || ((this._attachedCamera.inertialRadiusOffset) !== (0))) || ((this._attachedCamera.inertialPanningX) !== (0))) || ((this._attachedCamera.inertialPanningY) !== (0))) || (this._isPointerDown);
});
var v2 = (function (v1, v2, v3){
(v1.version) = ({major : 4, minor : 0, build : 0});
(v1.deferred) = v3('./lib/deferred.js');
(v1.utils) = v3('./lib/utils.js');
(v1.xml) = v3('./lib/xml.js');
(v1.oData) = v3('./lib/odata.js');
(v1.store) = v3('./lib/store.js');
(v1.cache) = v3('./lib/cache.js');
});
}
(v1.prototype.delete) = (function (v1){
(this.values[v1]) = null;
return true;
});
(v2.prototype.hasNonTerrainObjects) = (function (){
return ((this.objects.length) > (1)) || (((this.objects.length) === (1)) && ((this.terrainObject()) == (null)));
});
