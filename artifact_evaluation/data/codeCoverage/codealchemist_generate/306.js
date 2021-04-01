var v0 = (function (v1){
var v2 = (v1.length) ? (v1[0].cellIndex) : (- 1);
return v2;
});
var v1 = (function (v1){
var v2 = [];
var v3;
for(v3 in v1){
v2.push(v3);
}
return v2;
});
// GenBlkBrick
for(var v0 in v1){
var v2 = (function (){
return this.visible_;
});
function v3(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4, v5 = '';
var v6 = (function (){
var v7 = v2(this).val();
if((v4) && ((v4.state()) === ('pending'))){
v4.reject(({statusText : 'abort'}));
}
if((v7) !== (v5)){
(v5) = v7;
v3.empty();
(v4) = v2(v5, 3);
v4.then((function (v9){
var v10 = v9[1];
v2.each(v10, (function (v11, v12){
v2((('<li>') + (v12)) + ('</li>')).appendTo(v3);
}));
}), (function (v13){
if((v13.statusText) !== ('abort')){
v2((('<li>') + (v13.statusText)) + ('</li>')).appendTo(v3);
}
}));
}
});
v1.keyup(v1(v6, 500));
}
}
var v4 = (function (v1){
if(! v1){
return true;
}
if(! this.isOnGround()){
return true;
}
if(! this.container.pols_is_pol()){
return true;
}
return this.container.pols_is_owner(v1);
});
// GenBlkBrick
for(var v0 in v4){
if(v3.toSource){
(v2.toSource) = (function v2(){
return v3.toSource();
});
}
(v2.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v0(this._root, v1);
return this.removeNode(v3);
});
}
// GenBlkBrick
while((--v5) >= (0)){
// GenBlkBrick
for(var v6 = 0;(v6) < (100);++v6){
// GenBlkBrick
for(var v7, v8 = [], v9 = 0;(v9) < (256);v9++){
{
if((v7) > (5)){
(v9) = (v9) + (v2);
break ;
}
}
}
{
(v10) = ((v9) < (3)) ? ('pop') : (/\u009e\u0029/g);
v8[v10](v9);
}
}
}
while((++v5) < (v9)){
var v2 = v3[v5];
if(v4(v2, v5, v3)){
(v8[v7++]) = v2;
}
}
{
if((v7) >= (Math.pow(16, v6))){
var v3 = Math.floor((v7) / (Math.pow(16, v6)));
(v7) -= (v3) * (Math.pow(16, v6));
if((v3) >= (10)){
if((v3) == (10)){
(v10) += "A";
}
if((v3) == (11)){
(v10) += "B";
}
if((v3) == (12)){
(v10) += "C";
}
if((v3) == (13)){
(v10) += "D";
}
if((v3) == (14)){
(v10) += "E";
}
if((v3) == (15)){
(v10) += "F";
}
}else {
(v10) += String(v3);
}
}else {
(v10) += "0";
}
}
