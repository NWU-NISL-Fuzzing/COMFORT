var v0 = (function (v1){
(this.dom.value) = v1;
return this;
});
(v0.prototype._shouldAnimationStopForInteraction) = (function (){
if(! this._attachedCamera){
return false;
}
var v1 = false;
if(((this._lastFrameRadius) === (this._attachedCamera.radius)) && ((this._attachedCamera.inertialRadiusOffset) !== (0))){
(v1) = true;
}
(this._lastFrameRadius) = this._attachedCamera.radius;
return (this._zoomStopsAnimation) ? (v1) : (this._userIsZooming());
});
(v0.prototype._on_error) = (function (v1){
return (function (v2, v3, v4){
v5.log_ajax_error(v2, v3, v4);
if(v1){
v1(v2, v3, v4);
}
});
});
function v1(v1){
(v1) = (v1) | (0);
return (((v1) | (0)) / (2147483647)) | (0);
}
(v1.prototype) = Object.create(v0.prototype);
var v2 = (function (){
return (this.negated) && ('!');
});
var v3 = (function (v1, v2, v3){
var v4 = v3(171), v5 = v3(65), v6 = v3(196), v7 = v6(v4, v5);
(v1.exports) = v7;
});
v3(v1, v0);
