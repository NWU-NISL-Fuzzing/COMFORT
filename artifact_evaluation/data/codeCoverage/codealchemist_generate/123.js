var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.ContainerService/locations/southeastasia/operations/43feeb4b-e98d-4431-a159-0543dae93a4b?api-version=2017-01-31').reply(200, "{\r\n  \"startTime\": \"2017-06-02T14:52:47.5166033+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"43feeb4b-e98d-4431-a159-0543dae93a4b\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '134', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : '9626245e-74e6-4408-af5c-6fa7269107e5_131358123722959165', 'x-ms-request-id' : '6599d20d-4c61-4cac-97f1-8b8464bb7641', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14997', 'x-ms-correlation-request-id' : 'ac8e7a4d-adf1-4fc9-adca-95717b9baee5', 'x-ms-routing-request-id' : 'WESTUS2:20170602T145802Z:ac8e7a4d-adf1-4fc9-adca-95717b9baee5', date : 'Fri, 02 Jun 2017 14:58:01 GMT', connection : 'close'}));
return v2;
});
(v0.prototype._serialize) = (function (v1, v2){
var v3 = ({type : 1, children : [], name : v1.name, properties : (v1.properties) || ([])});
if(this._child){
this._child.serialize(v3);
}
if(this._condition){
var v4 = this._condition.serialize();
v4.children.push(v3);
if(v2){
v2.children.push(v4);
}
return v4;
}
if(v2){
v2.children.push(v3);
}
return v3;
});
var v1 = (function (v1, v2, v3){
'use strict';
var v4 = v1('./calc');
(v2.exports) = (function (v5, v6){
var v7 = v6.xaxis;
var v8 = v6.yaxis;
var v9 = (v7._id) + (v8._id);
var v10 = v5._fullLayout._scatterStackOpts[v9];
if(! v10){
return;
}
var v11 = v5.calcdata;
var v12, v13, v14, v15, v16, v17, v18, v19, v20;
var v21, v22, v23, v24, v25;
var v26;
for(var v27 in v10){
(v21) = v10[v27];
var v28 = v21.traceIndices;
if(! v28.length){
continue ;
}
(v22) = (v21.stackgaps) === ('interpolate');
(v23) = v21.groupnorm;
if((v21.orientation) === ('v')){
(v24) = 'x';
(v25) = 'y';
}else {
(v24) = 'y';
(v25) = 'x';
}
(v26) = new Array(v28.length);
for((v12) = 0;(v12) < (v26.length);v12++){
(v26[v12]) = false;
}
(v17) = v11[v28[0]];
var v30 = new Array(v17.length);
for((v12) = 0;(v12) < (v17.length);v12++){
(v30[v12]) = v17[v12][v24];
}
for((v12) = 1;(v12) < (v28.length);v12++){
(v16) = v11[v28[v12]];
for((v13) = (v14) = 0;(v13) < (v16.length);v13++){
(v18) = v16[v13][v24];
for(;((v18) > (v30[v14])) && ((v14) < (v30.length));v14++){
v31(v16, v13, v30[v14], v12, v26, v22, v24);
v13++;
}
if((v18) !== (v30[v14])){
for((v15) = 0;(v15) < (v12);v15++){
v31(v11[v28[v15]], v14, v18, v15, v26, v22, v24);
}
v30.splice(v14, 0, v18);
}
v14++;
}
for(;(v14) < (v30.length);v14++){
v31(v16, v13, v30[v14], v12, v26, v22, v24);
v13++;
}
}
var v32 = v30.length;
for((v13) = 0;(v13) < (v17.length);v13++){
(v19) = (v17[v13][v25]) = v17[v13].s;
for((v12) = 1;(v12) < (v28.length);v12++){
(v16) = v11[v28[v12]];
(v16[0].trace._rawLength) = v16[0].trace._length;
(v16[0].trace._length) = v32;
(v19) += v16[v13].s;
(v16[v13][v25]) = v19;
}
if(v23){
(v20) = (((v23) === ('fraction')) ? (v19) : ((v19) / (100))) || (1);
for((v12) = 0;(v12) < (v28.length);v12++){
var v33 = v11[v28[v12]][v13];
(v33[v25]) /= v20;
(v33.sNorm) = (v33.s) / (v20);
}
}
}
for((v12) = 0;(v12) < (v28.length);v12++){
(v16) = v11[v28[v12]];
var v34 = v16[0].trace;
var v35 = v4.calcMarkerSize(v34, v34._rawLength);
var v36 = Array.isArray(v35);
if(((v35) && (v26[v12])) || (v36)){
var v37 = v35;
(v35) = new Array(v32);
for((v13) = 0;(v13) < (v32);v13++){
(v35[v13]) = (v16[v13].gap) ? (0) : ((v36) ? (v37[v16[v13].i]) : (v37));
}
}
var v38 = new Array(v32);
var v39 = new Array(v32);
for((v13) = 0;(v13) < (v32);v13++){
(v38[v13]) = v16[v13].x;
(v39[v13]) = v16[v13].y;
}
v4.calcAxisExpansion(v5, v34, v7, v8, v38, v39, v35);
(v16[0].t.orientation) = v21.orientation;
}
}
});
function v31(v40, v41, v42, v43, v26, v22, v24){
(v26[v43]) = true;
var v44 = ({i : null, gap : true, s : 0});
(v44[v24]) = v42;
v40.splice(v41, 0, v44);
if((v41) && ((v42) === (v40[(v41) - (1)][v24]))){
var v45 = v40[(v41) - (1)];
(v44.s) = v45.s;
(v44.i) = v45.i;
(v44.gap) = v45.gap;
}else {
if(v22){
(v44.s) = v46(v40, v41, v42, v24);
}
}
if(! v41){
(v40[0].t) = v40[1].t;
(v40[0].trace) = v40[1].trace;
delete v40[1].t;
delete v40[1].trace;
}
}
function v46(v40, v41, v42, v24){
var v47 = v40[(v41) - (1)];
var v48 = v40[(v41) + (1)];
if(! v48){
return v47.s;
}
if(! v47){
return v48.s;
}
return (v47.s) + ((((v48.s) - (v47.s)) * ((v42) - (v47[v24]))) / ((v48[v24]) - (v47[v24])));
}
});
// GenBlkBrick
for((v2) = 0;(v2) < (16);(v2) = (v2) + (1)){
(v2) = ((v2) | ((v2) << (4))) & (252645135);
}
var v3 = (function (v1){
var v2 = v1.getGeometriesArray();
var v3, v4;
for(((v3) = 0, (v4) = v2.length);(v3) < (v4);++v3){
this.drawGeometry(v2[v3]);
}
});
(v3.prototype) = new v1();
(v0.prototype) = ((v3) === (null)) ? (Object.create(v3)) : (((v1.prototype) = v3.prototype, new v1()));
(v1.prototype.loadMap) = (function (){
(this.map) = this.listWidget.wiki.getTiddlerData(this.getMapTiddlerTitle(), ({positions : ({}), newTiddlerPosition : ({x : 0, y : 0}), width : parseInt(this.listWidget.getAttribute("cecily-width", "600"), 10)}));
});
