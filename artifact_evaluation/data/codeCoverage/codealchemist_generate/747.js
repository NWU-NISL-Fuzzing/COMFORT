var v0 = (function (v1, v2, v3){
"use strict";
v3(67)("blink", (function (v1){
return (function (){
return v1(this, "blink", "", "");
});
}));
});
(v0.prototype.updateOnTool) = (function (v1){
var v2 = (v1.toolOptionsList) && ((v1.toolOptionsList.indexOf(this.optionName)) !== (- 1)), v3 = (! this.showOnEditMode) || (v1.isEditing), v4 = (v2) && (v3);
if(v4){
(this.active) = true;
this.showControls();
if(this.onActivateTool){
this.onActivateTool(v1);
}
}else {
(this.active) = false;
this.hideControls(v1.forceOptionsHide);
}
});
(v0.GetDefault) = (function (){
var v1 = new v0();
(v1.hResolution) = 1280;
(v1.vResolution) = 800;
(v1.hScreenSize) = 0.149759993;
(v1.vScreenSize) = 0.0935999975;
(v1.vScreenCenter) = 0.0467999987;
(v1.eyeToScreenDistance) = 0.0410000011;
(v1.lensSeparationDistance) = 0.0635000020;
(v1.interpupillaryDistance) = 0.0640000030;
(v1.distortionK) = [];
(v1.chromaAbCorrection) = [];
(v1.postProcessScaleFactor) = 1.714605507808412;
(v1.lensCenterOffset) = 0.151976421;
return v1;
});
(v0.modes) = ({});
(v0.ACTION) = "action";
// GenBlkBrick
while(false){
var v1 = (function (v1, v2, v3){
var v4 = v3(2172), v5 = v3(445), v6 = v3(346);
(v1.exports) = (function (v1){
return ((("function") != (typeof v1.constructor)) || (v6(v1))) ? (({})) : (v4(v5(v1)));
});
});
}
(v0.DATA_VERSION) = v0.DATA_VERSION_5_6;
(v2) = (function (){
v1();
v0();
});
