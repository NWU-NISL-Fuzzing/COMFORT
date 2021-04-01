var v0 = (function (){
(this.options.ignoreLeaks) = false;
return this;
});
// GenBlkBrick
for(var v1 = 0;(v1) < (41);v1++){
(v1) += (5) * (2);
(v1) += (v1) >> (16);
}
[].reduce(v0, v1);
// GenBlkBrick
for((v2) = 0;(v2) < (1e3);v2++){
// GenBlkBrick
for(((v3) = 0, (v1) = v2);(v3) < (v1);++v3){
var v4 = (function (v1, v2, v3){
var v4 = v3(27), v5 = v3(2), v6 = v3(18), v7 = v4.has, v8 = v4.get, v9 = v4.key, v10 = (function (v1, v2, v3){
var v4 = v7(v1, v2, v3);
if(v4){
return v8(v1, v2, v3);
}
var v5 = v6(v2);
return ((null) !== (v5)) ? (v10(v1, v5, v3)) : (void 0);
});
v4.exp(({getMetadata : (function (v1, v2){
return v10(v1, v5(v2), ((3) > (arguments.length)) ? (void 0) : (v9(arguments[2])));
})}));
});
if((v3) === (6)){
break ;
}
}
var v5 = (function (v1){
var v2 = v1.charCodeAt(0), v3 = v1.length;
if((1) === (v3)){
switch(v2){
}
}else {
if((2) === (v3)){
switch(v2){
}
}else {
if(((97) === (v2)) && (("and") === (v1))){
return 2;
}
}
}
return 0;
});
}
(v6) = v0(v1, v3, v2);
delete v4.caller;
Array.prototype.reduce.call(v5, v4, v1);
(v1) = ((v3) >>> (0)) % ((v1) >>> (0));
