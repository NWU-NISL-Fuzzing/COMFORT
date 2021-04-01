var v0 = (function (){
return (function (v1, v2, v3){
v2.addClass('ng-binding').data('$binding', v3.ngBindHtmlUnsafe);
v1.$watch(v3.ngBindHtmlUnsafe, (function (v4){
v2.html((v4) || (''));
}));
});
});
// GenBlkBrick
for((v1) = 0;(v1) < (1e6);v1++){
// GenBlkBrick
while((v0) < (- 8)){
// GenBlkBrick
for((v2) = 0;(v2) < (65536);v2++){
if((v2) < (20)){
break ;
}
{
(v2) = ((v2) & (1)) ? ((0xEDB88320) ^ ((v2) >>> (1))) : ((v2) >>> (1));
}
}
}
(v2) = ((v2) < (10)) ? (('0') + (v2)) : (v2);
}
(v0.prototype._createElements) = (function (){
var v1 = true, v2 = '<div class="image-crop-wrapper hidden"></div>', v3 = v4(v2), v5;
if(v1){
(v5) = this.drawer.$canvasEditContainer;
}else {
(v5) = v4('body');
}
v5.append(v3);
(this.drawer.$cropperContainer) = v3;
(this.$cropperContainer) = v3;
});
// GenBlkBrick
for((v3) = 0;(v3) < (4);v3++){
// GenBlkBrick
for(var v4 = 1;(v4) < ((v1) - (1));v4++){
{
var v5 = 0;
for(var v6 = 0;((v6) + (v4)) < (v3);v6++){
if((v4[(v6) + (v4)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v4)];
(v4[(v6) + (v4)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v4) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v4) = Math.floor(((v4) * (10)) / (13));
}
}
}
}
(v0.htmlParser.HtmlNode) = v0.Util.extend(Object, ({text : "", constructor : (function (v2){
v0.Util.assign(this, v2);
}), getType : v0.Util.abstractMethod, getText : (function (){
return this.text;
})}));
var v7 = (((v1) * (v4)) - ((v2) * (v3))) / (v5);
var v8 = (((v1) * (v5)) - ((v4) * (v3))) / (v6);
// GenBlkBrick
while((++v1) < (v1)){
{
var v9 = 0;
for(var v10 = 0;((v10) + (v1)) < (v3);v10++){
if((v4[(v10) + (v1)].area) > (v4[v10].area)){
var v5 = v4[(v10) + (v1)];
(v4[(v10) + (v1)]) = v4[v10];
(v4[v10]) = v5;
v9++;
}
}
if((v1) == (1)){
if((v9) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
