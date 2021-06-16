var v0 = (function (v1, v2){
return ((v1) == (v2)) || ((v1) && (v1.endsWith(v2)));
});
(v0.prototype.onGestureEvent) = (function (v1){
var v2 = false;
for(var v3 = 0;((v3) < (this.allGestureListeners.length)) && (! v2);v3++){
(v2) |= this.allGestureListeners[v3].onGestureEvent(v1);
}
return v2;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(777), v5 = v3(418), v6 = "[object AsyncFunction]", v7 = "[object Function]", v8 = "[object GeneratorFunction]", v9 = "[object Proxy]";
(v1.exports) = (function (v1){
if(! v5(v1)){
return ! 1;
}
var v2 = v4(v1);
return ((((v2) == (v7)) || ((v2) == (v8))) || ((v2) == (v6))) || ((v2) == (v9));
});
});
(v0.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v1(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
// GenBlkBrick
for(var v2 = 0;(v2) < (10);v2++){
if((v2) === (6)){
break ;
}
(v2) |= ((v1) & (255)) << (16);
}
v1(v2);
var v3 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v0, v2);
});
if(v0){
(v2) |= (292) | (73);
}
