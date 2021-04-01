var v0 = (function (v1){
(this.i) = 0;
(this.durationindex) = 0;
(this.ii) = this.children.length;
(this.startx) = v1;
(this.minx) = v1;
(this.nextminx) = v1;
(this.nextx) = v1;
(this.spacingunits) = 0;
});
function v1(v1){
(this.particleSystem) = v1;
(this.position) = v2.Vector3.Zero();
(this.direction) = v2.Vector3.Zero();
(this.color) = new v2.Color4(0, 0, 0, 0);
(this.colorStep) = new v2.Color4(0, 0, 0, 0);
(this.lifeTime) = 1.0;
(this.age) = 0;
(this.size) = 0;
(this.angle) = 0;
(this.angularSpeed) = 0;
(this._currentFrameCounter) = 0;
(this.cellIndex) = 0;
if(! this.particleSystem.isAnimationSheetEnabled){
return;
}
(this.cellIndex) = this.particleSystem.startSpriteCellID;
if((this.particleSystem.spriteCellChangeSpeed) == (0)){
(this.updateCellIndex) = this.updateCellIndexWithSpeedCalculated;
}else {
(this.updateCellIndex) = this.updateCellIndexWithCustomSpeed;
}
}
var v2 = Object.getOwnPropertyDescriptor(v1, 'length');
Array.prototype.forEach.call(v2, v0);
var v3 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("b43c5c7f3fd21d04273303bc0db9cc02.svg");
});
Object.defineProperty(v2, "property", ({get : v0, set : v3, enumerable : true, configurable : true}));
Object.defineProperty(v2, "prop", ({get : v1, set : undefined, enumerable : false, configurable : false}));
(v3.ACTIONS) = "actions";
