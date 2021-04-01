var v0 = (function (v1){
return (v1.object.name) == ("Math");
});
(v0.prototype._onDeactivateTool) = (function (v1, v2){
(this.active) = false;
var v3 = (this.options) && (this.options.alwaysVisible);
if(! v3){
this.hideControls();
}else {
this.showControls();
}
});
(v0.CreateAndShow) = (function (v1, v2, v3){
var v4 = new v0(v1);
v4.show(v2, v3);
return v4;
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(888), v5 = v3(216);
(v1.exports) = v3(349)("Set", (function (v1){
return (function (){
return v1(this, ((arguments.length) > (0)) ? (arguments[0]) : (void 0));
});
}), ({add : (function (v1){
return v4.def(v5(this, "Set"), (v1) = ((0) === (v1)) ? (0) : (v1), v1);
})}), v4);
});
(v0.parse) = v1.parse;
var v2 = (function (){
(this.stopTabNabbing_) = true;
});
var v3 = (function (v1){
var v2 = v1.getCursorPosition();
var v3 = v1.session.getLine(v2.row);
var v4 = v3.substring(0, v2.column);
var v5 = v3.substr(v2.column);
var v6 = this.snippetMap;
var v7;
this.getActiveScopes(v1).some((function (v8){
var v9 = v6[v8];
if(v9){
(v7) = this.findMatchingSnippet(v9, v4, v5);
}
return ! ! v7;
}), this);
if(! v7){
return false;
}
v1.session.doc.removeInLine(v2.row, (v2.column) - (v7.replaceBefore.length), (v2.column) + (v7.replaceAfter.length));
(this.variables.M__) = v7.matchBefore;
(this.variables.T__) = v7.matchAfter;
this.insertSnippet(v1, v7.content);
(this.variables.M__) = (this.variables.T__) = null;
return true;
});
Object.defineProperty(v0.prototype, "rightHMatrix", ({get : (function (){
var v2 = ((this.hScreenSize) / (4)) - ((this.lensSeparationDistance) / (2));
var v3 = ((4) * (v2)) / (this.hScreenSize);
return v4.Matrix.Translation(- v3, 0, 0);
}), enumerable : true, configurable : true}));
