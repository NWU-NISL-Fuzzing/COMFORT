var v0 = (function (v1, v2, v3){
"use strict";
(v2.exports) = ({filename : ({type : "filename", description : "filename to use when reading from stdin - this will be used in source-maps, errors etc", default : "unknown", shorthand : "f"}), filenameRelative : ({hidden : ! 0, type : "string"}), inputSourceMap : ({hidden : ! 0}), env : ({hidden : ! 0, default : ({})}), mode : ({description : "", hidden : ! 0}), retainLines : ({type : "boolean", default : ! 1, description : "retain line numbers - will result in really ugly code"}), highlightCode : ({description : "enable/disable ANSI syntax highlighting of code frames (on by default)", type : "boolean", default : ! 0}), suppressDeprecationMessages : ({type : "boolean", default : ! 1, hidden : ! 0}), presets : ({type : "list", description : "", default : []}), plugins : ({type : "list", default : [], description : ""}), ignore : ({type : "list", description : "list of glob paths to **not** compile", default : []}), only : ({type : "list", description : "list of glob paths to **only** compile"}), code : ({hidden : ! 0, default : ! 0, type : "boolean"}), metadata : ({hidden : ! 0, default : ! 0, type : "boolean"}), ast : ({hidden : ! 0, default : ! 0, type : "boolean"}), extends : ({type : "string", hidden : ! 0}), comments : ({type : "boolean", default : ! 0, description : "write comments to generated output (true by default)"}), shouldPrintComment : ({hidden : ! 0, description : "optional callback to control whether a comment should be inserted, when this is used the comments option is ignored"}), wrapPluginVisitorMethod : ({hidden : ! 0, description : "optional callback to wrap all visitor methods"}), compact : ({type : "booleanString", default : "auto", description : "do not include superfluous whitespace characters and line terminators [true|false|auto]"}), minified : ({type : "boolean", default : ! 1, description : "save as much bytes when printing [true|false]"}), sourceMap : ({alias : "sourceMaps", hidden : ! 0}), sourceMaps : ({type : "booleanString", description : "[true|false|inline]", default : ! 1, shorthand : "s"}), sourceMapTarget : ({type : "string", description : "set `file` on returned source map"}), sourceFileName : ({type : "string", description : "set `sources[0]` on returned source map"}), sourceRoot : ({type : "filename", description : "the root from which all sources are relative"}), babelrc : ({description : "Whether or not to look up .babelrc and .babelignore files", type : "boolean", default : ! 0}), sourceType : ({description : "", default : "module"}), auxiliaryCommentBefore : ({type : "string", description : "print a comment before any injected non-user code"}), auxiliaryCommentAfter : ({type : "string", description : "print a comment after any injected non-user code"}), resolveModuleSource : ({hidden : ! 0}), getModuleId : ({hidden : ! 0}), moduleRoot : ({type : "filename", description : "optional prefix for the AMD module formatter that will be prepend to the filename on module definitions"}), moduleIds : ({type : "boolean", default : ! 1, shorthand : "M", description : "insert an explicit id for modules"}), moduleId : ({description : "specify a custom name for module ids", type : "string"}), passPerPreset : ({description : "Whether to spawn a traversal pass per a preset. By default all presets are merged.", type : "boolean", default : ! 1, hidden : ! 0}), parserOpts : ({description : "Options to pass into the parser, or to change parsers (parserOpts.parser)", default : ! 1}), generatorOpts : ({description : "Options to pass into the generator, or to change generators (generatorOpts.generator)", default : ! 1})});
});
(v0.prototype.render) = (function (){
var v1 = (this.alphaTest) ? (this._alphaTestEffect) : (this._effect);
if(((! v1.isReady()) || (! this.texture)) || (! this.texture.isReady())){
return;
}
var v2 = this._scene.getEngine();
this.onBeforeRenderObservable.notifyObservers(this);
v2.enableEffect(v1);
v2.setState(false);
v1.setTexture("textureSampler", this.texture);
v1.setMatrix("textureMatrix", this.texture.getTextureMatrix());
v1.setFloat4("color", this.color.r, this.color.g, this.color.b, this.color.a);
v1.setVector2("offset", this.offset);
v1.setVector2("scale", this.scale);
v2.bindBuffers(this._vertexBuffers, this._indexBuffer, v1);
if(! this.alphaTest){
v2.setAlphaMode(this.alphaBlendingMode);
v2.draw(true, 0, 6);
v2.setAlphaMode(v3.Engine.ALPHA_DISABLE);
}else {
v2.draw(true, 0, 6);
}
this.onAfterRenderObservable.notifyObservers(this);
});
Object.defineProperty(v0, "MatricesIndicesKind", ({get : (function (){
return v0._MatricesIndicesKind;
}), enumerable : true, configurable : true}));
function v1(v1, v2){
return (function (v3, v4){
var v5 = v0(v3);
if(! v5[v4]){
(v5[v4]) = ({type : v1, sourceName : v2});
}
});
}
var v2 = (function (v1, v2){
var v3 = 0;
var v4 = v1.length;
if((v1.length) !== (v2.length)){
v3++;
(v4) = Math.min(v1.length, v2.length);
}
var v6 = - 1;
while((++v6) < (v4)){
(v3) += (v1[v6]) ^ (v2[v6]);
}
return v3;
});
(v1.prototype.isSupported) = (function (){
var v1 = (this.test()) ? (this.trueBranch) : (this.falseBranch);
return v1.isSupported();
});
// GenBlkBrick
for((v3) = 0;(v3) < (v1);++v3){
(v2.UTC) = v0.UTC;
}
if(((v3) >= (0)) & ((v3) <= (9))){
(v3) = ('00') + (v3);
}
