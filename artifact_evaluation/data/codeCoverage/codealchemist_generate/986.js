var v0 = (function (v1){
(v1.$unicode) = true;
});
var v1 = (function (){
var v1 = ({229 : 229, 230 : 2.3E2, length : "2.3E2"});
return ((Array.prototype.lastIndexOf.call(v1, 229)) === (229)) && ((Array.prototype.lastIndexOf.call(v1, 2.3E2)) === (- 1));
});
(v0.parse) = v1.parse;
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
for(var v3 in v2){
if(v2.hasOwnProperty(v3)){
(v1[v3]) = v2[v3];
}
}
var v4 = v3.length;
for(var v5 = 0;(v5) <= (v4);v5++){
v0(v5);
}
if((v5) <= (3)){
(v3) = '…';
}else {
if((v3.length) > (v5)){
(v3) = v3.slice(0, v5).split(/\s/);
if((v3.length) > (1)){
v3.pop();
}
(v3) = (v3.join(' ')) + ('…');
}
}
