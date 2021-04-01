var v0 = (function (v1, v2, v3){
var v4 = v3(623), v5 = v3(4), v6 = v3(304)("metadata"), v7 = (v6.store) || ((v6.store) = new v3(626)()), v8 = (function (v1, v2, v3){
var v5 = v7.get(v1);
if(! v5){
if(! v3){
return;
}
v7.set(v1, (v5) = new v4());
}
var v6 = v5.get(v2);
if(! v6){
if(! v3){
return;
}
v5.set(v2, (v6) = new v4());
}
return v6;
});
(v1.exports) = ({store : v7, map : v8, has : (function (v1, v2, v3){
var v4 = v8(v2, v3, ! 1);
return ((void 0) !== (v4)) && (v4.has(v1));
}), get : (function (v1, v2, v3){
var v4 = v8(v2, v3, ! 1);
return ((void 0) === (v4)) ? (void 0) : (v4.get(v1));
}), set : (function (v1, v2, v3, v4){
v8(v3, v4, ! 0).set(v1, v2);
}), keys : (function (v1, v2){
var v3 = v8(v1, v2, ! 1), v4 = [];
return ((v3) && (v3.forEach((function (v1, v2){
v4.push(v2);
}))), v4);
}), key : (function (v1){
return (((void 0) === (v1)) || (("symbol") == (typeof v1))) ? (v1) : (String(v1));
}), exp : (function (v1){
v5(v5.S, "Reflect", v1);
})});
});
(v0._GlobalId) = 0;
var v1 = (function (){
if((this.indicate_changed) === (undefined)){
return false;
}
return (this.editarea.initialText) !== (this.editarea.getString());
});
var v2 = (function (v1){
return ((this.getUint8(v1)) << (24)) >> (24);
});
(v0.prototype) = ((v1) === (null)) ? (Object.create(v1)) : (((v2.prototype) = v1.prototype, new v2()));
// GenBlkBrick
while((--v3) >= (0)){
var v4 = (function (v1, v2, v3){
var v4 = v3(247), v5 = v3(675);
(v1.exports) = (function (v1, v2){
return v4(v1, v5(v1), v2);
});
});
// GenBlkBrick
for(var v5 = 0;(v5) < (v1);v5++){
var v6 = v5, v7 = (v5) - (14);
// GenBlkBrick
for((v8) = 0;(v8) < (65536);v8++){
if((v8) < (20)){
break ;
}
}
}
}
// GenBlkBrick
while(((v7) < (v1)) && ((v2[v7]) > (0x80))){
Array.prototype.reduce.call(v0, v4, v7);
if((v7) === (6)){
break ;
}
}
(v9) = v1(v5, v7, v6);
