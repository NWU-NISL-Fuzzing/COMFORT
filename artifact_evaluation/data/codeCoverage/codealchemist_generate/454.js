var v0 = (function (v1){
v1.put("template/tooltip/tooltip-popup.html", ((((((("<div\n") + ("  tooltip-animation-class=\"fade\"\n")) + ("  uib-tooltip-classes\n")) + ("  ng-class=\"{ in: isOpen() }\">\n")) + ("  <div class=\"tooltip-arrow\"></div>\n")) + ("  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n")) + ("</div>\n")) + (""));
});
(v0.prototype.clear) = (function (){
(this.values) = ({});
});
(v0.prototype.bind_events) = (function (){
var v1 = this;
var v2 = (function (v3, v4){
});
this.events.on('kernel_created.Session', v2);
this.events.on('kernel_dead.Session', v2);
this.events.on('kernel_killed.Session', v2);
this.events.on('kernel_dead.Kernel', (function (){
v1.delete();
}));
});
var v1 = (function (v1){
return v1.toFixed(9);
});
var v2 = (function (){
var v1 = ({toString : (function (){
return "false";
})});
var v2 = "false";
var v3 = new Array(v2, "false", "false1", undefined, 0, false, null, 1, v1, 0);
if((v3.lastIndexOf("false")) === (1)){
return true;
}
});
(v1.BindLightShadow) = (function (v1, v2, v3, v4, v5, v6){
var v7 = v1.getShadowGenerator();
if((v3.receiveShadows) && (v7)){
if(! v1.needCube()){
v5.setMatrix(("lightMatrix") + (v4), v7.getTransformMatrix());
}else {
if(! v6){
(v6) = true;
v5.setFloat2("depthValues", v2.activeCamera.minZ, v2.activeCamera.maxZ);
}
}
v5.setTexture(("shadowSampler") + (v4), v7.getShadowMapForRendering());
v5.setFloat3(("shadowsInfo") + (v4), v7.getDarkness(), (v7.blurScale) / (v7.getShadowMap().getSize().width), v7.bias);
}
return v6;
});
var v3 = v1(v2);
(v3[5]) = v2('a', 'b', 'c', 'd', 'e', 'f');
