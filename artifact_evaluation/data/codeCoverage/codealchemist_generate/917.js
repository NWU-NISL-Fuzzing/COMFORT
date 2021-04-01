var v0 = (function (){
this.dispatchEvent(({type : 'dispose'}));
});
var v1 = (function (v1){
return (this.min.min(v1), this.max.max(v1), this);
});
function v2(){
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
(v4) = v0(v5, 3);
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
var v3 = (function (v1){
return (v1) + ('fps');
});
var v4 = (v1) & (65535), v5 = (v3) & (65535);
// GenBlkBrick
for(var v0 in v2.prototype){
// GenBlkBrick
for(var v0 in v0.prototype){
var v6 = (function (v1){
var v2 = ({}).toString;
return (v1) && ((v2.call(v1)) === ('[object Function]'));
});
}
}
var v7 = (function (v1, v2){
return this.writeFeatureText(v1[0], v2);
});
var v8 = (2.0) / ((v4) + (v5));
