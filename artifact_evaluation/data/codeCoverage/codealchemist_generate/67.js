var v0 = (function (v1, v2, v3, v4){
v1.arc(v2, v3, v4, 0, (Math.PI) * (2), false);
});
var v1 = (function (){
return (((('Sphere [position=') + (this.position)) + (', radius=')) + (this.radius)) + (']');
});
var v2 = (function (v1){
return new Date();
});
(v2.prototype.visitParameter) = (function (v1){
return v1;
});
var v3 = (function (){
return this.lastMethod_;
});
(v0.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v1.prototype) = v2.prototype, new v1()));
(v0.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v2(v9, v4);
}));
return v4;
});
(v3.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v1(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v0(v1, v1.right);
}else {
break ;
}
}
}
}
});
