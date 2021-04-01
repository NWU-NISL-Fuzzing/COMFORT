var v0 = (function (v1, v2){
"use strict";
v3.module("sap.ui.core.sample.odata.v4.SalesOrders - Create Relative");
v2("Create, modify and delete within relative listbinding", (function (v4, v5, v6){
v1.createRelative(v4, v5, v6);
}));
});
var v1 = (function (){
this.standardHandlers.splice(0, this.standardHandlers.length);
this.targetedHandlers.splice(0, this.targetedHandlers.length);
});
Array.prototype.forEach.call(v0, v1);
(v0.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v1(this._root, v1);
return this.removeNode(v3);
});
for(var v2 in v1){
if(v1.hasOwnProperty(v2)){
(v0[v2]) = v1[v2];
}
}
(v1.prototype.toString) = (function (){
var v1 = this.o;
var v2 = this.names.map(v3);
return (("{\n  ") + (v2.join(",\n  "))) + ("\n}");
function v3(v4){
var v5 = "", v6 = Object.getOwnPropertyDescriptor(v1, v4);
if(! v6){
return (("nonexistent ") + (v4)) + (": undefined");
}
if(! v6.configurable){
(v5) += "permanent ";
}
if(((v6.get) && (! v6.set)) || (! v6.writable)){
(v5) += "readonly ";
}
if(! v6.enumerable){
(v5) += "hidden ";
}
if((v6.get) || (v6.set)){
(v5) += ("accessor ") + (v4);
}else {
(v5) += ((v4) + (": ")) + (((typeof v6.value) === ("function")) ? ("function") : (v6.value));
}
return v5;
}
});
// GenBlkBrick
for(var v3 = 0;(v3) < (5);++v3){
if((v3) === (6)){
break ;
}
}
(v2) = v2.replace("function () { return ", "");
