var v0 = (function (){
this.route('parent');
});
// GenBlkBrick
while((v1) = 0){
var v2 = (function (v1, v2){
if((v1.class_tsid) == ('meat_collector')){
if((! this.container.pols_is_pol) || (! this.container.pols_is_pol())){
return;
}
if(! this.collectors){
this.findCollectors();
}
delete this.collectors[v1.tsid];
}else {
if((v1.class_tsid) == ('npc_piggy')){
if(! this.piggies){
this.findPiggies();
}
delete this.piggies[v1.tsid];
}
}
});
}
// GenBlkBrick
for(var v0 in v0.prototype){
var v3 = (function (){
var v1 = "[a-zA-Z]";
var v2 = "[0-9]";
var v3 = (((("(?:") + (v1)) + ("|")) + (v2)) + (")");
var v4 = (("(?:") + (v2)) + ("|[A-WY-Za-wy-z])");
var v5 = ((((((((("-(") + (v4)) + (")-")) + ("(?:")) + (v3)) + ("+-)*")) + ("\\1")) + ("(?!")) + (v3)) + (")");
return new RegExp(v5);
});
var v4 = (function (v1){
return Object.getOwnPropertyNames(v1);
});
}
// GenBlkBrick
for(var v0 in v4.prototype){
// GenBlkBrick
for(var v5 = 0;(v5) < (5);++v5){
// GenBlkBrick
for(var v6 = 0;(v6) < (12);v6++){
{
var v7 = 0;
for(var v8 = 0;((v8) + (v6)) < (v3);v8++){
if((v4[(v8) + (v6)].area) > (v4[v8].area)){
var v5 = v4[(v8) + (v6)];
(v4[(v8) + (v6)]) = v4[v8];
(v4[v8]) = v5;
v7++;
}
}
if((v6) == (1)){
if((v7) == (0)){
break ;
}
}else {
(v6) = Math.floor(((v6) * (10)) / (13));
}
}
}
}
(v9) = (((v6) | (0)) % ((v5) | (0))) | (0);
}
// GenBlkBrick
for(var v0 in v3.prototype){
var v10 = (function (){
return this.__dragTargetWidget;
});
}
(v11) = ((v6) <= (0.5)) ? ((v8) / ((v7) + (v9))) : ((v8) / (((2) - (v7)) - (v9)));
// GenBlkBrick
for(var v0 in v2.prototype){
var v12 = (function (){
return ! ! this.e;
});
}
var v13 = (Math.min(v9, v5)) / ((v7) ? (v7) : (1));
