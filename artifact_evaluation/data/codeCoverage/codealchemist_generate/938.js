var v0 = (function (v1){
return (! v1.start.isCertain('month')) && (! v1.start.isCertain('weekday'));
});
var v1 = (function (v1, v2){
if(v2.path){
(v1.name) = v2.path;
}
if(v2.linkpath){
(v1.linkname) = v2.linkpath;
}
if(v2.size){
(v1.size) = parseInt(v2.size, 10);
}
(v1.pax) = v2;
return v1;
});
function v2(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v0(v7)]) = v1(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
// GenBlkBrick
for(var v0 in v2.prototype){
// GenBlkBrick
for(var v3 = 6;(v3) < (10);v3++){
if((v3) > (10)){
(v4) = 200;
v3++;
}
}
var v5 = (function (v1){
return (((v1) != (null)) && ((typeof v1.subscribe) == ("function"))) && ((typeof v1["notifySubscribers"]) == ("function"));
});
}
(v6) = (v4) ? (v5(v3, v4)) : (('') + (Math.round(v3))).split('.');
(v3) += v6[v4];
{
(v6[(256) + (v4)]) = v6[v4];
}
{
(v7) = (v4) / (v3);
(v12) = v1(v5, v6, v7);
(v13) = v1(v8, v9, v7);
(v8) = v1(v6, v11, v7);
(v9) = v1(v9, v13, v7);
(v10) = v1(v12, v8, v7);
(v11) = v1(v13, v9, v7);
v6.push(v10, v11);
}
