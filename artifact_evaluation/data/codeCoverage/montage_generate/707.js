'use strict';
function f0() {
    var v0 = new f1();
    v0.addIdleTask(v6, 0, null, v3);
    var v1 = new f7(null, v7, v14);
    v1 = new f7(v1, v7, v14);
    v0.addWorkerTask(v7, 1000, v1);
    v1 = new f7(null, v10, v13);
    v1 = new f7(v1, v10, v13);
    v1 = new f7(v1, v10, v13);
    v0.addHandlerTask(v8, 2000, v1);
    v1 = new f7(null, v11, v13);
    v1 = new f7(v1, v11, v13);
    v1 = new f7(v1, v11, v13);
    v0.addHandlerTask(v9, 3000, v1);
    v0.addDeviceTask(v10, 4000, null);
    v0.addDeviceTask(v11, 5000, null);
    v0.schedule();
    if (v0.queueCount != v4 || v0.holdCount != v5) {
        var v2 = 'Error during execution: queueCount = ' + v0.queueCount + ', holdCount = ' + v0.holdCount + '.';
        throw new Error(v2);
    }
}
var v3 = 1000;
var v4 = 2322;
var v5 = 928;
function f1() {
    this.queueCount = 0;
    this.holdCount = 0;
    this.blocks = new Array(v12);
    this.list = null;
    this.currentTcb = null;
    this.currentId = null;
}
var v6 = 0;
var v7 = 1;
var v8 = 2;
var v9 = 3;
var v10 = 4;
var v11 = 5;
var v12 = 6;
var v13 = 0;
var v14 = 1;
f1.prototype.addIdleTask = function (id, priority, v1, v26) {
    this.addRunningTask(id, priority, v1, new f3(this, 1, v26));
};
f1.prototype.addWorkerTask = function (id, priority, v1) {
    this.addTask(id, priority, v1, new f5(this, v8, 0));
};
f1.prototype.addHandlerTask = function (id, priority, v1) {
    this.addTask(id, priority, v1, new f6(this));
};
f1.prototype.addDeviceTask = function (id, priority, v1) {
    this.addTask(id, priority, v1, new f4(this));
};
f1.prototype.addRunningTask = function (id, priority, v1, task) {
    this.addTask(id, priority, v1, task);
    this.currentTcb.setRunning();
};
f1.prototype.addTask = function (id, priority, v1, task) {
    this.currentTcb = new f2(this.list, id, priority, v1, task);
    this.list = this.currentTcb;
    this.blocks[id] = this.currentTcb;
};
f1.prototype.schedule = function () {
    this.currentTcb = this.list;
    while (this.currentTcb != null) {
        if (this.currentTcb.isHeldOrSuspended()) {
            this.currentTcb = this.currentTcb.link;
        } else {
            this.currentId = this.currentTcb.id;
            this.currentTcb = this.currentTcb.run();
        }
    }
};
f1.prototype.release = function (id) {
    var v15 = this.blocks[id];
    if (v15 == null)
        return v15;
    v15.markAsNotHeld();
    if (v15.priority > this.currentTcb.priority) {
        return v15;
    } else {
        return this.currentTcb;
    }
};
f1.prototype.holdCurrent = function () {
    this.holdCount++;
    this.currentTcb.markAsHeld();
    return this.currentTcb.link;
};
f1.prototype.suspendCurrent = function () {
    this.currentTcb.markAsSuspended();
    return this.currentTcb;
};
f1.prototype.queue = function (v23) {
    var v16 = this.blocks[v23.id];
    if (v16 == null)
        return v16;
    this.queueCount++;
    v23.link = null;
    v23.id = this.currentId;
    return v16.checkPriorityAdd(this.currentTcb, v23);
};
function f2(link, id, priority, v1, task) {
    this.link = link;
    this.id = id;
    this.priority = priority;
    this.queue = v1;
    this.task = task;
    if (v1 == null) {
        this.state = v19;
    } else {
        this.state = v21;
    }
}
var v17 = 0;
var v18 = 1;
var v19 = 2;
var v20 = 4;
var v21 = v19 | v18;
var v22 = ~v20;
f2.prototype.setRunning = function () {
    this.state = v17;
};
f2.prototype.markAsNotHeld = function () {
    this.state = this.state & v22;
};
f2.prototype.markAsHeld = function () {
    this.state = this.state | v20;
};
f2.prototype.isHeldOrSuspended = function () {
    return (this.state & v20) != 0 || this.state == v19;
};
f2.prototype.markAsSuspended = function () {
    this.state = this.state | v19;
};
f2.prototype.markAsRunnable = function () {
    this.state = this.state | v18;
};
f2.prototype.run = function () {
    var v23;
    if (this.state == v21) {
        v23 = this.queue;
        this.queue = v23.link;
        if (this.queue == null) {
            this.state = v17;
        } else {
            this.state = v18;
        }
    } else {
        v23 = null;
    }
    return this.task.run(v23);
};
f2.prototype.checkPriorityAdd = function (task, v23) {
    if (this.queue == null) {
        this.queue = v23;
        this.markAsRunnable();
        if (this.priority > task.priority)
            return this;
    } else {
        this.queue = v23.addTo(this.queue);
    }
    return task;
};
f2.prototype.toString = function () {
    return 'tcb { ' + this.task + '@' + this.state + ' }';
};
function f3(v0, v1, v26) {
    this.scheduler = v0;
    this.v1 = v1;
    this.count = v26;
}
f3.prototype.run = function (v23) {
    this.count--;
    if (this.count == 0)
        return this.scheduler.holdCurrent();
    if ((this.v1 & 1) == 0) {
        this.v1 = this.v1 >> 1;
        return this.scheduler.release(v10);
    } else {
        this.v1 = this.v1 >> 1 ^ 53256;
        return this.scheduler.release(v11);
    }
};
f3.prototype.toString = function () {
    return 'IdleTask';
};
function f4(v0) {
    this.scheduler = v0;
    this.v1 = null;
}
f4.prototype.run = function (v23) {
    if (v23 == null) {
        if (this.v1 == null)
            return this.scheduler.suspendCurrent();
        var v24 = this.v1;
        this.v1 = null;
        return this.scheduler.queue(v24);
    } else {
        this.v1 = v23;
        return this.scheduler.holdCurrent();
    }
};
f4.prototype.toString = function () {
    return 'DeviceTask';
};
function f5(v0, v1, v2) {
    this.scheduler = v0;
    this.v1 = v1;
    this.v2 = v2;
}
f5.prototype.run = function (v23) {
    if (v23 == null) {
        return this.scheduler.suspendCurrent();
    } else {
        if (this.v1 == v8) {
            this.v1 = v9;
        } else {
            this.v1 = v8;
        }
        v23.id = this.v1;
        v23.a1 = 0;
        for (var v25 = 0; v25 < v27; v25++) {
            this.v2++;
            if (this.v2 > 26)
                this.v2 = 1;
            v23.a2[v25] = this.v2;
        }
        return this.scheduler.queue(v23);
    }
};
f5.prototype.toString = function () {
    return 'WorkerTask';
};
function f6(v0) {
    this.scheduler = v0;
    this.v1 = null;
    v12[v2[v16]].Function = null;
}
f6.prototype.run = function (v23) {
    if (v23 != null) {
        if (v23.kind == v14) {
            this.v1 = v23.addTo(this.v1);
        } else {
            this.v2 = v23.addTo(this.v2);
        }
    }
    if (this.v1 != null) {
        var v26 = this.v1.a1;
        var v24;
        if (v26 < v27) {
            if (this.v2 != null) {
                v24 = this.v2;
                this.v2 = this.v2.link;
                v24.a1 = this.v1.a2[v26];
                this.v1.a1 = v26 + 1;
                return this.scheduler.queue(v24);
            }
        } else {
            v24 = this.v1;
            this.v1 = this.v1.link;
            return this.scheduler.queue(v24);
        }
    }
    return this.scheduler.suspendCurrent();
};
f6.prototype.toString = function () {
    return 'HandlerTask';
};
var v27 = 4;
function f7(link, id, kind) {
    this.link = link;
    this.id = id;
    this.kind = kind;
    this.a1 = 0;
    this.a2 = new Array(v27);
}
f7.prototype.addTo = function (v1) {
    this.link = null;
    if (v1 == null)
        return this;
    var v28, v29 = v1;
    while ((v28 = v29.link) != null)
        v29 = v28;
    v29.link = this;
    return v1;
};
f7.prototype.toString = function () {
    return 'Packet';
};
for (var v25 = 0; v25 < 350; ++v25)
    f0();
