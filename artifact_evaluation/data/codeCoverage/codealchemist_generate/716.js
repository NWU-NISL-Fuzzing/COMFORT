var v0 = (function (v1){
return this.request('contacts/delete_manual_contacts', v1, 'user', 'api', 'rpc');
});
// GenBlkBrick
for(var v1 = 1;(v1) < (2);++v1){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
// GenBlkBrick
for(var v4 = 0;- 0;){
var v5 = (function (){
return this.getPropertyValue('-webkit-mask-box-image-outset');
});
while(v4--){
new v5();
}
}
}
(v6) = (v4) ? (v5(v2, v4)) : (('') + (Math.round(v2))).split('.');
// GenBlkBrick
for(var v7, v8 = [], v9 = 0;(v9) < (256);v9++){
var v10 = (function (v1, v2){
var v3 = (v1.x) + (v1.width), v4 = (v1.y) + (v1.height), v5 = (v2.x) + (v2.width), v6 = (v2.y) + (v2.height);
return ! ((((v3) < (v2.x)) || ((v5) < (v1.x))) || ((v4) < (v2.y))) || ((v6) < (v1.y));
});
Array.prototype.reduce.call(v10, v0, v7);
}
(v11) = (v4) ? (v10(v7, v4)) : (('') + (Math.round(v7))).split('.');
for((v12) = 0;(v12) < (v11.length);v12++){
(v8[v1++]) = (1) << ((v11[v12]) + (224));
}
for(var v13 = 0;(v13) < (v11.length);v13++){
var v2 = v11[v13];
if((typeof v2) === ('string')){
(v2) = v3.getTileset(v2);
}
if(v2){
v8.push(v2);
var v5 = v2.firstgid;
for(var v6 = 0;(v6) < (v2.total);v6++){
(v6[(v5) + (v6)]) = v2;
}
}
}
while((++v1) < (v13)){
var v2 = v3[v1];
if(v4(v2, v1, v3)){
(v8[v4++]) = v2;
}
}
