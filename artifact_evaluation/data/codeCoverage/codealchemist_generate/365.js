var v0 = (function (){
try{
Object.defineProperty(Array.prototype, "0", ({value : 100, writable : false, configurable : true}));
var v3 = [];
return (v3.hasOwnProperty("0")) && ((v3[0]) === (101));
}finally{
delete Array.prototype[0];
}
});
var v1 = ({get : v0, enumerable : false, configurable : false});
(v1.argument) = 0.12;
Object.defineProperty(v1, "foo", ({value : 42, writable : true, enumerable : true}));
Object.defineProperties(v1, ({prop : v0}));
v0(/(octop|vir)i$/i, "$1us");
(v1.fc_newsharedfolder) = "New shared folder";
var v2 = (function (v1){
var v2;
for(v2 in this.layerRenderers_){
if(! (v2) in (v1.layerStates)){
v1.postRenderFunctions.push(this.removeUnusedLayerRenderers_.bind(this));
return;
}
}
});
