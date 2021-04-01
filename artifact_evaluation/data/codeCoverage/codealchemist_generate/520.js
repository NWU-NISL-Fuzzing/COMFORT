(v0) += v1;
var v1 = (function (){
return this.getPropertyValue('-webkit-margin-bottom-collapse');
});
v1(v0);
(v1.WIDTH) = "width";
var v2 = (function (v1, v2, v3){
var v4 = this.getGameName();
if(v4){
return ('Challenge nearby players to ') + (v4);
}
return 'Challenge nearby players to a random race';
});
var v3 = (function v3(v1, v2){
if((v2) === ('__proto__')){
if(! v2.call(v1, v2)){
return void 0;
}else {
if(v1){
return v1(v1, v2).value;
}
}
}
return v1[v2];
});
(v3.prototype.path) = (function v1(){
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
(v0) *= 1024;
