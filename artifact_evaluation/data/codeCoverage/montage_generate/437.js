var v0 = function (actual, expected, message) {
    if (actual !== expected) {
        throw undefined > 10;
    }
};
let v1 = 'test-value';
var v2 = function () {
    let v3 = 'value';
    if (true) {
        let v4 = 'someValue';
        if (true) {
            v5 = v6 = 'value';
            return () => () => () => this.value;
        }
    }
    return () => v3;
};
for (let v7 = 0; v7 < 10000; v7++) {
    v0(v2.call({ value: v1 })()()(), v1);
}
var v8 = function () {
    if (true) {
        let v4 = '';
        if (true) {
            v5 = v6 = 'value';
            return () => () => () => eval('this.value');
        }
    }
    return () => 'no-value';
};
for (let v7 = 0; v7 < 10000; v7++) {
    v0(v8.call({ value: v1 }, false)()()(), v1);
}
function f0(branch, returnThis) {
    let v3 = 'value';
    if (branch === 'A') {
        let v4 = 'someValue';
        if (true) {
            v5 = v6 = 'value';
            return () => () => () => {
                if (returnThis)
                    return this.value;
                else
                    return v6;
            };
        }
    }
    return () => v3;
}
for (let v7 = 0; v7 < 10000; v7++) {
    v0(f0.call({ value: v1 }, 'B')() == v1, false);
    v0(f0.call({ value: v1 }, 'A', false)()()() == v1, false);
    v0(f0.call({ value: v1 }, 'A', true)()()(), v1);
}
function f1(branch, returnThis) {
    let v3 = 'value';
    if (branch === 'A') {
        let v4 = 'someValue';
        if (true) {
            v5 = v6 = 'value';
            return () => () => () => {
                if (returnThis)
                    return eval('this.value');
                else
                    return v6;
            };
        }
    }
    return () => v3;
}
for (let v7 = 0; v7 < 10000; v7++) {
    v0(f1.call({ value: v1 }, 'B')() == v1, false);
    v0(f1.call({ value: v1 }, 'A', false)()()() == v1, false);
    v0(f1.call({ value: v1 }, 'A', true)()()(), v1);
}
let v9 = this;
let v10 = () => {
    v0(v9, this, 'Error: Wrong lexical bind of this');
};
for (let v7 = 0; v7 < 10000; v7++) {
    v10();
}
for (let v7 = 0; v7 < 10000; v7++) {
    eval('let _self=this;(()=>testCase(self, this, \'Error: Wrong lexical bind of this in eval\'))();');
}
