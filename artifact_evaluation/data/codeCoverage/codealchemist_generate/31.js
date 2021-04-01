var v0 = (function (v1){
return this.clearSession();
});
var v1 = (function (v1, v2, v3){
v3(101)("Int8", 1, (function (v1){
return (function (v2, v3, v4){
return v1(this, v2, v3, v4);
});
}));
});
var v2 = (function (v1, v2){
var v3 = Array.prototype.filter.call(arguments, v0);
return (v3.length) === (2);
});
(v0.prototype.renderAlphaTestSorted) = (function (v1){
return v0.renderSorted(v1, this._alphaTestSortCompareFn, this._scene.activeCamera, false);
});
function v3(v1, v2, v3, v4){
if((v3) < (v4)){
var v5 = v0(v3, v4);
var v7 = (v3) - (1);
v1(v1, v5, v4);
var v9 = v1[v4];
for(var v10 = v3;(v10) < (v4);v10++){
if((v2(v1[v10], v9)) <= (0)){
(v7) += 1;
v1(v1, v7, v10);
}
}
v1(v1, (v7) + (1), v10);
var v11 = (v7) + (1);
v3(v1, v2, v3, (v11) - (1));
v3(v1, v2, (v11) + (1), v4);
}
}
(v1.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v0.prototype) = v2.prototype, new v0()));
// GenBlkBrick
for((v4) = 0;(v4) < (6);v4++){
{
(v4) = (3988292384) ^ ((v4) >>> (1));
}
// GenBlkBrick
while(true){
var v5 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("95504d9ee568b1fb4e405cf6d547a76b.svg");
});
}
}
function v6(){
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
v1.keyup(v5(v6, 500));
}
