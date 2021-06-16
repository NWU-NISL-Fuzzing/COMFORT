var v0 = (function (v1){
(this.game) = v1;
(this.input) = v1.input;
(this.callbackContext) = this.game;
(this.pointerDownCallback) = null;
(this.pointerMoveCallback) = null;
(this.pointerUpCallback) = null;
(this.pointerOutCallback) = null;
(this.pointerOverCallback) = null;
(this.capture) = false;
(this.event) = null;
(this.active) = false;
(this.enabled) = true;
(this.stopOnGameOut) = false;
(this._onMSPointerDown) = null;
(this._onMSPointerMove) = null;
(this._onMSPointerUp) = null;
(this._onMSPointerUpGlobal) = null;
(this._onMSPointerOut) = null;
(this._onMSPointerOver) = null;
});
Object.defineProperty(v0.prototype, "onAfterRender", ({set : (function (v2){
if(this._onAfterRenderObserver){
this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
}
(this._onAfterRenderObserver) = this.onAfterRenderObservable.add(v2);
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v0 = v1;(v0) <= (v2);v0++){
var v1 = (function (v1, v2, v3){
return (function (v4, v5, v6, v7){
var v8 = (v1(v4, v5, v6, v7)) !== (v2(v4, v5, v6, v7));
return (v3) ? (({value : v8})) : (v8);
});
});
Object.defineProperty(v1.prototype, "gpuFrameTimeCounter", ({get : (function (){
return this._gpuFrameTime;
}), enumerable : true, configurable : true}));
}
var v2 = (function (v1){
'use strict';
var v2 = ({TICK_DEPENDENT : 0, SYSTEM_CLOCK_MULTIPLIER : 1, SYSTEM_CLOCK : 2});
return v1(v2);
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[0]));
}else {
if(v4){
return (v5) + (v0(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v0(v3)[1]) : (v0(v3)[2]));
}
}
}
}
v1(v3);
var v4 = (function (v1, v2){
if((v1.location.is_newxp) && ((this.class_tsid) == ('egg_plain'))){
return ({state : null});
}
if((this.food_gives_bonus(v1)) === ("none")){
if(this.getClassProp('is_herb')){
return ({state : null});
}
if(v1.is_dead){
return ({state : 'disabled', reason : "You are dead :("});
}
if(v1.isOverDailyFoodLimit()){
return ({state : 'disabled', reason : "You can't eat anymore food today."});
}
if((v1.metabolics_get_percentage('energy')) == (100)){
return ({state : 'disabled', reason : "You already have full energy."});
}
return ({state : 'enabled'});
}
return ({state : null});
});
var v5 = 'toString';
