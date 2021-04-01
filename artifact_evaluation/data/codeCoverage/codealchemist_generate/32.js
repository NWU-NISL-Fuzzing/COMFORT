var v0 = (function (v1, v2, v3){
var v4 = v3(5);
v4(v4.S, "Object", ({is : v3(501)}));
});
(v0.prototype.push) = (function (v1){
this.insert(this.size, v1);
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("0912d3eafa64a0d5f4f1db5fd3598a93.svg");
});
function v2(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v1(v7)]) = v0(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
var v3 = (v0.prototype) = new v2();
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v2(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
Object.defineProperty(v3, "prop", ({get : v0, set : v2, enumerable : false, configurable : true}));
function v4(v1, v2){
var v3 = '', v4, v5;
(v2) = (v2) || (({}));
(v2["up"]) = (v2["up"]) || (true);
(v2["mid"]) = (v2["mid"]) || (true);
(v2["down"]) = (v2["down"]) || (true);
(v2["size"]) = (v2["size"]) || ("maxi");
(v1) = v1.split('');
for(v5 in v1){
if(v2(v5)){
continue ;
}
(v3) = (v3) + (v1[v5]);
(v4) = ({"up" : 0, "down" : 0, "mid" : 0});
switch(v2.size){
}
var v7 = [];
for(var v8 in v7){
var v9 = v7[v8];
for(var v10 = 0;(v10) <= (v4[v9]);v10++){
if(v2[v9]){
(v3) = (v3) + (v3[v9][v0(v3[v9].length)]);
}
}
}
}
return v3;
}
