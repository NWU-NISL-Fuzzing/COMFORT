var v0 = (function (v1){
return ((v1) | (0)) && (((1) >> (v1)) == (({})));
});
(v0.fns) = v1;
var v1 = (function (v1){
return (((typeof v1) === ('string')) && (v1)) && (/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(v1));
});
(v0.SerializeMesh) = (function (v1, v2, v3){
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
Array.prototype.forEach.call(v0, v1);
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v0(null);
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
v1(v2, v0);
var v3 = (function (v1, v2, v3){
var v4 = v3(905), v5 = v3(497);
(v1.exports) = (Object.keys) || ((function (v1){
return v4(v1, v5);
}));
});
