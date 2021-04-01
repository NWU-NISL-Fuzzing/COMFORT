if(((v0) === (undefined)) || ((v0) === (null))){
(v0) = ({});
}
for(var v0 in v1){
if(v1.hasOwnProperty(v0)){
(v0[v0]) = v1[v0];
}
}
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(15), v5 = v3(1845), v6 = v3(1828).getConfiguration, v7 = v3(27), v8 = v3(23), v9 = v3(151), v10 = ({});
(v1.exports) = ({create : v8((function (v1){
return (v1.authorization) ? ((v10[v1.authorization]) ? (v7.resolve(v10[v1.authorization])) : (v6(v1).then((function (v2){
var v3;
return ((v1.debug) && ((v2.isDebug) = ! 0), (v3) = new v5(v2), (v10[v1.authorization]) = v3, v3);
})))) : (v7.reject(new v4(({type : v9.INSTANTIATION_OPTION_REQUIRED.type, code : v9.INSTANTIATION_OPTION_REQUIRED.code, message : "options.authorization is required when instantiating a client."}))));
})), VERSION : "3.28.0", _clearCache : (function (){
(v10) = ({});
})});
});
(v1.BindBonesParameters) = (function (v1, v2){
if(((v1) && (v1.useBones)) && (v1.computeBonesUsingShaders)){
var v3 = v1.skeleton.getTransformMatrices(v1);
if(v3){
v2.setMatrices("mBones", v3);
}
}
});
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("2111c60fe0d985eec6fb7fa6e8e7d24e.svg");
});
var v3 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDgwNjUtV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2014-04-01-preview').reply(200, "", ({'cache-control' : 'no-cache', pragma : 'no-cache', expires : '-1', 'x-ms-ratelimit-remaining-subscription-reads' : '14978', 'x-ms-request-id' : '10c47207-229a-4915-bc7c-9651847e3940', 'x-ms-correlation-request-id' : '10c47207-229a-4915-bc7c-9651847e3940', 'x-ms-routing-request-id' : 'WESTUS:20150917T021425Z:10c47207-229a-4915-bc7c-9651847e3940', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', date : 'Thu, 17 Sep 2015 02:14:25 GMT', connection : 'close', 'content-length' : '0'}));
return v2;
});
(v0.name) = "AssertionError";
(v2.prototype.attachToMesh) = (function (v1, v2, v3, v4){
(this._attachedToMesh) = v1;
var v5 = this.ray;
if(! v5){
return;
}
if(! v5.direction){
(v5.direction) = v6.Vector3.Zero();
}
if(! v5.origin){
(v5.origin) = v6.Vector3.Zero();
}
if(v4){
(v5.length) = v4;
}
if(! v3){
(v3) = v6.Vector3.Zero();
}
if(! v2){
(v2) = new v6.Vector3(0, 0, - 1);
}
if(! this._meshSpaceDirection){
(this._meshSpaceDirection) = v2.clone();
(this._meshSpaceOrigin) = v3.clone();
}else {
this._meshSpaceDirection.copyFrom(v2);
this._meshSpaceOrigin.copyFrom(v3);
}
if(! this._updateToMeshFunction){
(this._updateToMeshFunction) = this._updateToMesh.bind(this);
this._attachedToMesh.getScene().registerBeforeRender(this._updateToMeshFunction);
}
this._updateToMesh();
});
