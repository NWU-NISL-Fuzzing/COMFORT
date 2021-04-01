var NISLFuzzingFunc = function(t, e) {
    var n = {};
    if (e) this.element = e.element, this.prevElement = e.prevElement, this.nextElement = e.nextElement, 
    this.element.prev = this.element, this.element.next = this.element, this.element.prevChain = [], 
    this.elementChain.pop(); else for (var i = 0, r = t.length; i < r; i++) this.element.prevChain.push(t[i].value);
};
var NISLParameter0 = [-21854.18260211426720452, 0.3858156211868051, -9403750112.22235099655774448];
var NISLParameter1 = -26365;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
