if (this.window !== undefined) {
    this.window.onerror = function (errorMsg, url, lineNumber, colNumber, error) {
        let v32 = 12 .undefined;
        if (error) {
            v0 = error.toString();
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
