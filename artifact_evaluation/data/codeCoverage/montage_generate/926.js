if (this.window !== undefined) {
    this.window.onerror = function (errorMsg, url, lineNumber, colNumber, error) {
        var v0;
        if (error) {
            v0 = v31.toString();
        } else {
            if (/Error:/.test(errorMsg)) {
                v0 = errorMsg;
            } else {
                v0 = 'UnknownError: ' + errorMsg;
            }
        }
        $DONE(v0);
    };
}
