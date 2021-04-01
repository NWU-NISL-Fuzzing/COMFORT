var v0 = (function (v1, v2, v3){
var v4 = v3(201), v5 = v3(418), v6 = v3(1685);
(v1.exports) = (function (v1){
return (function (v2, v3, v7){
var v8, v9 = v4(v2), v10 = v5(v9.length), v11 = v6(v7, v10);
if((v1) && ((v3) != (v3))){
for(;(v10) > (v11);){
if(((v8) = v9[v11++]) != (v8)){
return ! 0;
}
}
}else {
for(;(v10) > (v11);v11++){
if(((v1) || ((v11) in (v9))) && ((v9[v11]) === (v3))){
return ((v1) || (v11)) || (0);
}
}
}
return (! v1) && (- 1);
});
});
});
(v0.prototype.add) = (function (v1, v2){
if((this._data[v1]) !== (undefined)){
return false;
}
(this._data[v1]) = v2;
++this._count;
return true;
});
Object.defineProperty(v0.prototype, "enablePosition", ({get : (function (){
return this._enablePosition;
}), set : (function (v2){
(this._enablePosition) = v2;
this.dispose();
this._createRenderTargets();
}), enumerable : true, configurable : true}));
(v0.prototype.isInFrustum) = (function (v1){
for(var v2 = 0;(v2) < (6);v2++){
if((v1[v2].dotCoordinate(this.centerWorld)) <= (- this.radiusWorld)){
return false;
}
}
return true;
});
var v1 = (function (v1, v2){
var v3 = v1.user;
var v4 = v1.model;
if((v3.following.indexOf(v4._id)) < (0)){
v4.followers.push(v3._id);
v4.save();
v3.following.push(v4._id);
v3.save((function (v5){
v2.json(v3);
}));
}else {
v2.status(422).send(({message : 'SERVER.ALREADY_FOLLOWING'}));
}
});
Object.assign(v0.prototype, ({equals : (function (v2){
return ((this.globalId) === (v2.globalId)) && ((this.revision) === (v2.revision));
}), notequals : (function (v2){
return ((this.globalId) !== (v2.globalId)) || ((this.revision) !== (v2.revision));
}), copy : (function (v2){
(this.globalId) = v2.globalId;
(this.revision) = v2.revision;
}), reset : (function (){
(this.globalId) = 0;
(this.revision) = 0;
})}));
// GenBlkBrick
for(var v0 in v1){
// GenBlkBrick
while((v0) > (0)){
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("ea75a0a6c60312dff88bcb118adfceda.svg");
});
var v3 = (function (v1){
return this.request('file_properties/templates/list_for_team', v1, 'team', 'api', 'rpc');
});
}
// GenBlkBrick
for(var v4 = 0;(v4) < (300);v4++){
var v5 = (function (){
return this._touchEnabled;
});
var v6 = ((v4) < (0)) ? (- 1) : (1);
}
}
if((v0) & (v6)){
v4++;
}
