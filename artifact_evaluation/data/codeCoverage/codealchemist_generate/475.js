var v0 = (function (){
return ((this.minutes()) === (0)) ? ('[昨天]Ah[点整]') : ('[昨天]LT');
});
(v0.htmlParser.HtmlParser) = v0.Util.extend(Object, ({htmlRegex : (function (){
var v2 = /!--([\s\S]+?)--/, v3 = /[0-9a-zA-Z][0-9a-zA-Z:]*/, v4 = /[^\s\0"'>\/=\x01-\x1F\x7F]+/, v5 = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, v6 = (((v4.source) + ('(?:\\s*=\\s*')) + (v5.source)) + (')?');
return new RegExp([].join(""), 'gi');
})(), htmlCharacterEntitiesRegex : /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi, parse : (function (v8){
var v9 = this.htmlRegex, v10, v11 = 0, v12, v13 = [];
while(((v10) = v9.exec(v8)) !== (null)){
var v14 = v10[0], v15 = v10[3], v16 = (v10[1]) || (v10[4]), v17 = ! ! v10[2], v18 = v8.substring(v11, v10.index);
if(v18){
(v12) = this.parseTextAndEntityNodes(v18);
v13.push.apply(v13, v12);
}
if(v15){
v13.push(this.createCommentNode(v14, v15));
}else {
v13.push(this.createElementNode(v14, v16, v17));
}
(v11) = (v10.index) + (v14.length);
}
if((v11) < (v8.length)){
var v19 = v8.substring(v11);
if(v19){
(v12) = this.parseTextAndEntityNodes(v19);
v13.push.apply(v13, v12);
}
}
return v13;
}), parseTextAndEntityNodes : (function (v19){
var v13 = [], v20 = v0.Util.splitAndCapture(v19, this.htmlCharacterEntitiesRegex);
for(var v21 = 0, v22 = v20.length;(v21) < (v22);(v21) += 2){
var v23 = v20[v21], v24 = v20[(v21) + (1)];
if(v23){
v13.push(this.createTextNode(v23));
}
if(v24){
v13.push(this.createEntityNode(v24));
}
}
return v13;
}), createCommentNode : (function (v14, v15){
return new v0.htmlParser.CommentNode(({text : v14, comment : v0.Util.trim(v15)}));
}), createElementNode : (function (v14, v16, v17){
return new v0.htmlParser.ElementNode(({text : v14, tagName : v16.toLowerCase(), closing : v17}));
}), createEntityNode : (function (v19){
return new v0.htmlParser.EntityNode(({text : v19}));
}), createTextNode : (function (v19){
return new v0.htmlParser.TextNode(({text : v19}));
})}));
var v1 = parseInt(v2), v2 = ((typeof v1) == ('number')) && (((v1) < (0)) || ((v1) > (0)));
var v3 = (function (v1){
var v2 = v1('https://xplattestadls1277.azuredatalakestore.net:443').put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3&op=REMOVEACLENTRIES&api-version=2016-11-01').reply(200, "", ({'cache-control' : 'no-cache, no-cache, no-store, max-age=0', pragma : 'no-cache', expires : '-1', 'x-ms-request-id' : '05b9ea82-9a3f-4f81-ab29-1e775f8250a8', contentlength : '0', 'x-ms-webhdfs-version' : '16.12.19.00', status : '0x0', 'x-content-type-options' : 'nosniff', 'strict-transport-security' : 'max-age=15724800; includeSubDomains', date : 'Thu, 23 Mar 2017 20:56:41 GMT', connection : 'close', 'content-length' : '0'}));
return v2;
});
if(v2){
v1++;
}else {
v1--;
}
// GenBlkBrick
for(;((v0) + (v1)) < (v2);(v0) += v1){
var v4 = (function (v1){
this._setProperty('fill-rule', v1);
});
}
Array.prototype.reduce.call(v4, v3, v1);
if(v2){
v1++;
}else {
v1--;
}
