var v0 = (function (v1, v2, v3){
"use strict";
var v4 = ({Yadda : v1('./Yadda'), EventBus : v1('./EventBus'), Interpreter : v1('./Interpreter'), Context : v1('./Context'), Library : v1('./Library'), Dictionary : v1('./Dictionary'), FeatureFileSearch : v1('./FeatureFileSearch'), FileSearch : v1('./FileSearch'), Platform : v1('./Platform'), localisation : v1('./localisation/index'), converters : v1('./converters/index'), parsers : v1('./parsers/index'), plugins : v1('./plugins/index'), shims : v1('./shims/index'), createInstance : (function (){
return v4.Yadda.apply(null, Array.prototype.slice.call(arguments, 0));
})});
(v2.exports) = v4;
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("07214e70ff256be789f4bb9faf91a8fb.svg");
});
var v2 = (function (v1, v2, v3){
var v4 = v0(v1, v2);
var v6 = v0(v1, v3);
return v1(v4.min, v4.max, v6.min, v6.max);
});
(v0.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v1(this._root, v1);
return this.removeNode(v3);
});
(v1.prototype._on_error) = (function (v1){
return (function (v2, v3, v4){
v5.log_ajax_error(v2, v3, v4);
if(v1){
v1(v2, v3, v4);
}
});
});
function v3(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v2(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v1(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
// GenBlkBrick
for(var v4 = 0;(v4) < (5);++v4){
Array.prototype.reduce.call(v1, v0, v4);
}
var v5 = (function v5(v1){
if((! v1) || ((v3.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v1.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v1.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v1.call(v1, v6));
});
