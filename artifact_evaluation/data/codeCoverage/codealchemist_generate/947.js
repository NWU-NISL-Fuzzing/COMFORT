var v0 = (function (v1, v2, v3){
var v4 = v3(2127), v5 = v3(2126)(v4);
(v1.exports) = v5;
});
var v1 = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?';
v0(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
var v2 = (function (){
this.addFileToVFS("MathJax_Math-italic-normal.ttf", v1);
this.addFont("MathJax_Math-italic-normal.ttf", "mathjax_math-italic", "normal");
});
(v2[v1]) = v0[v1];
function v3(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v0(v7)]) = v2(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
// GenBlkBrick
for(var v4 = 1;(v4) <= (100);v4++){
(v2.prototype._update) = (function (){
this.setRenderList(this._renderList);
});
function v5(v1, v2, v3, v4, v5){
v0(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v2));
}
}
v0(v4);
