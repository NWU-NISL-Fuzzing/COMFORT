// 导入基础正则
let {Var, Func, Num, Con, Op, End} = require('./baseRegex');

let bracketsMap = new Map();
let listMap = new Map();
let intrinsic = new Map();
let sentenceMap = new Map();

//对于[[]]里面的内容，他们不是对象属性或方法，如果可以根据语义对应到js代码,则转换，否则去除[[]]
bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[GetPrototypeOf]]\\(\\)`, 'i'),
    'Object.getPrototypeOf($1)'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[SetPrototypeOf]]\\(${Var}\\)`, 'i'),
    'Object.setPrototypeOf($1, $2)'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[IsExtensible]]\\(\\)`, 'i'),
    'Object.isExtensible($1)'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[PreventExtensions]]\\(\\)`, 'i'),
    'Object.preventExtensions($1)'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[GetOwnProperty]]\\((${Var})\\)`, 'i'),
    'Object.getOwnPropertyDescriptor($1,$2)'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[DefineOwnProperty]]\\(${Var}, ${Var}\\)`, 'i'),
    'Object.defineProperty($1,$2,$3)'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[HasProperty]]\\(${Var}\\)`, 'i'),
    '$1.hasOwnProperty($2)'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[OwnPropertyKeys]]\\(\\)`, 'i'),
    'Object.getOwnPropertyNames($1)'
);

bracketsMap.set(
    new RegExp(`\\[\\[(Value)]]:`,'g'),
    'value:'
);

bracketsMap.set(
    new RegExp(`\\[\\[(Writable)]]:`,'g'),
    'writable:'
);

bracketsMap.set(
    new RegExp(`\\[\\[(Enumerable)]]:`,'g'),
    'enumerable:'
);

bracketsMap.set(
    new RegExp(`${Var}\\.\\[\\[Enumerable]] is ${Con}`,'i'),
    'object.propertyIsEnumerable($1) === $2'
);

bracketsMap.set(
    new RegExp(`\\[\\[(Configurable)]]:`,'g'),
    'configurable:'
);

bracketsMap.set(
    new RegExp(`\\[\\[(Configurable)]]:`,'g'),
    'configurable:'
);

bracketsMap.set(
    new RegExp(`\\[\\[${Var}]]`, 'g'),
    '$1'
);

// %%号中的内容，如果可以找到
intrinsic.set(
    new RegExp(`%(ArrayBuffer|Array|Boolean|DataView|Date|Error|EvalError|Float32Array|Float64Array|Function|Int8Array|Int16Array|Int32Array|Map
|Number|Object|Promise|RangeError|ReferenceError|RegExp|Set|SharedArrayBuffer|String|Symbol|SyntaxError|TypeError|Uint8Array|Uint8ClampedArray|Uint16Array
|Uint32Array|URIError|WeakMap|WeakSet)Prototype%`, 'g'),
    '$1.prototype'
);

intrinsic.set(
    new RegExp(`%ArrayProto_(entries|forEach|keys|values)%`, 'g'),
    'Array.prototype.$1'
);

intrinsic.set(
    new RegExp(`%JSON(Parse|stringify)%`, 'g'),
    'JSON.$1'
);

intrinsic.set(
    new RegExp(`%ObjProto_(toString|valueOf)%`, 'g'),
    'Object.prototype.$1'
);

intrinsic.set(
    new RegExp(`%PromiseProto_then%`, 'g'),
    'Promise.prototype.then'
);

intrinsic.set(
    new RegExp(`%Promise_(all|reject|resolve)%`, 'g'),
    'Promise.$1'
);

intrinsic.set(
  new RegExp(`%${Var}%`, 'g'),
  '$1'
);

listMap.set(
    new RegExp(`«([a-zA-Z0-9_$.*, ]*)»`,'g'),
    '[$1]'
);

sentenceMap.set(
    new RegExp(`the number of actual arguments`, 'i'),
    'arguments.length'
);

sentenceMap.set(
    new RegExp(`Let new be`, 'i'),
    'Let New be'
);

sentenceMap.set(
    new RegExp(`If new does not`, 'i'),
    'If New does not'
);

sentenceMap.set(
    new RegExp(`\\(new`, 'i'),
    '(New'
);

sentenceMap.set(
    new RegExp(`new\\.`, 'i'),
    'New.'
);

sentenceMap.set(
    new RegExp(`[rR]eturn new\\.`, 'i'),
    'return New;'
);

sentenceMap.set(
    new RegExp(`\\+∞`, 'g'),
    'Infinity'
);

sentenceMap.set(
    new RegExp(`-∞`, 'g'),
    '-Infinity'
);


exports.bracketsMap = bracketsMap;
exports.listMap = listMap;
exports.intrinsic = intrinsic;
exports.sentenceMap = sentenceMap;