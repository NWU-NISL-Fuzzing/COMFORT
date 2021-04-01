var v0 = (function (){
(this.__types) = ({});
(this.__actions) = ({});
(this.__keys) = ({});
(this.__cache) = ({});
});
v0(Array, []);
var v1 = (function (v1){
(v1.JointStyle) = ({BEVEL : "bevel", MITER : "miter", ROUND : "round"});
});
(v0.formatDijitFormWidget) = v1;
// GenBlkBrick
for((v2) = 0;(v2) < (1e4);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
var v5 = (function (v1, v2){
var v3 = Array.prototype.filter.call(arguments, v1);
return (v3.length) === (2);
});
var v6 = (function (v1, v2, v3){
(function (v1){
var v4 = v3(121), v5 = v3(5254), v6 = (((("object") == (typeof v2)) && (v2)) && (! v2.nodeType)) && (v2), v7 = ((((v6) && (("object") == (typeof v1))) && (v1)) && (! v1.nodeType)) && (v1), v8 = ((v7) && ((v7.exports) === (v6))) ? (v4.Buffer) : (void 0), v9 = ((v8) ? (v8.isBuffer) : (void 0)) || (v5);
(v1.exports) = v9;
}).call(this, v3(98)(v1));
});
(v6.prototype) = Object.create(v5.prototype);
