var v0 = (function (v1, v2, v3){
var v4 = v3(1420), v5 = v3(137), v6 = Object.prototype, v8 = v6.hasOwnProperty, v9 = v6.propertyIsEnumerable, v10 = (v4((function (){
return arguments;
})())) ? (v4) : ((function (v1){
return ((v5(v1)) && (v8.call(v1, "callee"))) && (! v9.call(v1, "callee"));
}));
(v1.exports) = v10;
});
(v0.ROTATE_OFFSET) = "rotateOffset";
var v0, v1, v1 = 0, v2 = 0, v4;
(v3) = (v2) ? (v0(v1, v2)) : (('') + (Math.round(v1))).split('.');
{
(v4) = (v2) / (v1);
(v9) = v0(v5, v6, v4);
(v10) = v0(v8, v9, v4);
(v5) = v0(v6, v11, v4);
(v6) = v0(v9, v13, v4);
(v7) = v0(v9, v5, v4);
(v8) = v0(v10, v6, v4);
v3.push(v7, v8);
}
while((v0) < (v6)){
if((v2[v0]) != (0xffffffff)){
v0++;
continue ;
}
(v11) = (v0) - (v4);
(v5[(v5) + (v4)]) = v11;
v11++;
v0++;
while((v0) < (v6)){
if((v2[v0]) != (0xffffffff)){
(v5[(v5) + (v8)]) = v11;
(v5) += v1;
v0++;
(v11) = - 1;
break ;
}else {
v11++;
v0++;
}
}
}
var v12 = (function (){
return '<Resolver>';
});
while((v10) < (v9)){
(v3[v10++]) = v4;
(v4) += v6;
}
