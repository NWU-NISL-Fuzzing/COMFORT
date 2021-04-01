var v0 = (function (v1){
var v2 = ({id : "facts_of_the_giants", level : 1, max_level : 4});
if(! v1.conversations_can_do_chain(v2)){
return false;
}
if(v1.conversations_has_completed(null, "perspectives_of_a_patch_4")){
return true;
}
return false;
});
var v1 = (function (v1, v2){
(v1["file-host"]) = ({start : (function (){
v2.registerCommandArgAutocompleter("stats", []);
})});
});
var v2 = (function (v1, v2){
v2(v1(2), false, "Number");
v2(v1(({})), false, "Not numeric");
v2(v1(NaN), true, "NaN");
});
function v3(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v2(v7)]) = v1(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
// GenBlkBrick
for(var v0 in v3){
(v3.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
}
// GenBlkBrick
for(var v4 = 1;(v4) < (5);v4++){
if((v4) === (6)){
break ;
}
var v5 = (function (v1, v2, v3){
if((v1) < (2)){
return ' யாமம்';
}else {
if((v1) < (6)){
return ' வைகறை';
}else {
if((v1) < (10)){
return ' காலை';
}else {
if((v1) < (14)){
return ' நண்பகல்';
}else {
if((v1) < (18)){
return ' எற்பாடு';
}else {
if((v1) < (22)){
return ' மாலை';
}else {
return ' யாமம்';
}
}
}
}
}
}
});
}
function v6(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v0(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v1(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
(v2.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
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
