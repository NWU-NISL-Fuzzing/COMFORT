var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(73), v5 = v3(1921), v6 = v3(26);
(v1.exports) = ({create : v6((function (v1){
return v4.verify(({name : "Vault Manager", client : v1.client})).then((function (){
return new v5(v1);
}));
})), VERSION : "3.28.0"});
});
// GenBlkBrick
for(var v1 = 1;(v1) < (2);++v1){
// GenBlkBrick
for(var v2 = 0;(v2) < (1000);v2++){
var v3 = (function (v1){
(this.orientation_) = v1;
});
(v2) += (v2) >> (16);
}
(v4) = v3(v2, v3, v1);
}
if((v4) === (v1)){
(v5) = 0;
(v6) = 0;
}else {
var v7 = (v1) - (v4);
(v6) = ((v2) <= (0.5)) ? ((v7) / ((v1) + (v4))) : ((v7) / (((2) - (v1)) - (v4)));
switch(v1){
}
(v5) /= 6;
}
function v8(v1, v2, v3){
v5++;
if((v6) !== (v2)){
return true;
}else {
v6++;
return false;
}
}
(v9) = (v5) ? (v8(v2, v5)) : (('') + (Math.round(v2))).split('.');
for(var v10 = 0;(v10) <= (v7);v10++){
(v15) = (v10) / (v7);
(v16) = v0(v5, v6, v15);
(v17) = v0(v8, v9, v15);
(v11) = v0(v6, v11, v15);
(v12) = v0(v9, v13, v15);
(v13) = v0(v16, v11, v15);
(v14) = v0(v17, v12, v15);
v9.push(v13, v14);
}
(v8.prototype.hideOnEditMode) = true;
(v18) = v3(v4, v12, v16);
