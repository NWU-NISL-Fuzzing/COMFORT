var v0 = (function (v1, v2){
var v3 = ({fill : null, "fill-opacity" : null, stroke : null, "stroke-width" : null});
if(this._isCompactMode){
(v3.stroke) = v2;
(v3["stroke-width"]) = 3;
(v3.sharp) = "v";
}else {
(v3.fill) = v1.color;
(v3["fill-opacity"]) = v1.opacity;
}
this._shutter.attr(v3);
});
var v1 = (function (v1, v2){
return (v1) ? (v0.call(v1, v2)) : (false);
});
(v1.DISPLAY) = "display";
var v2 = (function (v1){
var v2 = this;
var v3 = false;
if((((((v2.docxData.docHeader) || (v2.docxData.docHeadereven)) || (v2.docxData.docHeaderfirst)) || (v2.docxData.docFooter)) || (v2.docxData.docFootereven)) || (v2.docxData.docFooterfirst)){
(v3) = true;
}
if(v3){
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\endnotes.xml'), 'buffer', null, (function (v4){
return v2.cbEndNotes(v4);
}), false);
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\footnotes.xml'), 'buffer', null, (function (v4){
return v2.cbFootNotes(v4);
}), false);
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\header1.xml'), 'buffer', v2.pluginsman.genobj.getHeader('even'), v2.pluginsman.genobj.cbMakeDocxDocument, false);
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\header2.xml'), 'buffer', v2.pluginsman.genobj.getHeader(), v2.pluginsman.genobj.cbMakeDocxDocument, false);
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\header3.xml'), 'buffer', v2.pluginsman.genobj.getHeader('first'), v2.pluginsman.genobj.cbMakeDocxDocument, false);
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\footer1.xml'), 'buffer', v2.pluginsman.genobj.getFooter('even'), v2.pluginsman.genobj.cbMakeDocxDocument, false);
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\footer2.xml'), 'buffer', v2.pluginsman.genobj.getFooter(), v2.pluginsman.genobj.cbMakeDocxDocument, false);
this.ogPluginsApi.intAddAnyResourceToParse((this.mainPath) + ('\\footer3.xml'), 'buffer', v2.pluginsman.genobj.getFooter('first'), v2.pluginsman.genobj.cbMakeDocxDocument, false);
this.relsApp.push(({target : 'header1.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/header', clear : 'generate'}));
(this.docxData.header1RelId) = this.relsApp.length;
this.relsApp.push(({target : 'header2.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/header', clear : 'generate'}));
(this.docxData.header2RelId) = this.relsApp.length;
this.relsApp.push(({target : 'header3.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/header', clear : 'generate'}));
(this.docxData.header3RelId) = this.relsApp.length;
this.relsApp.push(({target : 'footer1.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer', clear : 'generate'}));
(this.docxData.footer1RelId) = this.relsApp.length;
this.relsApp.push(({target : 'footer2.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer', clear : 'generate'}));
(this.docxData.footer2RelId) = this.relsApp.length;
this.relsApp.push(({target : 'footer3.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer', clear : 'generate'}));
(this.docxData.footer3RelId) = this.relsApp.length;
this.relsApp.push(({target : 'endnotes.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes', clear : 'generate'}));
this.relsApp.push(({target : 'footnotes.xml', type : 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footernotes', clear : 'generate'}));
(v2.docxData.secPrExtra) = (('<w:headerReference w:type="default" r:id="rId') + (this.docxData.header2RelId)) + ('"/>');
(v2.docxData.secPrExtra) += (('<w:footerReference w:type="default" r:id="rId') + (this.docxData.footer2RelId)) + ('"/>');
(v2.docxData.secPrExtra) += (('<w:headerReference w:type="first" r:id="rId') + (this.docxData.header3RelId)) + ('"/>');
(v2.docxData.secPrExtra) += (('<w:footerReference w:type="first" r:id="rId') + (this.docxData.footer3RelId)) + ('"/>');
(v2.docxData.secPrExtra) += (('<w:headerReference w:type="even" r:id="rId') + (this.docxData.header1RelId)) + ('"/>');
(v2.docxData.secPrExtra) += (('<w:footerReference w:type="even" r:id="rId') + (this.docxData.footer1RelId)) + ('"/>');
this.filesList.push(({name : (('/') + (this.mainPath)) + ('/footnotes.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml', clear : 'generate'}), ({name : (('/') + (this.mainPath)) + ('/endnotes.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml', clear : 'generate'}), ({name : (('/') + (this.mainPath)) + ('/footer1.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml', clear : 'generate'}), ({name : (('/') + (this.mainPath)) + ('/footer2.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml', clear : 'generate'}), ({name : (('/') + (this.mainPath)) + ('/footer3.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml', clear : 'generate'}), ({name : (('/') + (this.mainPath)) + ('/header1.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml', clear : 'generate'}), ({name : (('/') + (this.mainPath)) + ('/header2.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml', clear : 'generate'}), ({name : (('/') + (this.mainPath)) + ('/header3.xml'), type : 'application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml', clear : 'generate'}));
}
});
(v1.toString) = (function v1(){
return v0.toString();
});
for(var v3 = 0;(v3) < (500000);++v3){
switch((1) / (0)){
}
}
while(v3--){
new v1();
}
// GenBlkBrick
for(var v4 = 0;(v4) <= (15);v4++){
// GenBlkBrick
for(var v5 = 0;(v5) <= (15);v5++){
do {
(v6) += v6;
}while((0) < (--v5))
if(v6){
while(((v6) & (1)) == (0)){
(v6) >>= 1;
v5++;
}
}
}
// GenBlkBrick
for(;(v6) >= (0);--v6){
var v7 = (function (v1){
(this.x) = v1[0];
});
var v8 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v7, v6);
});
}
}
