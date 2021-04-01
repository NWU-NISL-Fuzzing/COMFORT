// GenBlkBrick
for(++v0;--v0;(v1) = ((((v1) %= (0x7fffffff) + (1)) & (0x40000000)) === (0x40000000)) ? ((v1) * (2)) : (((((v1) - (0x40000000)) * (2)) + (0x7fffffff)) + (1))){
for(var v1 = 0;(v1) < (1000);v1++){
var v2 = [];
v2.sort((function (v2, v2){
return (v2) - (v2);
}));
(v0) += v2[0];
}
}
{
(v2[3]) = 5;
(v2[3.5]) = 7;
}
(v2[(v0) - (1)]) = v2[v1];
// GenBlkBrick
while((v0) < ((v1) - (v2))){
var v3 = (function (v1){
if((v1) instanceof (Error)){
return (v1.stack) || (v1.message);
}
return v1;
});
var v4 = (function (){
this.setExpanded(true);
});
}
(v3[v2[v1]]) = (v3[v2[v1].substring(0, 3)]) = v4(v1);
(v3[v2[v0]]) = (v3[v2[v0].substring(0, 3)]) = v4(v0);
function v5(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v4(v7)]) = v3(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
{
(v6) = (v1) / (v0);
(v11) = v4(v5, v6, v6);
(v12) = v4(v8, v9, v6);
(v7) = v4(v6, v11, v6);
(v8) = v4(v9, v13, v6);
(v9) = v4(v11, v7, v6);
(v10) = v4(v12, v8, v6);
v2.push(v9, v10);
}
