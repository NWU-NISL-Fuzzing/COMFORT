var v0 = (function (v1, v2){
return this.food_eat_conditions(v1, v2);
});
(v0.prototype.updateEffect) = (function (v1){
(this._effect) = this._engine.createEffect(({vertex : "postprocess", fragment : this._fragmentUrl}), [], this._parameters, this._samplers, ((v1) !== (undefined)) ? (v1) : (""));
});
(v0.prototype._collectDefaultOptions) = (function (v1){
(v1) = ((v1) || (this.name)) || (this.optionName);
var v2 = (this.drawerInstance) || (this.drawer), v3 = (v2) && (v2.getPluginConfig(v1));
return v3;
});
var v1 = (function (v1, v2, v3){
(function (v4){
'use strict';
var v5 = ({});
if((v4.env.NODE_ENV) !== ('production')){
(v5) = ({prop : 'prop', context : 'context', childContext : 'child context'});
}
(v2.exports) = v5;
}).call(this, v1('_process'));
});
var v2 = (function (v1, v2, v3){
return (((void 0) === (v3)) && ((v3) = 0), (v2) = ((v2) * (v1.itemSize)) + (v3), (this.x) = v1.array[v2], (this.y) = v1.array[(v2) + (1)], (this.z) = v1.array[(v2) + (2)], this);
});
(v2.prototype.get) = (function (v1){
if((v1) >= (this.size)){
return v2;
}
return v1(this._root, v1);
});
(v2.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v0.prototype) = v1.prototype, new v0()));
// GenBlkBrick
for(var v0 in v0.prototype){
var v3 = (function (v1, v2, v3){
var v4 = v3(392), v5 = v3(2224), v6 = v3(2176), v7 = v3(432);
(v1.exports) = (function (v1, v2){
if((null) == (v1)){
return ({});
}
var v3 = v4(v7(v1), (function (v1){
return [];
}));
return ((v2) = v5(v2), v6(v1, v3, (function (v1, v3){
return v2(v1, v3[0]);
})));
});
});
(v0.Z_ORDER) = "zOrder";
}
