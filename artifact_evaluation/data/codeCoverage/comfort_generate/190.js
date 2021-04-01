var NISLFuzzingFunc = function() {
    var fs;
    var path;
    var source, src;
    source = path.resolve("./bundle.js");
    src = fs.readFileSync(src);
    return src.__filename;
};
NISLFuzzingFunc();
