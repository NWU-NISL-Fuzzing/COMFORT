var v0 = "Hello Foo", v1 = "Hello Bar";
for(var v2 = 0;(v2) < (v1);v2++){
(v0) = (v0) + (v1.charAt(Math.floor((Math.random()) * (v1.length))));
}
var v3 = v1.slice(v2, (v2) + (1)).toLowerCase();
// GenBlkBrick
for(var v4 = 0;(v4) < (v1.length);++v4){
var v5 = (function (v1, v2){
(this.root) = ({used : ! 0, x : 0, y : 0, w : this.root.w, h : (this.root.h) + (v2), down : ({x : 0, y : this.root.h, w : this.root.w, h : v2}), right : this.root});
var v3 = this.findNode(this.root, v1, v2);
return (v3) ? (this.splitNode(v3, v1, v2)) : (null);
});
}
v5(new RegExp(((v0.substr(0, 1).toLowerCase()) + (v0.substr(1))) + ("$")), (v3.substr(0, 1).toLowerCase()) + (v3.substr(1)));
{
(v4) += 4;
}
// GenBlkBrick
while(false){
if(Array.isArray(v0)){
(v0) = v0.join('\n');
}
(v6) = (v0) === ("0");
}
{
for(var v7 = 0;(v7) < (10);++v7){
(v8) += ((v2) * (v7)) + (1);
}
}
