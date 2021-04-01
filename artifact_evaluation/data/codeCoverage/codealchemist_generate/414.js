var v0 = (function (v1){
v1.put("template/carousel/carousel.html", ((((((((((((((("<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n") + ("  <div class=\"carousel-inner\" ng-transclude></div>\n")) + ("  <a role=\"button\" href class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\">\n")) + ("    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-left\"></span>\n")) + ("    <span class=\"sr-only\">previous</span>\n")) + ("  </a>\n")) + ("  <a role=\"button\" href class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\">\n")) + ("    <span aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></span>\n")) + ("    <span class=\"sr-only\">next</span>\n")) + ("  </a>\n")) + ("  <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n")) + ("    <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{ active: isActive(slide) }\" ng-click=\"select(slide)\">\n")) + ("      <span class=\"sr-only\">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if=\"isActive(slide)\">, currently active</span></span>\n")) + ("    </li>\n")) + ("  </ol>\n")) + ("</div>"));
});
var v1 = (function (v1){
var v2 = v1('http://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-inbound-nat-pool/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*').reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource FrontendPortRangeStartUnderAllowedValueName has invalid value of FrontendPortRangeStart (0). The value must be between 1 and 65534.\",\r\n    \"details\": []\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '240', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : '8adec02c-d9a0-4b15-ad80-3f35cb836e50', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1194', 'x-ms-correlation-request-id' : 'd9d4ea37-0749-4492-8b7e-5f9cf3bae318', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T110500Z:d9d4ea37-0749-4492-8b7e-5f9cf3bae318', date : 'Wed, 27 Sep 2017 11:04:59 GMT', connection : 'close'}));
return v2;
});
v1(v0);
// GenBlkBrick
for(var v0 in v0.prototype){
var v2 = (function (v1){
this.setData(({actionSheetHidden : ! this.data.actionSheetHidden}));
});
(v0.prototype.attachCamerasToRenderPipeline) = (function (v1, v2, v3){
var v4 = this._renderPipelines[v1];
if(! v4){
return;
}
v4._attachCameras(v2, v3);
});
}
(v0.prototype._onOptionsSetup) = (function (v1, v2, v3, v4){
return v4;
});
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
(v3) = (function (){
v0();
v1();
});
var v4 = (function (v1, v2, v3){
var v4 = v3(2134), v5 = Math.max;
(v1.exports) = (function (v1, v2, v3){
return ((v2) = v5(((void 0) === (v2)) ? ((v1.length) - (1)) : (v2), 0), (function (){
for(var v7 = arguments, v9 = - 1, v10 = v5((v7.length) - (v2), 0), v11 = Array(v10);(++v9) < (v10);){
(v11[v9]) = v7[(v2) + (v9)];
}
(v9) = - 1;
for(var v13 = Array((v2) + (1));(++v9) < (v2);){
(v13[v9]) = v7[v9];
}
return ((v13[v2]) = v3(v11), v4(v1, this, v13));
}));
});
});
