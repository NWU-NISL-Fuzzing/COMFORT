// GenBlkBrick
for((v0) = (v1) - (1);(v0) >= (0);--v0){
var v1 = (function (){
return ({rows : [], selected : null});
});
}
v1(/([m|l])ouse$/i, "$1ice");
var v2 = (function (){
return this._callbackName;
});
Array.prototype.reduce.call(v2, v1, v0);
var v3 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v1, v0);
});
for(var v4 = 0;(v4) <= (v0);v4++){
v2(v4);
}
function v5(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v2(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v3(v1)) ? (v1(v3)[1]) : (v1(v3)[0]));
}else {
if(v4){
return (v5) + (v1(v3)[1]);
}else {
return (v5) + ((v3(v1)) ? (v1(v3)[1]) : (v1(v3)[2]));
}
}
}
}
var v6 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v3, save : v3, init : v5, shutdown : v5, getAuthUrl : v3, revokeToken : v3});
