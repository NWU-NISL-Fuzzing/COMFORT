var v0 = (function (v1){
return (((v1.data.world) == (this.world)) && ((this.world.removeBody(v1.data), this.onBodyRemoved.dispatch(v1))), v1);
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("e9aaf1824f17126a7992e5ad98752389.svg");
});
(v0.GOTO_AND_PLAY) = "gotoAndPlay";
var v2 = ({thereYet : v0, cap : v1});
Object.defineProperty(v0.prototype, "animationsTimeCounter", ({get : (function (){
return this._animationsTime;
}), enumerable : true, configurable : true}));
Object.defineProperty(v2, "prop", ({get : v0, enumerable : true, configurable : true}));
(v1.prototype._onBodyClick) = (function (v1){
if(this.popupIsVisible){
var v2 = (this.$button) && (this.$button.length), v3 = (v2) && (((v1.target) === (this.$button.get(0))) || (this.$button.find(v1.target).length)), v4 = ((v1.target) === (this.$popup.get(0))) || (this.$popup.find(v1.target).length);
if((! v3) && (! v4)){
this.drawerInstance.trigger(this.drawerInstance.EVENT_OVERCANVAS_POPUP_HIDE);
}
}
});
var v3 = (function (v1, v2){
var v3 = v1('../../internals'), v4 = v3.each, v5 = v3.keys, v6 = v3.values, v7 = ({});
var v8 = ({SINGLE_COMPLEMENT : v1('./SingleComplementStrategy'), COMPLEMENTARY : v1('./ComplementaryStrategy'), SPLIT_COMPLEMENTARY : v1('./SplitComplementaryStrategy'), LEFT_SPLIT_COMPLEMENTARY : v1('./LeftSplitComplementaryStrategy'), RIGHT_SPLIT_COMPLEMENTARY : v1('./RightSplitComplementaryStrategy'), ANALAGOUS : v1('./AnalagousStrategy'), MONOCHROME : v1('./MonochromeTheoryStrategy'), TRIAD : v1('./TriadTheoryStrategy'), TETRAD : v1('./TetradTheoryStrategy'), COMPOUND : v1('./CompoundTheoryStrategy')});
(v2.getRegisteredNames) = (function (){
return v5(v7);
});
(v2.getRegisteredStrategies) = (function (){
return v6(v7);
});
(v2.getStrategyForName) = (function (v9){
return v7[v9];
});
(v2.registerImplementation) = (function (v10){
(v7[v10.getName()]) = v10;
});
v4(v8, (function (v11, v12){
(v2[v12]) = new v8[v12]();
v2.registerImplementation(v2[v12]);
}));
});
