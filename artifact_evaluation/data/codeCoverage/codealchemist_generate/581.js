// GenBlkBrick
while((v0) < ((v1) - (v2))){
// GenBlkBrick
for(var v0 = 1;(v0) <= (20);v0++){
var v1 = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (function (v1){
var v2 = (((v0) + ((Math.random()) * (16))) % (16)) | (0);
(v0) = Math.floor((v0) / (16));
return ((v1) == ('x')) ? (v2) : (((v2) & (0x3)) | (0x8)).toString(16);
}));
if((v0) < (20)){
break ;
}
}
}
if((v1.length) > (v0)){
(v1) = v1.slice(0, v0).split(/\s/);
if((v1.length) > (1)){
v1.pop();
}
(v1) = (v1.join(' ')) + ('…');
}
// GenBlkBrick
for(var v2 = 0;(v2) < (7);v2++){
var v3 = ((v2) < (0)) ? (- 1) : (1);
}
(v4) = (v3) | (v2);
if(((v3) === (1)) && ((v0) === (1))){
(v5) = true;
}
var v6 = ((Math.random()) * (16)) | (0), v7 = ((v1) === ('x')) ? (v6) : (((v6) & (0x3)) | (0x8));
var v8 = (function (v1){
var v2 = ({});
if((v1) !== (null)){
Object.keys(v1).forEach((function (v4){
v1[v4].forEach((function (v5){
(v2[String(v5)]) = v4;
}));
}));
}
return v2;
});
function v9(v1, v2){
var v3 = v1.split('\n');
var v4, v5;
for((v4) = 0;(v4) < (v3.length);v4++){
(v5) = v3[v4].trim();
v8(v5, v2);
}
}
