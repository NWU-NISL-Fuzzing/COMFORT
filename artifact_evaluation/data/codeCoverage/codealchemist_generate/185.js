var v0 = (function (v1, v2, v3, v4){
var v5 = (1) - (v4);
return ((v5) * (((v5) * (v1)) + (((2) * (v4)) * (v2)))) + (((v4) * (v4)) * (v3));
});
(v0.EnableFor) = (function (v1){
(v1._tags) = (v1._tags) || (({}));
(v1.hasTags) = (function (){
return v0.HasTags(v1);
});
(v1.addTags) = (function (v2){
return v0.AddTagsTo(v1, v2);
});
(v1.removeTags) = (function (v2){
return v0.RemoveTagsFrom(v1, v2);
});
(v1.matchesTagsQuery) = (function (v3){
return v0.MatchesQuery(v1, v3);
});
});
(v0.SPACING) = "spacing";
(v0.prototype.toMatrix) = (function (v1){
if((this.rotation) === (0.0)){
(v1.a) = 1.0;
(v1.b) = 0.0;
}else {
(v1.a) = Math.cos(this.rotation);
(v1.b) = Math.sin(this.rotation);
}
if((this.skew) === (0.0)){
(v1.c) = - v1.b;
(v1.d) = v1.a;
}else {
(v1.c) = - Math.sin((this.skew) + (this.rotation));
(v1.d) = Math.cos((this.skew) + (this.rotation));
}
if((this.scaleX) !== (1.0)){
(v1.a) *= this.scaleX;
(v1.b) *= this.scaleX;
}
if((this.scaleY) !== (1.0)){
(v1.c) *= this.scaleY;
(v1.d) *= this.scaleY;
}
(v1.tx) = this.x;
(v1.ty) = this.y;
return this;
});
(v0.Lerp) = (function (v1, v2, v3){
return (v1) + (((v2) - (v1)) * (v3));
});
var v1 = (function (v1, v2, v3){
"use strict";
(v2.exports) = (v1(32)()) ? (Object.assign) : (v1(33));
});
var v2 = (function v2(v1, v2){
if((v2) === ('__proto__')){
if(! v1.call(v1, v2)){
return void 0;
}else {
if(v0){
return v0(v1, v2).value;
}
}
}
return v1[v2];
});
(v1.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v0(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v0(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
});
