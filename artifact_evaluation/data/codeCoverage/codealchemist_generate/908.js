// GenBlkBrick
for(var v0 = 0;(v0) < (20);v0++){
var v1 = Math.pow(- Math.log(v0), (1) / (v3));
var v2 = (function (v1){
return ((((v1.getProp('is_bag')) || (v1.getProp('is_element'))) || (v1.has_parent('furniture_base'))) || (v1.hasTag('no_bag'))) ? (0) : (v1.getProp('count'));
});
}
(v3) = (v1) ? (v2(v0, v1)) : (('') + (Math.round(v0))).split('.');
(v2.prototype.show) = (function (v1, v2){
if(! this._show){
(this._renderFunction) = this._render.bind(this);
(this._show) = true;
(this._scene) = v1;
(this._renderPoints) = [];
(this._renderLine) = v3.Mesh.CreateLines("ray", this._renderPoints, v1, true);
this._scene.registerBeforeRender(this._renderFunction);
}
if(v2){
this._renderLine.color.copyFrom(v2);
}
});
(v2.add) = (function (v1){
v3.push(v1);
});
if((v0) < (0)){
v1++;
}
(v0) += v3[v1];
(v4) = (v1) ? (v2(v0, v1)) : (('') + (Math.round(v0))).split('.');
(v0) >>= 4;
