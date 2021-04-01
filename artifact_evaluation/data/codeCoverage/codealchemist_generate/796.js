var v0 = (function (v1, v2, v3){
var v4 = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
var v5 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
var v6 = /(([a-zA-Z0-9_\-\.]+)@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6}))+/gim;
return v1.replace(v4, "<a target='_blank' href='$&' onclick='void(0)'>$&</a>").replace(v5, "$1<a target='_blank' onclick='void(0)' href='http://$2'>$2</a>").replace(v6, "<a target='_blank' onclick='void(0)' href='mailto:$1'>$1</a>");
});
// GenBlkBrick
for((v1) = 0;(v1) < (v1);v1++){
var v2 = (function (v1, v2){
var v3 = this._calendarEl[v1], v4 = (v2) && (v2.hours());
if((typeof v3) === ('function')){
(v3) = v3.apply(v2);
}
return v3.replace('{}', (((v4) % (12)) === (1)) ? ('στη') : ('στις'));
});
}
// GenBlkBrick
for(var v3, v4 = [], v5 = 0;(v5) < (256);v5++){
v4.push(({group1 : v5, group2 : 1, id : (((v5) * (9)) + (v3)) + (7)}));
// GenBlkBrick
while((v5--) > (0)){
if((v5) === (6)){
break ;
}
}
}
(v2[v4[v5].toUpperCase()]) = (v2[v4[v5].toUpperCase().substring(0, 3)]) = v5;
(v4[v3]) = typeof v4[v3];
// GenBlkBrick
for(var v6 = 0;(v6) < (12);v6++){
var v7 = (function (v1, v2, v3){
(v1.exports) = v3(2599);
});
if(v0){
if((v0.max) != (null)){
(v6) = Math.min(v0.max, v6);
}
if((v0.min) != (null)){
(v6) = Math.max(v0.min, v6);
}
}
}
v0(v7, v2);
while((v6) < (v5)){
(v4[v6++]) = v1;
(v1) += v3;
}
