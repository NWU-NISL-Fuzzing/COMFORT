var v0 = (function (v1){
if((v1) > (255)){
return 255;
}else {
if((v1) < (0)){
return 0;
}
}
return v1;
});
var v1 = (function (v1, v2){
return Array.prototype.map.call(arguments, v0);
});
// GenBlkBrick
for(var v2 = [], v3 = 0;(v3) < (256);v3++){
if((v2[v3]) === ('')){
continue ;
}
}
(v0[v2[v3].toUpperCase()]) = (v0[v2[v3].toUpperCase().substring(0, 3)]) = v3;
Object.defineProperty(v2, "1", ({set : (function (){
}), configurable : true}));
for(var v4 = 0;(v4) <= (v3);v4++){
(v9) = (v4) / (v3);
(v10) = v1(v5, v6, v9);
(v11) = v1(v8, v9, v9);
(v5) = v1(v6, v11, v9);
(v6) = v1(v9, v13, v9);
(v7) = v1(v10, v5, v9);
(v8) = v1(v11, v6, v9);
v2.push(v7, v8);
}
function v12(v1){
debugger;
return ((v2) + (v1)) + (v8);
}
// GenBlkBrick
for(;(v8) > (0);(v8) = Math.floor((v8) / (16))){
(v13) = v1(v2, v3, v8);
(v14) = ((v9) <= (0.5)) ? ((v7) / ((v11) + (v4))) : ((v7) / (((2) - (v11)) - (v4)));
}
