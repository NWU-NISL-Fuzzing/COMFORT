var v0 = (function (){
if(this.tunnel){
this.tunnel.emit('speak', ({'word' : Math.random().toString(32).slice(2)}));
}
});
(v0.PI_H) = (Math.PI) / (2.0);
(v0.Log2) = (function (v1){
return (Math.log(v1)) * (Math.LOG2E);
});
(v0.prototype.update) = (function (v1, v2){
var v3 = ((v2.length) == (1)) && ((v2[0].id) != (this.placeholder.id));
var v4 = (v2.length) > (1);
if((v4) || (v3)){
return v1.call(this, v2);
}
this.clear();
var v5 = this.createPlaceholder(this.placeholder);
this.$selection.find('.select2-selection__rendered').append(v5);
});
var v1 = (function (v1){
(this.destination[0]) = this.world.pxmi(v1);
});
// GenBlkBrick
while((v0) && ((v0.nodeType) == (1))){
var v2 = (function (v1, v2){
(v1.innerHTML) += v2;
});
// GenBlkBrick
for(var v3 = - 5;(v3) < (v1);v3++){
if((v3) === (6)){
break ;
}
{
var v4 = 0;
for(var v5 = 0;((v5) + (v3)) < (v3);v5++){
if((v4[(v5) + (v3)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v3)];
(v4[(v5) + (v3)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v3) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
}
[].reduce(v1, v3);
(v1.prototype.hideOnEditMode) = true;
