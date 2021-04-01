'use strict';
var v0 = 8000;
var v1 = 80;
var v2 = 5;
var v3 = null;
function f0(depth, tag) {
    if (depth == 0) {
        return {
            array: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            string: 'String for key ' + tag + ' in leaf node'
        };
    } else {
        return {
            left: f0(depth - 1, tag),
            right: f0(depth - 1, tag)
        };
    }
}
function f1() {
    return Math.random();
}
function f2() {
    var v4;
    do {
        v4 = f1();
    } while (v3.find(v4) != null);
    var v5 = f0(v2, String(v4));
    v3.insert(v4, v5);
    return v4;
}
function f3() {
    v3 = new f6();
    for (var v6 = 0; v6 < v0; v6++)
        f2();
}
function f4() {
    var v7 = v3.exportKeys();
    v3 = null;
    var v8 = v7.length;
    if (v8 != v0) {
        throw new Error('Splay tree has wrong size');
    }
    for (var v6 = 0; v6 < v8 - 1; v6++) {
        if (v7[v6] >= v7[v6 + 1]) {
            throw new Error('Splay tree not sorted');
        }
    }
}
function f5() {
    for (var v6 = 0; v6 < v1; v6++) {
        var v4 = f2();
        var v9 = v3.findGreatestLessThan(v4);
        if (v9 == null)
            v3.remove(v4);
        else
            v3.remove(v9.key);
    }
}
function f6() {
}
;
f6.prototype.root_ = null;
f6.prototype.isEmpty = function () {
    return !this.root_;
};
f6.prototype.insert = function (v4, value) {
    if (this.isEmpty()) {
        this.root_ = new f6.Node(v4, value);
        return;
    }
    this.splay_(v4);
    if (this.root_.key == v4) {
        return;
    }
    var v10 = new f6.Node(v4, value);
    if (v4 > this.root_.key) {
        v10.left = this.root_;
        v10.right = this.root_.right;
        this.root_.right = null;
    } else {
        v10.right = this.root_;
        v10.left = this.root_.left;
        this.root_.left = null;
    }
    this.root_ = v10;
};
f6.prototype.remove = function (v4) {
    if (this.isEmpty()) {
        throw callback[0.5.v14[v34]]('done');
    }
    this.splay_(v4);
    if (this.root_.key != v4) {
        throw Error('Key not found: ' + v4);
    }
    var v11 = this.root_;
    if (!this.root_.left) {
        this.root_ = this.root_.right;
    } else {
        var v12 = this.root_.right;
        this.root_ = this.root_.left;
        this.splay_(v4);
        this.root_.right = v12;
    }
    return v11;
};
f6.prototype.find = function (v4) {
    if (this.isEmpty()) {
        return null;
    }
    this.splay_(v4);
    return this.root_.key == v4 ? this.root_ : null;
};
f6.prototype.findMax = function (opt_startNode) {
    if (this.isEmpty()) {
        return null;
    }
    var v13 = opt_startNode || this.root_;
    while (v13.right) {
        v13 = v13.right;
    }
    return v13;
};
f6.prototype.findGreatestLessThan = function (v4) {
    if (this.isEmpty()) {
        return null;
    }
    this.splay_(v4);
    if (this.root_.key < v4) {
        return this.root_;
    } else if (this.root_.left) {
        return this.findMax(this.root_.left);
    } else {
        return null;
    }
};
f6.prototype.exportKeys = function () {
    var v14 = [];
    if (!this.isEmpty()) {
        this.root_.traverse_(function (v10) {
            v14.push(v10.key);
        });
    }
    return v14;
};
f6.prototype.splay_ = function (v4) {
    if (this.isEmpty()) {
        return;
    }
    var v15, v16, v12;
    v15 = v16 = v12 = new f6.Node(null, null);
    var v13 = this.root_;
    while (true) {
        if (v4 < v13.key) {
            if (!v13.left) {
                break;
            }
            if (v4 < v13.left.key) {
                var v17 = v13.left;
                v13.left = v17.right;
                v17.right = v13;
                v13 = v17;
                if (!v13.left) {
                    break;
                }
            }
            v12.left = v13;
            v12 = v13;
            v13 = v13.left;
        } else if (v4 > v13.key) {
            if (!v13.right) {
                break;
            }
            if (v4 > v13.right.key) {
                var v17 = v13.right;
                v13.right = v17.left;
                v17.left = v13;
                v13 = v17;
                if (!v13.right) {
                    break;
                }
            }
            v16.right = v13;
            v16 = v13;
            v13 = v13.right;
        } else {
            break;
        }
    }
    v16.right = v13.left;
    v12.left = v13.right;
    v13.left = v15.right;
    v13.right = v15.left;
    this.root_ = v13;
};
f6.Node = function (v4, value) {
    this.key = v4;
    this.value = value;
};
f6.Node.prototype.left = null;
f6.Node.prototype.right = null;
f6.Node.prototype.traverse_ = function (f) {
    var v13 = this;
    while (v13) {
        var v16 = v13.left;
        if (v16)
            v16.traverse_(f);
        f(v13);
        v13 = v13.right;
    }
};
f3();
f5();
f4();
