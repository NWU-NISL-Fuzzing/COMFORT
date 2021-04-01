var v0 = (function (v1, v2){
if((this.is_assembled) && ((this.getClassProp('max_fuel')) != (0))){
if((this.getInstanceProp('fuel_level')) > ((this.getClassProp('max_fuel')) - (50))){
return ({state : 'disabled', reason : ((("There is not enough space for a fuel cell. Current level: ") + (this.getInstanceProp('fuel_level'))) + ('/')) + (this.getClassProp('max_fuel'))});
}
if(! v1.items_has('fuel_cell', 1)){
return ({state : 'disabled', reason : "You don't have any fuel cells."});
}else {
return ({state : 'enabled'});
}
}
return ({state : null});
});
// GenBlkBrick
for(var v1 = 0x21;(v1) <= (0x7E);v1++){
(v2) = Math.floor((Math.random()) * (v1));
{
var v3 = 0;
for(var v4 = 0;((v4) + (v1)) < (v3);v4++){
if((v4[(v4) + (v1)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v1)];
(v4[(v4) + (v1)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v1) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
{
(v4) >>>= 1;
(v3) >>>= 1;
(v1) += 1;
}
if((((v0) >>> (v1)) & (1)) != (0)){
v3++;
}
(v5) = v0(v3, v4, v1);
(v6) = (v2) ? (v0(v4, v2)) : (('') + (Math.round(v4))).split('.');
// GenBlkBrick
for(var v7 = 1;(v7) <= (10);v7++){
// GenBlkBrick
while((v0) == (2046)){
var v8 = (function (v1, v2){
return v2.querySave.length;
});
var v9 = (function (){
if(! this._boundary){
this._generateBoundary();
}
return this._boundary;
});
}
}
v6.push(((v7.length) == (1)) ? (('0') + (v7)) : (v7));
