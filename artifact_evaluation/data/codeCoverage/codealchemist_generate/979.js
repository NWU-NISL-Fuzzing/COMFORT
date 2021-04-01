var v0 = (function (v1, v2, v3){
(v1.exports) = v3(5244)();
});
(v0.SKIN) = "skin";
// GenBlkBrick
for((v1) = 0;(v1) < (1e3);v1++){
if((v1) === (6)){
break ;
}
var v2 = (function (v1, v2, v3){
if((v1.achievements_get_daily_label_count('candy_eaten', 'zilloween')) < (11)){
if((v2) === ("eat")){
return this.food_eat_conditions(v1, v3);
}else {
if((v2) === ("eat_img")){
return this.food_eat_conditions_img(v1, v3, "day");
}else {
return this.food_eat_conditions_img(v1, v3, "month");
}
}
}else {
if((v2) == ("eat")){
return ({state : "disabled", reason : "No more candy today. You don\'t want toothache again."});
}else {
return ({state : null});
}
}
});
}
var v3 = (function (v1, v2, v3){
v3.superclass.call(this, v1, v2);
(v3) = (v3) || (({}));
(this.__min) = v3.min;
(this.__max) = v3.max;
(this.__step) = v3.step;
if(v4.isUndefined(this.__step)){
if((this.initialValue) == (0)){
(this.__impliedStep) = 1;
}else {
(this.__impliedStep) = (Math.pow(10, Math.floor((Math.log(this.initialValue)) / (Math.LN10)))) / (10);
}
}else {
(this.__impliedStep) = this.__step;
}
(this.__precision) = v2(this.__impliedStep);
});
Array.prototype.reduce.call(v2, v3, v1);
(v0.prototype.isReusable) = (function (){
return this._reusable;
});
v2(v1);
for(var v4 = 0;(v4) <= (v1);v4++){
v0(v4);
}
