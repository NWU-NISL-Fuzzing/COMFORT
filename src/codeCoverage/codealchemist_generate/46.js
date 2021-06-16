var v0 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"927426a3-06d4-4e55-8c99-a0bc34db140e\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '429', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"927426a3-06d4-4e55-8c99-a0bc34db140e"', 'x-ms-request-id' : '0fcdecc7-c4d9-4ca8-8595-0f7e73809ac4', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14992', 'x-ms-correlation-request-id' : '7e29d9ca-cc68-48a5-a0f9-300771b493a7', 'x-ms-routing-request-id' : 'WESTEUROPE:20171002T082308Z:7e29d9ca-cc68-48a5-a0f9-300771b493a7', date : 'Mon, 02 Oct 2017 08:23:08 GMT', connection : 'close'}));
return v2;
});
Object.defineProperty(v0.prototype, "animationsTimeCounter", ({get : (function (){
return this._animationsTime;
}), enumerable : true, configurable : true}));
// GenBlkBrick
for((v0) = v1;(v0) < (v2);(v0) += v3){
var v1 = (function (){
return this.__label;
});
}
var v2 = ({thereYet : v1, cap : v0});
(v0.prototype.copyFromArray) = (function (v1, v2){
if((v2) === (void 0)){
(v2) = 0;
}
(this.a) = v1[v2];
(this.b) = v1[(v2) + (1)];
(this.c) = v1[(v2) + (2)];
(this.d) = v1[(v2) + (3)];
(this.tx) = v1[(v2) + (4)];
(this.ty) = v1[(v2) + (5)];
return this;
});
// GenBlkBrick
for(var v0 in v0){
(v0.prototype.onSamplerSelect) = (function (v1, v2){
if((v3.kolorPicker) != (this)){
return;
}
(v3.sampling) = false;
this.canvas.colorSampler('disable');
this.setColor(v2);
(v2) = v3.getColor();
this.selectColor(v2);
});
(v0.prototype._disable) = (function (v1){
var v2 = v3.Tools.MakeArray((v1) || (this._cameras));
if(! v2){
return;
}
for(var v4 = 0;(v4) < (v2.length);v4++){
var v5 = v2[v4];
var v6 = v5.Name;
v5.detachPostProcess(this._postProcesses[(this._singleInstance) ? (0) : (v6)]);
for(var v7 in this._renderPasses){
this._renderPasses[v7]._decRefCount();
}
}
});
}
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : false}));
var v3 = (function (v1){
var v2;
(function (v2){
var v3;
(function (v3){
(v3[(v3["BYTE"]) = 5120]) = "BYTE";
(v3[(v3["UNSIGNED_BYTE"]) = 5121]) = "UNSIGNED_BYTE";
(v3[(v3["SHORT"]) = 5122]) = "SHORT";
(v3[(v3["UNSIGNED_SHORT"]) = 5123]) = "UNSIGNED_SHORT";
(v3[(v3["FLOAT"]) = 5126]) = "FLOAT";
})((v3) = (v2.EComponentType) || ((v2.EComponentType) = ({})));
var v4;
(function (v4){
(v4[(v4["FRAGMENT"]) = 35632]) = "FRAGMENT";
(v4[(v4["VERTEX"]) = 35633]) = "VERTEX";
})((v4) = (v2.EShaderType) || ((v2.EShaderType) = ({})));
var v5;
(function (v5){
(v5[(v5["BYTE"]) = 5120]) = "BYTE";
(v5[(v5["UNSIGNED_BYTE"]) = 5121]) = "UNSIGNED_BYTE";
(v5[(v5["SHORT"]) = 5122]) = "SHORT";
(v5[(v5["UNSIGNED_SHORT"]) = 5123]) = "UNSIGNED_SHORT";
(v5[(v5["INT"]) = 5124]) = "INT";
(v5[(v5["UNSIGNED_INT"]) = 5125]) = "UNSIGNED_INT";
(v5[(v5["FLOAT"]) = 5126]) = "FLOAT";
(v5[(v5["FLOAT_VEC2"]) = 35664]) = "FLOAT_VEC2";
(v5[(v5["FLOAT_VEC3"]) = 35665]) = "FLOAT_VEC3";
(v5[(v5["FLOAT_VEC4"]) = 35666]) = "FLOAT_VEC4";
(v5[(v5["INT_VEC2"]) = 35667]) = "INT_VEC2";
(v5[(v5["INT_VEC3"]) = 35668]) = "INT_VEC3";
(v5[(v5["INT_VEC4"]) = 35669]) = "INT_VEC4";
(v5[(v5["BOOL"]) = 35670]) = "BOOL";
(v5[(v5["BOOL_VEC2"]) = 35671]) = "BOOL_VEC2";
(v5[(v5["BOOL_VEC3"]) = 35672]) = "BOOL_VEC3";
(v5[(v5["BOOL_VEC4"]) = 35673]) = "BOOL_VEC4";
(v5[(v5["FLOAT_MAT2"]) = 35674]) = "FLOAT_MAT2";
(v5[(v5["FLOAT_MAT3"]) = 35675]) = "FLOAT_MAT3";
(v5[(v5["FLOAT_MAT4"]) = 35676]) = "FLOAT_MAT4";
(v5[(v5["SAMPLER_2D"]) = 35678]) = "SAMPLER_2D";
})((v5) = (v2.EParameterType) || ((v2.EParameterType) = ({})));
var v6;
(function (v6){
(v6[(v6["CLAMP_TO_EDGE"]) = 33071]) = "CLAMP_TO_EDGE";
(v6[(v6["MIRRORED_REPEAT"]) = 33648]) = "MIRRORED_REPEAT";
(v6[(v6["REPEAT"]) = 10497]) = "REPEAT";
})((v6) = (v2.ETextureWrapMode) || ((v2.ETextureWrapMode) = ({})));
var v7;
(function (v7){
(v7[(v7["NEAREST"]) = 9728]) = "NEAREST";
(v7[(v7["LINEAR"]) = 9728]) = "LINEAR";
(v7[(v7["NEAREST_MIPMAP_NEAREST"]) = 9984]) = "NEAREST_MIPMAP_NEAREST";
(v7[(v7["LINEAR_MIPMAP_NEAREST"]) = 9985]) = "LINEAR_MIPMAP_NEAREST";
(v7[(v7["NEAREST_MIPMAP_LINEAR"]) = 9986]) = "NEAREST_MIPMAP_LINEAR";
(v7[(v7["LINEAR_MIPMAP_LINEAR"]) = 9987]) = "LINEAR_MIPMAP_LINEAR";
})((v7) = (v2.ETextureFilterType) || ((v2.ETextureFilterType) = ({})));
var v8;
(function (v8){
(v8[(v8["ALPHA"]) = 6406]) = "ALPHA";
(v8[(v8["RGB"]) = 6407]) = "RGB";
(v8[(v8["RGBA"]) = 6408]) = "RGBA";
(v8[(v8["LUMINANCE"]) = 6409]) = "LUMINANCE";
(v8[(v8["LUMINANCE_ALPHA"]) = 6410]) = "LUMINANCE_ALPHA";
})((v8) = (v2.ETextureFormat) || ((v2.ETextureFormat) = ({})));
var v9;
(function (v9){
(v9[(v9["FRONT"]) = 1028]) = "FRONT";
(v9[(v9["BACK"]) = 1029]) = "BACK";
(v9[(v9["FRONT_AND_BACK"]) = 1032]) = "FRONT_AND_BACK";
})((v9) = (v2.ECullingType) || ((v2.ECullingType) = ({})));
var v10;
(function (v10){
(v10[(v10["ZERO"]) = 0]) = "ZERO";
(v10[(v10["ONE"]) = 1]) = "ONE";
(v10[(v10["SRC_COLOR"]) = 768]) = "SRC_COLOR";
(v10[(v10["ONE_MINUS_SRC_COLOR"]) = 769]) = "ONE_MINUS_SRC_COLOR";
(v10[(v10["DST_COLOR"]) = 774]) = "DST_COLOR";
(v10[(v10["ONE_MINUS_DST_COLOR"]) = 775]) = "ONE_MINUS_DST_COLOR";
(v10[(v10["SRC_ALPHA"]) = 770]) = "SRC_ALPHA";
(v10[(v10["ONE_MINUS_SRC_ALPHA"]) = 771]) = "ONE_MINUS_SRC_ALPHA";
(v10[(v10["DST_ALPHA"]) = 772]) = "DST_ALPHA";
(v10[(v10["ONE_MINUS_DST_ALPHA"]) = 773]) = "ONE_MINUS_DST_ALPHA";
(v10[(v10["CONSTANT_COLOR"]) = 32769]) = "CONSTANT_COLOR";
(v10[(v10["ONE_MINUS_CONSTANT_COLOR"]) = 32770]) = "ONE_MINUS_CONSTANT_COLOR";
(v10[(v10["CONSTANT_ALPHA"]) = 32771]) = "CONSTANT_ALPHA";
(v10[(v10["ONE_MINUS_CONSTANT_ALPHA"]) = 32772]) = "ONE_MINUS_CONSTANT_ALPHA";
(v10[(v10["SRC_ALPHA_SATURATE"]) = 776]) = "SRC_ALPHA_SATURATE";
})((v10) = (v2.EBlendingFunction) || ((v2.EBlendingFunction) = ({})));
})((v2) = (v1.GLTF1) || ((v1.GLTF1) = ({})));
});
