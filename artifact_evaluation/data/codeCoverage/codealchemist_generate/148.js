var v0 = (function (v1){
(this.data.position[1]) = this.world.pxmi(v1);
});
(v0.INHERIT_REFLECTION) = "inheritReflection";
(v0.prototype.dispose) = (function (){
this._shadowMap.dispose();
if(this._shadowMap2){
this._shadowMap2.dispose();
}
if(this._downSamplePostprocess){
this._downSamplePostprocess.dispose();
}
if(this._boxBlurPostprocess){
this._boxBlurPostprocess.dispose();
}
});
var v1 = (function (v1){
var v2 = ({});
for(var v3 = 0;(v3) < (v1.length);v3++){
v0(v1[v3], v2);
}
return v2;
});
(Math.pow) = (function (v1, v2){
var v3 = ("") + (v0(v1, v2));
(v3) = v3.split("e");
(v3[0]) = v3[0].substr(0, 17);
return parseFloat(v3.join("e"));
});
var v2 = (function (){
return this.getPropertyValue('stop-color');
});
Object.defineProperty(v0.prototype, "isSupported", ({get : (function (){
for(var v2 in this._renderEffects){
if(! this._renderEffects[v2].isSupported){
return false;
}
}
return true;
}), enumerable : true, configurable : true}));
(v2.prototype) = v1.prototype;
