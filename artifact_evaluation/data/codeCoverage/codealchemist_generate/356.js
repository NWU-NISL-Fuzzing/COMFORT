var v0 = (function (v1, v2, v3){
var v4 = v3(103), v5 = v3(19), v6 = v4.key, v7 = v4.set;
v4.exp(({defineMetadata : (function (v1, v2, v3, v4){
v7(v1, v2, v5(v3), v6(v4));
})}));
});
function v1(){
(this.constructor) = v0;
}
(v1.prototype.renderAlphaTestSorted) = (function (v1){
return v1.renderSorted(v1, this._alphaTestSortCompareFn, this._scene.activeCamera, false);
});
(v1.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v0(v9, v4);
}));
return v4;
});
var v2 = (function (v1, v2, v3){
var v4 = v3(2259), v5 = v3(157);
(v1.exports) = (function (v2, v3, v6, v7, v8){
return ((v2) === (v3)) || (((((null) == (v2)) || ((null) == (v3))) || ((! v5(v2)) && (! v5(v3)))) ? (((v2) != (v2)) && ((v3) != (v3))) : (v4(v2, v3, v6, v7, v1, v8)));
});
});
function v3(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v0(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
var v4 = [].map(v0);
(v1.prototype.freeze) = (function (){
var v1 = this.o, v2 = ({writable : false, configurable : false});
this.names.forEach((function (v3){
if(v1.hasOwnProperty(v3)){
Object.defineProperty(v1, v3, v2);
}
}));
return this;
});
