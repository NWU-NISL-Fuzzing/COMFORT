let Var = '([a-zA-Z0-9_$]+?)';  // 变量
let Func = '([?!a-zA-Z0-9$_ ()/\\[\\].,"@\\-+«»]+?)';  // Func 可以看做功能更齐全的 Var
let Num = '([0-9+\\-]+?)';  // 数字（包括正负号）
let Mark = '([!?]*)';  // 匹配特殊符号
let All = '([\\s\\S]?)';  // 匹配所有字符，慎用
let End = '[.,]*?';  // 匹配语句结束符
let Op = '([≥≤><≠=])';  // 操作符
let Con = '(false|null|undefined|true|NaN)';  // 特殊条件

var m = new Map([['≥','>='],['≤','<='],['>','>'],['<','<'],['≠','!=='],['=','===']]);
function op_transform(op){
    return m.get(op);
}

exports.Var = Var;
exports.Func = Func;
exports.Num = Num;
exports.Mark = Mark;
exports.All = All;
exports.End = End;
exports.Op = Op;
exports.Con = Con;
exports.op_trans = op_transform;
//
// let test = /^([a-zA-Z0-9$_ ()\[\].,"@\-+«»]+?)$/i;
// let str = 'Set element to ? Call(mapperFunction, thisArg , « element, sourceIndex, source »).';
// let reg = new RegExp(`^Set ${Var} to ${Mark}${Func}${End}$`, 'i');
// console.log(reg.test(str));