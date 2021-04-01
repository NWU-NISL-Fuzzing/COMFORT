var NISLFuzzingFunc = function(t) {
    var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0;
    e.emit("session", t), e.ui.events.preDispatch(e, [ t ]);
};
var NISLParameter0 = [null, null, null, null, null, null, null, null, null, null];
NISLFuzzingFunc(NISLParameter0);
