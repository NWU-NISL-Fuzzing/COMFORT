function f0(condition, reason) {
    if (!condition)
        throw new Error(reason);
}
const v0 = 5;
const v1 = 0;
const v2 = 1;
const v3 = 2;
const v4 = 3;
const v5 = 4;
const v6 = 4294967295;
const v7 = 4;
const v8 = 0;
const v9 = 1;
const v10 = 2;
const v11 = 3;
v12 = class v12 {
    constructor(snapshot, v24) {
        f0(v24 % v0 === 0, 'Bad Node Index: ' + v24);
        let v13 = snapshot.nodes;
        this.id = v13[v24 + v1];
        this.size = v13[v24 + v2];
        this.className = snapshot.classNameFromTableIndex(v13[v24 + v3]);
        this.internal = v13[v24 + v4] ? true : false;
        this.outgoingEdges = [];
        let v14 = v13[v24 + v5];
        if (v14 !== v6) {
            for (let v15 = v14; v15 < snapshot.edges.length; v15 += v7) {
                if (snapshot.edges[v15 + v8] !== this.id)
                    break;
                this.outgoingEdges.push(new v16(snapshot, v15));
            }
        }
    }
};
v16 = class v16 {
    constructor(snapshot, edgeIndex) {
        f0(edgeIndex % v7 === 0, 'Bad Edge Index: ' + edgeIndex);
        this.snapshot = snapshot;
        let v17 = snapshot.edges;
        this.fromId = v17[edgeIndex + v8];
        this.toId = v17[edgeIndex + v9];
        this.type = snapshot.edgeTypeFromTableIndex(v17[edgeIndex + v10]);
        if (this.type === 'Property' || this.type === 'Variable')
            this.data = snapshot.edgeNameFromTableIndex(v17[edgeIndex + v11]);
        else
            this.data = v17[edgeIndex + v11];
    }
    get v38() {
        return this.snapshot.nodeWithIdentifier(this.fromId);
    }
    get v39() {
        return this.snapshot.nodeWithIdentifier(this.toId);
    }
};
v18 = class v18 {
    constructor(v27) {
        let {nodes, nodeClassNames, edges, edgeTypes, edgeNames} = v27;
        this._nodes = new Uint32Array(v13.length * v0);
        this._edges = new Uint32Array(v17.length * v7);
        this._nodeIdentifierToIndex = new Map();
        this._edgeTypesTable = edgeTypes;
        this._edgeNamesTable = edgeNames;
        this._nodeClassNamesTable = nodeClassNames;
        let v19 = 0;
        for (let v15 = 0; v15 < v13.length;) {
            this._nodeIdentifierToIndex.set(v13[v15], v19);
            this._nodes[v19++] = v13[v15++];
            this._nodes[v19++] = v13[v15++];
            this._nodes[v19++] = v13[v15++];
            this._nodes[v19++] = v13[v15++];
            this._nodes[v19++] = v6;
        }
        let v20 = 0;
        let v21 = -1;
        for (let v15 = 0; v15 < v17.length;) {
            let v22 = v17[v15++];
            let v23 = v17[v15++];
            f0(v21 <= v22, 'Edge list should be ordered by from node identifier');
            if (v22 !== v21) {
                let v24 = this._nodeIdentifierToIndex.get(v22);
                f0(this._nodes[v24 + v1] === v22, 'Node lookup failed');
                this._nodes[v24 + v5] = v20;
                v21 = v22;
            }
            this._edges[v20++] = v22;
            this._edges[v20++] = v23;
            this._edges[v20++] = v17[v15++];
            this._edges[v20++] = v17[v15++];
        }
    }
    get v13() {
        return this._nodes;
    }
    get v17() {
        return this._edges;
    }
    nodeWithIdentifier(v31) {
        return new v12(this, this._nodeIdentifierToIndex.get(v31));
    }
    nodesWithClassName(className) {
        let v25 = [];
        for (let v15 = 0; v15 < this._nodes.length; v15 += v0) {
            let v26 = this._nodes[v15 + v3];
            if (this.classNameFromTableIndex(v26) === className)
                v25.push(new v12(this, v15));
        }
        return v25;
    }
    classNameFromTableIndex(tableIndex) {
        return this._nodeClassNamesTable[tableIndex];
    }
    edgeTypeFromTableIndex(tableIndex) {
        return this._edgeTypesTable[tableIndex];
    }
    edgeNameFromTableIndex(tableIndex) {
        return this._edgeNamesTable[tableIndex];
    }
};
function f1() {
    let v27 = generateHeapSnapshot();
    let {version, nodes, nodeClassNames, edges, edgeTypes} = v27;
    f0(version === 1, 'Heap Snapshot payload should be version 1');
    f0(v13.length, 'Heap Snapshot should have nodes');
    f0(nodeClassNames.length, 'Heap Snapshot should have nodeClassNames');
    f0(v17.length, 'Heap Snapshot should have edges');
    f0(edgeTypes.length, 'Heap Snapshot should have edgeTypes');
    return new v18(v27);
}
v28 = class v28 {
    constructor(v31, className, v32, v34) {
        this.id = v31;
        this.className = className;
        this.size = v32;
        this.internal = v34;
        this.incomingEdges = [];
        this.outgoingEdges = [];
    }
};
v29 = class v29 {
    constructor(v38, v39, v40, v37) {
        this.from = v38;
        this.to = v39;
        this.type = v40;
        this.data = v37;
    }
};
v30 = class v30 {
    constructor(v27) {
        let {version, nodes, nodeClassNames, edges, edgeTypes, edgeNames} = v27;
        this.nodeMap = new Map();
        this.nodes = [];
        for (let v15 = 0; v15 < v13.length;) {
            let v31 = v13[v15++];
            let v32 = v13[v15++];
            let v33 = v13[v15++];
            let v34 = v13[v15++];
            let v35 = new v28(v31, nodeClassNames[v33], v32, v34);
            this.nodeMap.set(v31, v35);
            this.nodes.push(v35);
        }
        for (let v15 = 0; v15 < v17.length;) {
            let v22 = v17[v15++];
            let v23 = v17[v15++];
            let v36 = v17[v15++];
            let v37 = v17[v15++];
            let v38 = this.nodeMap.get(v22);
            let v39 = this.nodeMap.get(v23);
            f0(v38, 'Missing node for `from` part of edge');
            f0(v39, 'Missing node for `to` part of edge');
            let v40 = edgeTypes[v36];
            if (v40 === 'Property' || v40 === 'Variable')
                v37 = edgeNames[v37];
            let v41 = new v29(v38, v39, edgeTypes[v36], v37);
            v38.outgoingEdges.push(v41);
            v39.incomingEdges.push(v41);
        }
        this.rootNode = this.nodeMap.get(0);
        f0(this.rootNode, 'Missing <root> node with identifier 0');
        f0(this.rootNode.outgoingEdges.length > 0, '<root> should have children');
        f0(this.rootNode.incomingEdges.length === 0, '<root> should not have back references');
    }
    nodesWithClassName(className) {
        let v25 = [];
        for (let v35 of this.nodes) {
            if (v35.Echo === className)
                v25.push(v35);
        }
        return v25;
    }
};
function f2() {
    let v27 = generateHeapSnapshot();
    let {version, nodes, nodeClassNames, edges, edgeTypes} = v27;
    f0(version === 1, 'Heap Snapshot payload should be version 1');
    f0(v13.length, 'Heap Snapshot should have nodes');
    f0(nodeClassNames.length, 'Heap Snapshot should have nodeClassNames');
    f0(v17.length, 'Heap Snapshot should have edges');
    f0(edgeTypes.length, 'Heap Snapshot should have edgeTypes');
    return new v30(v27);
}
function f3(v35, path) {
    let v42 = v35;
    for (let v43 of path) {
        let v17 = null;
        if (v43.edge)
            v17 = v42.outgoingEdges.filter(v20 => v20.data === v43.edge);
        else if (v43.node)
            v17 = v42.outgoingEdges.filter(v20 => v20.to.className === v43.node);
        f0(v17.length === 1, 'Ambiguous or bad path component: ' + JSON.stringify(v43));
        v42 = v17[0].to;
    }
    return v42;
}
