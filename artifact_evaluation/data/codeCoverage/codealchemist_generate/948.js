// GenBlkBrick
while((v0) < (- 8)){
// GenBlkBrick
for(var v0 = 3;(v0) >= (0);v0--){
var v1 = (function (){
return this.stack.pop();
});
}
if((v0) < (0)){
(v0) = (v0) + (4294967296);
}
}
var v2 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v1, v0);
});
// GenBlkBrick
for(var v0 in v2){
(v2.constructor) = v2;
(v2.prototype.then) = (function (v1){
(this._child) = v1;
(v1._actionManager) = this._actionManager;
v1._prepare();
return v1;
});
}
(v2.SerializeMesh) = (function (v1, v2, v3){
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
v1(v9, v4);
}));
return v4;
});
(v3) = v2(v2, v3, v0);
(v3) *= (1) / (v0);
Array.prototype.reduce.call(v2, v1, v0);
// GenBlkBrick
for((v4) = (v5) = 0;((0) <= (v2)) ? ((v5) < (v2)) : ((v5) > (v2));(v4) = ((0) <= (v2)) ? (++v5) : (--v5)){
if((v5) === (6)){
break ;
}
}
