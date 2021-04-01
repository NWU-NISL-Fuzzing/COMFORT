var v0 = (function (){
return this._ctx;
});
(v0.PI_Q) = (Math.PI) / (4.0);
var v1 = (function (v1, v2, v3){
var v4 = v3(888)(Object.getPrototypeOf, Object);
(v1.exports) = v4;
});
var v2 = (function (v1){
v1.add(({'header.a' : ({background : '#222'})}));
});
(v0.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v2(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
var v3 = (function (v1){
var v2 = v1.length, v3 = new v1.constructor(v2);
if(((v2) && ((typeof v1[0]) == ('string'))) && (v0.call(v1, 'index'))){
(v3.index) = v1.index;
(v3.input) = v1.input;
}
return v3;
});
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v3(v3)[1]) : (v3(v3)[0]));
}else {
if(v4){
return (v5) + (v3(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v3(v3)[1]) : (v3(v3)[2]));
}
}
}
}
(v3.prototype.dispose) = (function (){
this.hide();
this.detachFromMesh();
(this.ray) = null;
});
