var v0 = (function (){
var v1 = 50;
var v2 = ({start : 500, end : 600});
var v3 = ({start : 10, end : 20});
var v4 = 1000;
this.assertEquals(430, this.axis.computeStart(v1, v2, v3, v4, "edge-start"));
this.assertEquals(610, this.axis.computeStart(v1, v2, v3, v4, "edge-end"));
this.assertEquals(510, this.axis.computeStart(v1, v2, v3, v4, "align-start"));
this.assertEquals(535, this.axis.computeStart(v1, v2, v3, v4, "align-center"));
this.assertEquals(530, this.axis.computeStart(v1, v2, v3, v4, "align-end"));
});
var v1 = (function (v1, v2, v3){
var v4 = v3(41), v5 = v3(96), v6 = v3(23), v7 = v3(18), v8 = v3(175);
(v1.exports) = (function (v1, v2){
var v3 = (1) == (v1), v9 = (2) == (v1), v10 = (3) == (v1), v11 = (4) == (v1), v12 = (6) == (v1), v13 = ((5) == (v1)) || (v12), v14 = (v2) || (v8);
return (function (v2, v8, v15){
for(var v16, v17, v18 = v6(v2), v19 = v5(v18), v20 = v4(v8, v15, 3), v21 = v7(v19.length), v22 = 0, v23 = (v3) ? (v14(v2, v21)) : ((v9) ? (v14(v2, 0)) : (void 0));(v21) > (v22);v22++){
if(((v13) || ((v22) in (v19))) && (((v17) = v20((v16) = v19[v22], v22, v18), v1))){
if(v3){
(v23[v22]) = v17;
}else {
if(v17){
switch(v1){
}
}else {
if(v11){
return ! 1;
}
}
}
}
}
return (v12) ? (- 1) : (((v10) || (v11)) ? (v11) : (v23));
});
});
});
var v2 = ({source : [], formatDropdownItem : v0, formatResult : v1});
(v2.EmptyStatement) = v1;
// GenBlkBrick
for(var v3 = 0;(v3) < (10000);v3++){
var v4 = (function (v1, v2, v3){
(v1[0]) = (v2[0]) - (v3[0]);
(v1[1]) = (v2[1]) - (v3[1]);
return v1;
});
(v3) -= 30;
}
(v2.BreakStatement) = (v2.ContinueStatement) = v0;
v0(v3);
// GenBlkBrick
for(var v5 in v0){
(v0._getActionType) = (function (v1){
switch(v1.toLowerCase()){
}
});
}
