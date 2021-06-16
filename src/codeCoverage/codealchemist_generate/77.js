// GenBlkBrick
for(var v0 = 0;(v0) < (2);v0++){
// GenBlkBrick
for((v1) = 0;(v1) < (9);v1++){
var v2 = (function (v1){
(v1.Field) = (function (v2){
(this.value) = (v2) || ('');
});
(v1.Field.prototype) = ({is : 'field', toString : (function (){
return (('[') + (this.value)) + (']');
}), 'ev' : (function (){
return this;
})});
});
}
v2(v1);
}
for(var v3 = 0;(v3) <= (v1);v3++){
v2(v3);
}
for(var v4 = 0;(v4) <= (v1);v4++){
v2(v4);
}
var v5 = (function (){
(this.string) = "world";
(this.number) = 12;
(this.boolean) = true;
(this.complex) = ({a : '<"hello">', b : "test"});
});
Array.prototype.reduce.call(v5, v2, v1);
(v1) = (v1) % (60);
(v6) = ((v1) * (v3)) * (3);
for(var v7 = 0;(v7) < (v6);v7++){
(v8) = (v7) % (v3);
v4.push((v3) + (v8), (v4) + (v8));
if((v8) == (v0)){
if(((v7) == (v1)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v3, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v6) += v3;
(v3) += v3;
(v4) = 0;
}else {
if(((v7) >= (v1)) && ((v10) == (true))){
v4.push(v3, v4);
}else {
if((v7) < (v1)){
if((v10) == (true)){
v4.push(v3, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v3) += v3;
(v4) += v3;
}
}
}
}
}
