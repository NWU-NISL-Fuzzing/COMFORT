var v0 = (function (){
(this.body) = 'Hello World!\n-- toa';
});
(v0.DEFAULT_NAME) = "default";
var v1 = (function (v1, v2){
(v1.exports) = ({card : "card-19l4Be marginBottom20-2Ifj-2", spacing : "spacing-Q0xkL- marginBottom20-2Ifj-2", error : "error-2bw8wf marginTop8-2gOa2N"});
});
(v0.default) = v1;
var v2 = (function (v1, v2, v3){
var v4 = v1(v1, v2);
var v6 = v1(v1, v3);
return v0(v4.min, v4.max, v6.min, v6.max);
});
function v3(v1, v2, v3, v4, v5){
(v3) = v2(v3);
if(! v4){
(v4) = v7.base;
}
var v8;
(function v9(v1, v10, v11){
if((v1.start) > (v2)){
return;
}
var v12 = (v11) || (v1.type);
if((((v1.end) <= (v2)) && ((! v8) || ((v8.node.end) < (v1.end)))) && (v3(v12, v1))){
(v8) = new v1(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
v1(v2);
(v2.prototype.getIndex) = (function (v1){
var v2 = v1.left.size;
while((v1) !== (this._root)){
var v3 = v1.parent;
if((v3.right) === (v1)){
(v2) += (v3.left.size) + (1);
}
(v1) = v3;
}
return v2;
});
