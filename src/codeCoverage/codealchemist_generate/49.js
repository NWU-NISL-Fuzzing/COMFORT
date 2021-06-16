var v0 = (function (v1, v2, v3){
var v4 = v3(3), v5 = v3(369), v6 = Math.exp;
v4(v4.S, "Math", ({tanh : (function (v1){
var v2 = v5((v1) = + v1), v3 = v5(- v1);
return ((v2) == ((1) / (0))) ? (1) : (((v3) == ((1) / (0))) ? (- 1) : (((v2) - (v3)) / ((v6(v1)) + (v6(- v1)))));
})}));
});
(v0.prototype.delete) = (function (v1, v2){
if(this.kernel){
this.events.trigger('kernel_killed.Session', ({session : this, kernel : this.kernel}));
this.kernel._kernel_dead();
}
v3.ajax(this.session_url, ({processData : false, cache : false, type : "DELETE", dataType : "json", success : this._on_success(v1), error : this._on_error(v2)}));
});
(v0.prototype.set) = (function (v1, v2){
(this.values[v1]) = v2;
return this;
});
// GenBlkBrick
for((v1) = 2;(v1) <= (v1);++v1){
--v1;
}
// GenBlkBrick
for((v2) = 0;(v2) < ((v1) || ("").length);v2++){
// GenBlkBrick
for(var v3 = (v1) - (1);(v3) >= (0);v3--){
(function v0(){
for(var v1 = 1;(v1) <= (10);v1++){
if((v1) === (6)){
return;
}
(v3) += v1;
}
})();
(v4) = ((v3) < (3)) ? ('pop') : (/\u009e\u0029/g);
}
}
(v0.TRANSLATE_FRAME) = "translateFrame";
(v0.prototype.showCropper) = (function (){
if((this.$cropperContainer) && (this.$cropperContainer.length)){
this.$cropperContainer.removeClass('hidden');
}
});
for(var v5 = 0;(v5) <= (v1);v5++){
v0(v5);
}
