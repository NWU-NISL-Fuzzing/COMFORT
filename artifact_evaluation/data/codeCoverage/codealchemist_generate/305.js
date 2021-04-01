var v0 = (function (v1){
'use strict';
function v2(v3, v4, v5){
var v6 = (v3) + (' ');
switch(v5){
}
}
var v7 = v1.defineLocale('hr', ({months : ({format : 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'), standalone : 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')}), monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'), monthsParseExact : true, weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'), weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'), weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'), weekdaysParseExact : true, longDateFormat : ({LT : 'H:mm', LTS : 'H:mm:ss', L : 'DD.MM.YYYY', LL : 'D. MMMM YYYY', LLL : 'D. MMMM YYYY H:mm', LLLL : 'dddd, D. MMMM YYYY H:mm'}), calendar : ({sameDay : '[danas u] LT', nextDay : '[sutra u] LT', nextWeek : (function (){
switch(this.day()){
}
}), lastDay : '[jučer u] LT', lastWeek : (function (){
switch(this.day()){
}
}), sameElse : 'L'}), relativeTime : ({future : 'za %s', past : 'prije %s', s : 'par sekundi', ss : v2, m : v2, mm : v2, h : v2, hh : v2, d : 'dan', dd : v2, M : 'mjesec', MM : v2, y : 'godinu', yy : v2}), dayOfMonthOrdinalParse : /\d{1,2}\./, ordinal : '%d.', week : ({dow : 1, doy : 7})}));
return v7;
});
Object.defineProperty(v0.prototype, "aspectRatio", ({get : (function (){
return (this.hResolution) / ((2) * (this.vResolution));
}), enumerable : true, configurable : true}));
(v0.prototype.attachToMesh) = (function (v1){
(this._attachedMesh) = v1;
});
(v0.prototype._createIndexBuffer) = (function (){
var v1 = this._scene.getEngine();
(this._indexBuffer) = v1.createIndexBuffer([]);
});
var v1 = (function (v1, v2, v3){
var v4 = v3(4675);
(v1.exports) = (function (v1, v2){
for(var v3 = v1.length;v3--;){
if(v4(v1[v3][0], v2)){
return v3;
}
}
return - 1;
});
});
var v2 = (function (v1, v2, v3){
var v4 = v3(30), v5 = v3(108), v6 = v3(34)("match");
(v1.exports) = (function (v1){
var v2;
return (v4(v1)) && (((void 0) !== ((v2) = v1[v6])) ? (! ! v2) : (("RegExp") == (v5(v1))));
});
});
function v3(v1, v2, v3, v4, v5){
v1(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v2));
}
// GenBlkBrick
for(var v0 in v1){
var v4 = (function (v1, v2, v3){
var v4 = v3(4657);
(v1.exports) = (function (v1, v2){
for(var v3 = v1.length;v3--;){
if(v4(v1[v3][0], v2)){
return v3;
}
}
return - 1;
});
});
(v4.prototype.attach) = (function (v1){
var v2 = this;
(this._attachedCamera) = v1;
var v3 = this._attachedCamera.getScene();
(this._onPrePointerObservableObserver) = v3.onPrePointerObservable.add((function (v4){
if((v4.type) === (v5.PointerEventTypes.POINTERDOWN)){
(v2._isPointerDown) = true;
return;
}
if((v4.type) === (v5.PointerEventTypes.POINTERUP)){
(v2._isPointerDown) = false;
}
}));
(this._onAfterCheckInputsObserver) = v1.onAfterCheckInputsObservable.add((function (){
var v6 = v5.Tools.Now;
var v7 = 0;
if((v2._lastFrameTime) != (null)){
(v7) = (v6) - (v2._lastFrameTime);
}
(v2._lastFrameTime) = v6;
v2._applyUserInteraction();
var v8 = ((v6) - (v2._lastInteractionTime)) - (v2._idleRotationWaitTime);
var v9 = Math.max(Math.min((v8) / (v2._idleRotationSpinupTime), 1), 0);
(v2._cameraRotationSpeed) = (v2._idleRotationSpeed) * (v9);
if(v2._attachedCamera){
(v2._attachedCamera.alpha) -= (v2._cameraRotationSpeed) * ((v7) / (1000));
}
}));
});
}
