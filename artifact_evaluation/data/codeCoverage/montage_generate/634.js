function f0() {
    this.result = 0;
    this.x = 0;
    this.y = 0;
    this.z = 0;
}
var v0 = 1;
var v1 = 2;
var v2 = 4;
var v3 = 8;
f0.prototype.test0 = function () {
    this.result = v0 | v1;
};
f0.prototype.test1 = function () {
    this.result = v0 | v1 | v2;
};
f0.prototype.test2 = function () {
    this.result = v0 | (v1 | v2);
};
f0.prototype.test3 = function () {
    this.result = v0 | v1 | v2 | v3;
};
f0.prototype.test4 = function () {
    this.result = v0 | (v1 | v2) | v3;
};
f0.prototype.test5 = function () {
    this.result = v0 | v1 | (v2 | v3);
};
f0.prototype.test6 = function () {
    this.result = v0 | (v1 | v2 | v3);
};
f0.prototype.test7 = function () {
    this.result = v0 | (v1 | v24 + 1);
};
f0.prototype.test8 = function () {
    this.y = this.x | v1;
    this.x = v2;
    this.z = this.x | v0;
};
f0.prototype.test9 = function () {
    this.z = (this.x = (this.y = this.x | v2) | v3) | v0;
};
f0.prototype.test10 = function () {
    this.z = v0 >> v1 | v2 >> v2;
};
f0.prototype.test11 = function (x) {
    this.z = x >> x;
};
var v4 = new f0();
v4.test0();
assertEquals(3, v4.result);
v4.test1();
assertEquals(7, v4.result);
v4.test2();
assertEquals(7, v4.result);
v4.test3();
assertEquals(15, v4.result);
v4.test4();
assertEquals(15, v4.result);
v4.test5();
assertEquals(15, v4.result);
v4.test6();
assertEquals(15, v4.result);
v4.test7();
assertEquals(15, v4.result);
v0 = 1.1;
v4.x = 1;
v4.test8();
assertEquals(4, v4.x);
assertEquals(3, v4.y);
assertEquals(5, v4.z);
v4.x = 2;
v4.test9();
assertEquals(14, v4.x);
assertEquals(6, v4.y);
assertEquals(15, v4.z);
v0 = '2';
v4.test11(v0);
assertEquals(0, v4.z);
v0 = 4;
v1 = '1';
v2 = 2;
v4.test10();
assertEquals(2, v4.z);