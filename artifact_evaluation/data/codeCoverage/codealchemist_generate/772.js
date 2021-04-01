var v0 = (function (v1){
(v1.FHalfCarry) = true;
(v1.FSubtract) = false;
(v1.FZero) = ((v1.registersHL) & (0x0800)) == (0);
});
(v0.TransformToRef) = (function (v1, v2, v3){
v4.Vector3.TransformCoordinatesToRef(v1.origin, v2, v3.origin);
v4.Vector3.TransformNormalToRef(v1.direction, v2, v3.direction);
v1.direction.normalize();
});
// GenBlkBrick
for(var v1 = 0;(v1) < (2);v1++){
{
(v2) = (v1) === (2);
}
}
(v3) = new Array(v1);
function v4(){
if(! v2){
(v2) = true;
v0(v3.get());
}
return v4;
}
Array.prototype.reduce.call(v4, v0, v1);
// GenBlkBrick
for(var v0 in v0.prototype){
var v5 = (function (v1, v2, v3){
'use strict';
var v4 = v1('./subtypes');
(v2.exports) = ({hasLines : v4.hasLines, hasMarkers : v4.hasMarkers, hasText : v4.hasText, isBubble : v4.isBubble, attributes : v1('./attributes'), supplyDefaults : v1('./defaults'), crossTraceDefaults : v1('./cross_trace_defaults'), calc : v1('./calc').calc, crossTraceCalc : v1('./cross_trace_calc'), arraysToCalcdata : v1('./arrays_to_calcdata'), plot : v1('./plot'), colorbar : v1('./marker_colorbar'), style : v1('./style').style, styleOnSelect : v1('./style').styleOnSelect, hoverPoints : v1('./hover'), selectPoints : v1('./select'), animatable : true, moduleType : 'trace', name : 'scatter', basePlotModule : v1('../../plots/cartesian'), categories : [], meta : ({})});
});
}
function v6(){
if(! v2){
(v2) = true;
v0(v3.get());
}
return v4;
}
