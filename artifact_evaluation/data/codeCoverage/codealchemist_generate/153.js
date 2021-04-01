var v0 = (function (){
if(this._inflate){
if(this._inflate.writeInProgress){
(this._inflate.pendingClose) = true;
}else {
if(this._inflate.close){
this._inflate.close();
}
(this._inflate) = null;
}
}
if(this._deflate){
if(this._deflate.writeInProgress){
(this._deflate.pendingClose) = true;
}else {
if(this._deflate.close){
this._deflate.close();
}
(this._deflate) = null;
}
}
});
(v0.X) = "x";
var v1 = (function (v1, v2){
v2.selectivity(({value : 2, items : []}));
v1.deepEqual(v2.selectivity('data'), ({id : 2, text : 'Antwerp'}));
v1.deepEqual(v2.selectivity('value'), 2);
});
var v2 = (function (v1, v2){
v1.shift();
(v1[0]) = v2;
});
(v1.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v0.prototype) = v2.prototype, new v0()));
(v3) = (function (){
v0();
v2();
});
// GenBlkBrick
while((--v4) >= (0)){
if((v4) === (6)){
break ;
}
var v5 = (v4) * (v4);
}
// GenBlkBrick
for(;(v0) < (10);){
{
(v6) = (v4) === (111);
}
}
