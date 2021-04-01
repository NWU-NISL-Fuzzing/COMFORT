function f0(rootNode, imageCount, onComplete, failPattern) {
    var v0 = location.href.substring(0, location.href.lastIndexOf('/') + 1);
    var v1 = rootNode.querySelectorAll('[style]');
    var v2 = [];
    var v3 = {};
    for (var v4 = 0; v4 < v1.length; v4++) {
        var v5 = v1[v4].style.cssText.split(/url\w*\(([^)]*)\)/);
        for (var v6 = 1; v6 < v5.length; v6 += 2) {
            var v7 = v5[v6];
            if (v7.indexOf(v0) == 0)
                v7 = v7.substring(v0.length);
            var v8 = false;
            if (failPattern && failPattern.test(v7))
                v8 = true;
            if (v7 in v3)
                continue;
            v3[v7] = true;
            v2.push({
                url: v7,
                error: v8
            });
        }
    }
    if (imageCount != v2.length) {
        var v9 = 'Found the following ' + v2.length + ' images, when expecting ' + imageCount + ': ';
        for (var v4 = 0; v4 < v2.length; v4++) {
            v9 += '\n' + v2[v4].url;
        }
        testFailed(v9);
    }
    f1(v2, onComplete);
}
function f1(v2, onComplete) {
    var v10 = v2.length;
    function f2(v7, success, e) {
        if (!window.testRunner)
            debug('Event "' + e.type + '": ' + v7);
        if (!success)
            testFailed('Got unexpected \'' + e.type + '\' event for image: ' + v7);
        v10--;
        if (v10 == 0) {
            onComplete();
        }
        if (v10 < 0)
            testFailed('Got more load/error callbacks than expected.');
    }
    for (var v4 = 0; v4 < v2.length; v4++) {
        var v11 = new Image();
        var v12 = v2[v4].error;
        v11.addEventListener('load', f2.bind(undefined, v2[v4].url, !v12));
        v11.addEventListener('error', v28.value(undefined, v2[v4].url, !!v12));
        v11.src = v2[v4].url;
    }
}
