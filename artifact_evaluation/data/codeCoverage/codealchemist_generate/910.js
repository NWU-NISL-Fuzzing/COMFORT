var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v1('./Language');
(v2.exports) = (function (){
var v5 = ({feature : '(?:[Ff]unktionalität|[Ff]eature|[Aa]spekt|[Uu]secase|[Aa]nwendungsfall)', scenario : '(?:[Ss]zenario|[Ss]zenario( g|G)rundriss|[Gg]eschehnis)', examples : '(?:[Bb]eispiele?)', pending : '(?:[Tt]odo|[Oo]ffen)', only : '(?:[Nn]ur|[Ee]inzig)', background : '(?:[Gg]rundlage|[Hh]intergrund|[Ss]etup|[Vv]orausgesetzt)', given : '(?:[Aa]ngenommen|[Gg]egeben( sei(en)?)?|[Mm]it|[Uu]nd|[Aa]ber|[Aa]ußer)', when : '(?:[Ww]enn|[Ff]alls|[Uu]nd|[Aa]ber)', then : '(?:[Dd]ann|[Ff]olglich|[Aa]ußer|[Uu]nd|[Aa]ber)', _steps : []});
return new v4('German', v5);
})();
});
var v1 = (function (v1){
if(! this.godEnabled){
(this.health) -= v1;
if((this.health) <= (0)){
(this.health) = 0;
this.onDeath();
}
this.playerView.onDamage();
}
});
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("4b6595f25769e4b6002c88d44010f989.svg");
});
var v3 = (function (){
function v3(){
}
(v3.ClearCache) = (function (){
(v1) = [];
});
(v3.Serialize) = (function (v2){
var v3 = ({});
(v3.useDelayedTextureLoading) = v2.useDelayedTextureLoading;
(v3.autoClear) = v2.autoClear;
(v3.clearColor) = v2.clearColor.asArray();
(v3.ambientColor) = v2.ambientColor.asArray();
(v3.gravity) = v2.gravity.asArray();
(v3.collisionsEnabled) = v2.collisionsEnabled;
(v3.workerCollisions) = v2.workerCollisions;
if((v2.fogMode) && ((v2.fogMode) !== (0))){
(v3.fogMode) = v2.fogMode;
(v3.fogColor) = v2.fogColor.asArray();
(v3.fogStart) = v2.fogStart;
(v3.fogEnd) = v2.fogEnd;
(v3.fogDensity) = v2.fogDensity;
}
if(v2.isPhysicsEnabled()){
(v3.physicsEnabled) = true;
(v3.physicsGravity) = v2.getPhysicsEngine().gravity.asArray();
(v3.physicsEngine) = v2.getPhysicsEngine().getPhysicsPluginName();
}
if(v2.metadata){
(v3.metadata) = v2.metadata;
}
(v3.lights) = [];
var v4;
var v5;
for((v4) = 0;(v4) < (v2.lights.length);v4++){
(v5) = v2.lights[v4];
if(! v5.doNotSerialize){
v3.lights.push(v5.serialize());
}
}
(v3.cameras) = [];
for((v4) = 0;(v4) < (v2.cameras.length);v4++){
var v6 = v2.cameras[v4];
if(! v6.doNotSerialize){
v3.cameras.push(v6.serialize());
}
}
if(v2.activeCamera){
(v3.activeCameraID) = v2.activeCamera.id;
}
v7.Animation.AppendSerializedAnimations(v2, v3);
(v3.materials) = [];
(v3.multiMaterials) = [];
var v8;
for((v4) = 0;(v4) < (v2.materials.length);v4++){
(v8) = v2.materials[v4];
if(! v8.doNotSerialize){
v3.materials.push(v8.serialize());
}
}
(v3.multiMaterials) = [];
for((v4) = 0;(v4) < (v2.multiMaterials.length);v4++){
var v9 = v2.multiMaterials[v4];
v3.multiMaterials.push(v9.serialize());
}
(v3.skeletons) = [];
for((v4) = 0;(v4) < (v2.skeletons.length);v4++){
v3.skeletons.push(v2.skeletons[v4].serialize());
}
(v3.geometries) = ({});
(v3.geometries.boxes) = [];
(v3.geometries.spheres) = [];
(v3.geometries.cylinders) = [];
(v3.geometries.toruses) = [];
(v3.geometries.grounds) = [];
(v3.geometries.planes) = [];
(v3.geometries.torusKnots) = [];
(v3.geometries.vertexData) = [];
(v1) = [];
var v10 = v2.getGeometries();
for((v4) = 0;(v4) < (v10.length);v4++){
var v11 = v10[v4];
if(v11.isReady()){
v1(v11, v3.geometries);
}
}
(v3.meshes) = [];
for((v4) = 0;(v4) < (v2.meshes.length);v4++){
var v13 = v2.meshes[v4];
if((v13) instanceof (v7.Mesh)){
var v14 = v13;
if(! v14.doNotSerialize){
if(((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_LOADED)) || ((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_NONE))){
v3.meshes.push(v2(v14, v3));
}
}
}
}
(v3.particleSystems) = [];
for((v4) = 0;(v4) < (v2.particleSystems.length);v4++){
v3.particleSystems.push(v2.particleSystems[v4].serialize());
}
(v3.lensFlareSystems) = [];
for((v4) = 0;(v4) < (v2.lensFlareSystems.length);v4++){
v3.lensFlareSystems.push(v2.lensFlareSystems[v4].serialize());
}
(v3.shadowGenerators) = [];
for((v4) = 0;(v4) < (v2.lights.length);v4++){
(v5) = v2.lights[v4];
var v16 = v5.getShadowGenerator();
if((v16) && ((v16) instanceof (v7.ShadowGenerator))){
v3.shadowGenerators.push(v16.serialize());
}
}
if(v2.actionManager){
(v3.actions) = v2.actionManager.serialize("scene");
}
(v3.sounds) = [];
for((v4) = 0;(v4) < (v2.soundTracks.length);v4++){
var v17 = v2.soundTracks[v4];
for(var v18 = 0;(v18) < (v17.soundCollection.length);v18++){
v3.sounds.push(v17.soundCollection[v18].serialize());
}
}
return v3;
});
(v3.SerializeMesh) = (function (v19, v20, v21){
if((v20) === (void 0)){
(v20) = false;
}
if((v21) === (void 0)){
(v21) = false;
}
var v3 = ({});
(v19) = ((v19) instanceof (Array)) ? (v19) : ([]);
if((v20) || (v21)){
for(var v23 = 0;(v23) < (v19.length);++v23){
if(v21){
v19[v23].getDescendants().forEach((function (v24){
if(((v24) instanceof (v7.Mesh)) && ((v19.indexOf(v24)) < (0))){
v19.push(v24);
}
}));
}
if(((v20) && (v19[v23].parent)) && ((v19.indexOf(v19[v23].parent)) < (0))){
v19.push(v19[v23].parent);
}
}
}
v19.forEach((function (v14){
v0(v14, v3);
}));
return v3;
});
return v3;
})();
(v0.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v2(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
var v4 = (function (v1){
v1.validator.config(({rules : ({digits : [], letters : [], date : [], time : [], email : [], url : [], accept : (function (v2, v3){
if(! v3){
return true;
}
var v4 = v3[0], v5 = v1(v2).val();
return (((v4) === ('*')) || (new RegExp(((".(?:") + (v4)) + (")$"), "i").test(v5))) || (this.renderMsg("ファイル拡張子を{1}のみを受け入れる", v4.replace(/\|/g, '、')));
})}), messages : ({0 : "このフィールド", fallback : "{0}は有効ではありません", loading : "検証プロセス...", error : "ネットワークエラー", timeout : "要求がタイムアウトしました", required : "{0}は必須です", remote : "この値が使用されている", integer : ({'*' : "整数を入力してください", '+' : "正の整数を入力してください", '+0' : "正の整数または0を入力してください", '-' : "負の整数を入力してください", '-0' : "負の整数または0を入力してください"}), match : ({eq : "{0}と{1}と同じでなければなりません", neq : "{0}と{1}は同じにすることはできません", lt : "{0}未満{1}なければならない", gt : "{0}より{1}大なければならない", lte : "{0}小なりイコール{1}なければならない", gte : "{0}大なりイコール{1}なければならない"}), range : ({rg : "{1}～{2}の数を入力してください", gte : "{1}以上の数を入力してください", lte : "{1}以下の数を入力してください", gtlt : "{1}～{2}の間の数を入力してください", gt : "{1}より大きい数を入力してください", lt : "{1}より小きい数を入力してください"}), checked : ({eq : "{1}項目を選択してください", rg : "{1}から{2}の項目を選択してください", gte : "少なくとも{1}の項目を選択してください", lte : "{1}の項目まで選択してください"}), length : ({eq : "{1}文字を入力してください", rg : "{1}文字から{2}文字までの値を入力してください", gte : "{1}文字以上で入力してください", lte : "{1}文字以内で入力してください", eq_2 : "", rg_2 : "", gte_2 : "", lte_2 : ""})})}));
var v7 = '<span class="n-arrow"><b>◆</b><i>◆</i></span>';
v1.validator.setTheme(({'simple_right' : ({formClass : 'n-simple', msgClass : 'n-right'}), 'simple_bottom' : ({formClass : 'n-simple', msgClass : 'n-bottom'}), 'yellow_top' : ({formClass : 'n-yellow', msgClass : 'n-top', msgArrow : v7}), 'yellow_right' : ({formClass : 'n-yellow', msgClass : 'n-right', msgArrow : v7}), 'yellow_right_effect' : ({formClass : 'n-yellow', msgClass : 'n-right', msgArrow : v7, msgShow : (function (v8, v9){
var v10 = v8.children();
if(v10.is(':animated')){
return;
}
if((v9) === ('error')){
v10.css(({left : '20px', opacity : 0})).delay(100).show().stop().animate(({left : '-4px', opacity : 1}), 150).animate(({left : '3px'}), 80).animate(({left : 0}), 80);
}else {
v10.css(({left : 0, opacity : 1})).fadeIn(200);
}
}), msgHide : (function (v8, v9){
var v10 = v8.children();
v10.stop().delay(100).show().animate(({left : '20px', opacity : 0}), 300, (function (){
v8.hide();
}));
})})}));
});
// GenBlkBrick
for((v0) = v1;(v0) < (v2);(v0) += v3){
v4(Array, []);
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v0(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v2(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
}
var v6 = ({thereYet : v4, cap : v5});
