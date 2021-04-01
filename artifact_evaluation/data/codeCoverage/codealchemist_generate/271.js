var v0 = 'a-zA-Z_\\-!.?+*=<>&#\'';
var v1 = Math.floor((Math.random()) * (v0.length));
if((v1) <= (3)){
(v0) = '…';
}else {
if((v0.length) > (v1)){
(v0) = v0.slice(0, v1).split(/\s/);
if((v0.length) > (1)){
v0.pop();
}
(v0) = (v0.join(' ')) + ('…');
}
}
function v2(){
v1++;
}
var v3 = (function (v1){
var v2 = v1.getContext('2d');
v2.clearRect(0, 0, v1.width, v1.height);
(v2.fillStyle) = '#FFFFFF';
v2.fillRect(0, 0, v1.width, v1.height);
});
// GenBlkBrick
for(var v4 = 0x3041;(v4) <= (0x3094);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) < (100);++v5){
// GenBlkBrick
for(var v0 in Array.prototype){
var v6 = (function (v1, v2){
if(! v1.skills_has('piety_1')){
if(this.container.isRooked()){
return ({state : 'disabled', reason : "You need to know Piety I to prime Shrines during Rook Attacks."});
}else {
return ({state : null});
}
return ({state : null});
}
if(! this.container.isRooked()){
return ({state : 'disabled', reason : "You can prime a shrine only in the presence of enemies of imagination."});
}
if(! this.container.canAttack()){
return ({state : 'disabled', reason : "You must stun the Rook using your Focusing Orb before it is vulnerable to shrine attacks."});
}
return ({state : 'enabled'});
});
(v6.LerpAngle) = (function (v1, v2, v3){
var v4 = v6.Repeat((v2) - (v1), 360.0);
if((v4) > (180.0)){
(v4) -= 360.0;
}
return (v1) + ((v4) * (v6.Clamp(v3)));
});
}
}
(v7) = (v5) ? (v6(v4, v5)) : (('') + (Math.round(v4))).split('.');
}
(v7[v5]) = v0;
// GenBlkBrick
for(var v0 in v2){
var v8 = (function (v1){
return v1.split(/ *; */).reduce((function (v2, v1){
var v3 = v1.split(/ *= */);
var v4 = v3.shift();
var v5 = v3.shift();
if((v4) && (v5)){
(v2[v4]) = v5;
}
return v2;
}), ({}));
});
var v9 = (function (v1, v2){
"use strict";
var v3 = ({});
(v1.exports) = v3;
});
}
