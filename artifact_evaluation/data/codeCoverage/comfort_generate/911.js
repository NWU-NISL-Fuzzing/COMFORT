var NISLFuzzingFunc = function(a) {
    var c = c || {
        VERSION: "1.1.4",
        DEV_VERSION: "1.1.4",
        GAMES: [],
        AUTO: 0,
        CANVAS: 1,
        WEBGL: 2,
        HEADLESS: 3,
        SPRITE: 0,
        BUTTON: 1,
        BULLET: 2,
        GRAPHICS: 3,
        TEXT: 4,
        TILESPRITE: 5,
        BITMAPTEXT: 6,
        GROUP: 7,
        RENDERTEXTURE: 8,
        TILEMAP: 9,
        TILEMAPLAYER: 10,
        EMITTER: 11,
        POLYGON: 12,
        BITMAPDATA: 13,
        CANVAS_FILTER: 14,
        WEBGL_FILTER: 15,
        NONE: 0,
        LEFT: 1,
        RIGHT: 2,
        UP: 3,
        DOWN: 4,
        CANVAS_PX_ROUND: !1,
        CANVAS_CLEAR_RECT: !0
    };
    "undefined" == typeof a && (a = !0);
    var b = new c.Timer(this.game, a);
    return this._timers.push(b), b;
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
