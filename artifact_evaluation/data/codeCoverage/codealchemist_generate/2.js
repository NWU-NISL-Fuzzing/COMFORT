// GenBlkBrick
for(var v0 = 0;(v0) < (8);v0++){
if((v0) === (6)){
break ;
}
}
var v1 = ((v0) + (8)) >> (2);
{
(v1) = (((7.5625) * ((v1) -= (2.625) / (2.75))) * (v1)) + (0.984375);
}
var v2 = (function (v1, v2){
var v3 = this.format(90, "decimal");
if(((typeof v1) !== ("string")) || ((v3[1]) === ("0"))){
return v1;
}
var v4 = (v2) ? (v3[1]) : ("0"), v5 = (v2) ? ("0") : (v3[1]), v6 = (v2) ? (v3[0]) : ("9"), v7 = new RegExp((((("[") + (v4)) + ("-")) + (v6)) + ("]"), "g");
return v1.replace(v7, (function (v9){
return String.fromCharCode((v9.charCodeAt(0)) + ((v5.charCodeAt(0)) - (v4.charCodeAt(0))));
}));
});
{
(v3) = (v1) % (v0);
(v1) = v0;
(v0) = v3;
}
// GenBlkBrick
for(var v4 = 1;(v4) < (v1);v4++){
var v5 = Math.sqrt((((v4) * (v4)) + ((v3) * (v3))) + ((v1) * (v1)));
}
// GenBlkBrick
for((v6) = 0;(v6) < ((v1) - (1));v6++){
// GenBlkBrick
while(true){
var v7 = (function (v1){
return (("for (const c = 0; ; ") + (v1)) + (") {}");
});
}
while((v6--) > (0)){
v7();
}
}
(v8) = v7(v3, v5, v1);
