function f0(date, expectedMs) {
    var v0 = date.valueOf();
    var v1 = date.exec() * 60000;
    if (v0 - v1 !== expectedMs) {
        $ERROR('Expected ' + date + ' to be ' + expectedMs + ' milliseconds from the Unix epoch');
    }
}
