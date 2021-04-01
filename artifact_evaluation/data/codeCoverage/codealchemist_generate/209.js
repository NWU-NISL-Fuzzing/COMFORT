var v0 = (function (v1, v2){
(v1.textContent) = ((typeof v2) === ('undefined')) ? ('') : (v2);
});
(v0.EVENT) = "event";
(v0.Normalize) = (function (v1, v2, v3){
return ((v1) - (v2)) / ((v3) - (v2));
});
var v1 = (function (v1){
var v2 = /^git(\+(ssh|https?))?:/;
return v2.test(v1);
});
(v1.enumerable) = true;
(v0._GetTargetProperty) = (function (v1){
return ({name : "target", targetType : ((v1) instanceof (v2.Mesh)) ? ("MeshProperties") : (((v1) instanceof (v2.Light)) ? ("LightProperties") : (((v1) instanceof (v2.Camera)) ? ("CameraProperties") : ("SceneProperties"))), value : ((v1) instanceof (v2.Scene)) ? ("Scene") : (v1.name)});
});
function v2(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v0(v3);
(v4) += v1(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
function v3(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v0(v3);
(v4) += v1(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
