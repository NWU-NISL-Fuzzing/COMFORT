'\\145';
var v0 = (function (){
this.route("album", (function (){
this.route("song");
}));
});
(v0.prototype._onLoad) = (function (v1){
this._onAssetLoad.call(this._scope, this.propertyName, this.parent, v1);
});
var v1 = (function (v1, v2){
var v3 = 'mui-action';
var v4 = (function (v5, v6){
var v7 = (v6.className) || ('');
if((typeof v7) !== ('string')){
(v7) = '';
}
if((v7) && (~ v7.indexOf(v3))){
if(v6.classList.contains('mui-action-back')){
v5.preventDefault();
}
return v6;
}
return false;
});
v1.registerTarget(({name : v2, index : 50, handle : v4, target : false, isContinue : true}));
});
function v2(v1, v2, v3, v4, v5){
return v0(v1(v1, v2, v3, v4), v5);
}
// GenBlkBrick
for(var v3 in v1){
if(v1(v3)){
continue ;
}
}
function v4(v1, v2){
var v3 = ({dx : v1.v, dv : v0(v1)}), v5 = v1(v1, (v2) * (0.5), v3), v7 = v1(v1, (v2) * (0.5), v5), v8 = v1(v1, v2, v7), v9 = ((1.0) / (6.0)) * (((v3.dx) + ((2.0) * ((v5.dx) + (v7.dx)))) + (v8.dx)), v10 = ((1.0) / (6.0)) * (((v3.dv) + ((2.0) * ((v5.dv) + (v7.dv)))) + (v8.dv));
(v1.x) = (v1.x) + ((v9) * (v2));
(v1.v) = (v1.v) + ((v10) * (v2));
return v1;
}
for(var v5 = 0;(v5) < (v1);v5++){
(v3) += v0();
}
