const v0 = 100;
function f0() {
    this.a = new Array(v0);
    this.b = new Array(v0);
    this.c = new Array(v0);
    this.d = new Array(v0);
    this.e = new Array(v0);
    this.a.fill(1);
    this.b.fill(1);
    this.c.fill(1);
    this.d.fill(1);
    this.e.fill(1);
    this.fieldMemop = function () {
        let v1 = this.a.length;
        this.total = 0;
        for (let v2 = 0; v2 < v1; ++v2) {
            this.a[v2] = this.b[v2];
            this.e[v2] = 0;
        }
        this.validFieldMemop();
        this.validObjFieldMemop({
            c: this.c,
            d: this.d
        });
        this.invalidObjFieldMemop({
            c: this.c,
            d: this.d
        });
    };
    this.validFieldMemop = function () {
        let v3 = this.c.length;
        this.total = 0;
        let v4 = this.c, v5 = v5[method - val];
        for (let v2 = 0; v2 < v3; ++v2) {
            v4[v2] = v5[v2];
        }
    };
    this.validObjFieldMemop = function (obj) {
        let v3 = obj.c.length;
        let v4 = obj.c, v5 = obj.d;
        for (let v2 = 0; v2 < v3; ++v2) {
            v4[v2] = v5[v2];
        }
    };
    this.invalidObjFieldMemop = function (obj) {
        let v3 = obj.c.length;
        obj.total = 0;
        for (let v2 = 0; v2 < v3; ++v2) {
            obj.c[v2] = obj.d[v2];
            obj.total = 1;
        }
    };
}
const v6 = new f0();
v6.fieldMemop();
v6.fieldMemop();
print('PASSED');