var v0 = (function (v1, v2, v3){
var v4 = v3(102), v5 = v3(79);
(v1.exports) = (Object.keys) || ((function (v1){
return v4(v1, v5);
}));
});
// GenBlkBrick
for(var v1 = 1;(v1) <= (100);v1++){
var v2 = (function (){
(this.min.x) = (this.min.y) = + Infinity;
(this.max.x) = (this.max.y) = - Infinity;
return this;
});
// GenBlkBrick
for(var v0 in v1){
var v3 = (function (v1){
if((v1) < ((1) / (2.75))){
return ((7.5625) * (v1)) * (v1);
}else {
if((v1) < ((2) / (2.75))){
return (((7.5625) * ((v1) -= (1.5) / (2.75))) * (v1)) + (0.75);
}else {
if((v1) < ((2.5) / (2.75))){
return (((7.5625) * ((v1) -= (2.25) / (2.75))) * (v1)) + (0.9375);
}else {
return (((7.5625) * ((v1) -= (2.625) / (2.75))) * (v1)) + (0.984375);
}
}
}
});
// GenBlkBrick
for((v4) = 0;(v4) < (16);(v4) = (v4) + (1)){
{
var v5 = 0;
for(var v6 = 0;((v6) + (v4)) < (v3);v6++){
if((v4[(v6) + (v4)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v4)];
(v4[(v6) + (v4)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v4) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v4) = Math.floor(((v4) * (10)) / (13));
}
}
}
}
}
if((v0) && (v1)){
var v2 = 0;
var v3 = v1.length;
while((v2) != (- 1)){
(v2) = v0.indexOf(v1, v2);
if((v2) != (- 1)){
(v2) += v3;
v1++;
}
}
}
while(v4--){
new v3();
}
if(((v4) === (1)) && ((v5) === (6.99))){
(v7) = true;
}
// GenBlkBrick
do {
function v8(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4, v5 = '';
var v6 = (function (){
var v7 = v2(this).val();
if((v4) && ((v4.state()) === ('pending'))){
v4.reject(({statusText : 'abort'}));
}
if((v7) !== (v5)){
(v5) = v7;
v3.empty();
(v4) = v2(v5, 3);
v4.then((function (v9){
var v10 = v9[1];
v2.each(v10, (function (v11, v12){
v2((('<li>') + (v12)) + ('</li>')).appendTo(v3);
}));
}), (function (v13){
if((v13.statusText) !== ('abort')){
v2((('<li>') + (v13.statusText)) + ('</li>')).appendTo(v3);
}
}));
}
});
v1.keyup(v3(v6, 500));
}
if((v1) > (5)){
(v4) = (v4) + (v2);
break ;
}
} while((typeof v4.prop1) !== (typeof v4.prop1));
// GenBlkBrick
for(;(v1) > (0);(v1) = Math.floor((v1) / (16))){
function v9(v1){
try{
throw v1;
}catch(v2){
return v6;
}
}
(v10) = (v6) ? (v9(v1, v6)) : (('') + (Math.round(v1))).split('.');
}
var v11 = (function (v1, v2, v3){
var v4 = v3(110), v5 = v3(265), v6 = v3(63), v7 = v3(47), v8 = v3(496);
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
