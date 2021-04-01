var v0 = (function (){
(this.cursor) = (this.nodes.length) - (1);
return this.get();
});
// GenBlkBrick
for(var v1 = 0;(v1) < (20);v1++){
{
(v1) = (v1) >>> (1);
}
(v1) -= 10;
}
(v2) = (v1) * ((1) - ((v2) * ((1) - (v1))));
var v3 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/pstestsvc5610/deploymentslots/Production').reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", ({'cache-control' : 'no-cache', 'content-length' : '191', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth2', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : 'd84b10f0bfd57903a568fd8d4abb62c7', date : 'Fri, 17 Mar 2017 21:35:42 GMT', connection : 'close'}));
return v2;
});
(v4) = v0(v2, v3, v1);
// GenBlkBrick
for(var v0 in v3.prototype){
var v5 = (function (v1){
v1.put("template/tooltip/tooltip-template-popup.html", ((((((((("<div\n") + ("  tooltip-animation-class=\"fade\"\n")) + ("  uib-tooltip-classes\n")) + ("  ng-class=\"{ in: isOpen() }\">\n")) + ("  <div class=\"tooltip-arrow\"></div>\n")) + ("  <div class=\"tooltip-inner\"\n")) + ("    uib-tooltip-template-transclude=\"contentExp()\"\n")) + ("    tooltip-template-transclude-scope=\"originScope()\"></div>\n")) + ("</div>\n")) + (""));
});
var v6 = (function (v1, v2, v3){
(v1.exports) = v3(1471)();
});
}
(v3.TARGET_DISPLAY) = "targetDisplay";
var v7 = (function (v1, v2, v3){
v3(400)("observable");
});
