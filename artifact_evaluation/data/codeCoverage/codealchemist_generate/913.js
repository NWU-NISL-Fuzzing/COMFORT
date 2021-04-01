var v0 = (function (v1, v2, v3){
(this.radius) = v1;
(this.theta) = v2;
(this.y) = v3;
return this;
});
var v1 = ({className : 'string', variants : [], illegal : /\n/, contains : []});
(v0.ptototype) = v1;
(v1[0]) = 9;
// GenBlkBrick
while((--v2) > (0)){
(v2) += 16;
var v3 = ({get : v2});
}
for(var v4 = 0;(v4) < (v3.length);v4++){
(v1[v3[v4]]) = 0;
}
for((v5) = 0;(v5) < (v1.length);v5++){
for(v2 in v1[v5]){
if((v1[v5].hasOwnProperty(v2)) && ((typeof v3[v2]) === ("undefined"))){
(v3[v2]) = v1[v5][v2];
}
}
}
function v6(v1, v2, v3){
var v4 = ({x : (v1.x) + ((v3.dx) * (v2)), v : (v1.v) + ((v3.dv) * (v2)), tension : v1.tension, friction : v1.friction});
return ({dx : v4.v, dv : v0(v4)});
}
