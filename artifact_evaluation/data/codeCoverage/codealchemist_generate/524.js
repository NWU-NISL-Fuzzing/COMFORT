var v0 = (function (v1){
return ({dependencies : [], flags : []});
});
(v0.DATA_VERSION_4_0) = "4.0";
(v0.prototype.intersectsSphere) = (function (v1){
var v2 = (v1.center.x) - (this.origin.x);
var v3 = (v1.center.y) - (this.origin.y);
var v4 = (v1.center.z) - (this.origin.z);
var v5 = (((v2) * (v2)) + ((v3) * (v3))) + ((v4) * (v4));
var v6 = (v1.radius) * (v1.radius);
if((v5) <= (v6)){
return true;
}
var v7 = (((v2) * (this.direction.x)) + ((v3) * (this.direction.y))) + ((v4) * (this.direction.z));
if((v7) < (0.0)){
return false;
}
var v8 = (v5) - ((v7) * (v7));
return (v8) <= (v6);
});
(v0.rayl) = 10e8;
(v0.HasTags) = (function (v1){
if(! v1._tags){
return false;
}
return ! v2.Tools.IsEmpty(v1._tags);
});
(v0.prototype.has) = (function (v1){
return (this._values.indexOf(v1)) !== (- 1);
});
// GenBlkBrick
for(var v1 = 0;(v1) < (100);v1++){
for(var v2 = 0;(v2) < (8);v2++){
(v1) = ((1) & (v1)) ? ((3988292384) ^ ((v1) >>> (1))) : ((v1) >>> (1));
}
{
(v2) = (3988292384) ^ ((v2) >>> (1));
}
}
(v0._getArmatureType) = (function (v1){
switch(v1.toLowerCase()){
}
});
