var v0 = (function (v1, v2, v3){
var v4 = v3(441), v5 = v3(2147), v6 = v3(2146), v7 = v3(2145), v8 = v3(2144), v9 = "[object Boolean]", v10 = "[object Date]", v11 = "[object Map]", v12 = "[object Number]", v13 = "[object RegExp]", v14 = "[object Set]", v15 = "[object String]", v16 = "[object Symbol]", v17 = "[object ArrayBuffer]", v18 = "[object DataView]", v19 = "[object Float32Array]", v20 = "[object Float64Array]", v21 = "[object Int8Array]", v22 = "[object Int16Array]", v23 = "[object Int32Array]", v24 = "[object Uint8Array]", v25 = "[object Uint8ClampedArray]", v26 = "[object Uint16Array]", v27 = "[object Uint32Array]";
(v1.exports) = (function (v1, v2, v3){
var v28 = v1.constructor;
switch(v2){
}
});
});
var v1 = (function (){
var v1 = (function v1(){
});
(v1.log) = [];
(v1.preload) = (function (){
var v2 = this;
var v3 = v2.options();
(v1.spec) = v3.log;
return ({extend : ({logger : (function (v2, v4){
v1.log.push(v4);
})})});
});
return v1;
});
Object.defineProperty(v1, "UV5Kind", ({get : (function (){
return v1._UV5Kind;
}), enumerable : true, configurable : true}));
var v2 = (function (v1, v2){
var v3;
var v4 = ! v1.every((function (v5, v6){
(v3) = v6;
return ! v2(v5, v6, v1);
}));
return (v4) ? (v3) : (- 1);
});
var v3 = (function (){
return this.contextVariables;
});
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v0(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v2(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v3(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v3(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
// GenBlkBrick
for(var v5 = 0;- 0;){
if((v5) < (20)){
break ;
}
}
