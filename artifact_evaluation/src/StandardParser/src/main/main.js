/*
    filename: main.js
    author: ty
    description: 给yhy提供的接口，接收一个api名称，返回一个对象列表，
    note: 运行之前必须先运行 run.js，得到 result.json，本接口将直接从该文件读出结果;
          随后对读出结果进行特殊值修正和多类型随机传参，然后返回；
 */

const path = require("path");
const fs = require("fs");
const {numberGenerator, stringGenerator, booleanGenerator,
       objectGenerator, undefinedGenerator, nullGenerator,
       functionGenerator, getARandomElementFromAList} = require("./generator");
const {deduplicate, getType} = require("./utils");

let {oneToOneApiList} = require('../../resources/oneToOneApiList');
let {oneToManyApiObject} = require('../../resources/oneToManyApiObject');
let {stringExists} = require('./utils');
// 指定结果
var resultPath = '../../resources/result_test.json'

function getValues(inputObject) {
    // 3-27修正：传递过来的参数变更为对象形式，注意这里都先转成字符串了
    let apiName = String(inputObject['name']);
    let numberOfParameter = String(inputObject['argsNumber']);

    // 4-3完善：传递过来的可能是 .call 和 .apply，需要先做一个判断
    let applyOrCallFlag = false;  // 默认为 false，表示不是apply或者call调用
    if (apiName.endsWith('.call')) {
        applyOrCallFlag = true;
        apiName = apiName.split('.call')[0];
    }
    if ( apiName.endsWith('.apply')) {
        applyOrCallFlag = true;
        apiName = apiName.split('.apply')[0];
    }

    // 首先从该文件恢复对象
    let resultSetFilePath = path.join(__dirname, resultPath);
    let resultSet = JSON.parse(fs.readFileSync(resultSetFilePath).toString());

    // 获取到该api对应结果，这里要区分是one-to-one还是one-to-many，有不同的处理情况
    let result;
    // 假如是one-to-many，那么需要进一步判断
    if (stringExists(apiName, Object.getOwnPropertyNames(oneToManyApiObject))) {
        let allResults = resultSet[apiName];
        if (allResults[numberOfParameter] === undefined) {
            result = allResults['n'];
        } else {
            result = allResults[numberOfParameter];
        }
    }
    else if (stringExists(apiName, oneToOneApiList)) {
        result = resultSet[apiName];
    }
    else {
        result = [];
    }

    // 假如是空列表，说明无法解析，那么就不变
    if (result.length === 0) {
        return result;

    }

    // 假如是非空列表，说明该API是有解析结果的：
    else {
        // 先将结果中的 'undefined', 'null', 'NaN' 恢复成该对应类型
        result.forEach(function(_object) {
            let valuesList = _object.values;
            for (let i = 0; i < valuesList.length; i++) {
                if (valuesList[i] === 'undefined') {
                    valuesList[i] = undefined;
                }
                else if (valuesList[i] === 'NaN') {
                    valuesList[i] = NaN;
                }
                else if (valuesList[i] === 'null') {
                    valuesList[i] = null;
                }
                else if (valuesList[i] === 'Infinity') {
                    valuesList[i] = Infinity;
                }
                else if (valuesList[i] === '-Infinity') {
                    valuesList[i] = -Infinity;
                }
            }
        });

        // console.log("============================");
        // console.log("从文件中读出来的结果是：");
        // console.log(result);

        // 对 this(that) 再传一个该类型和非类型值（假如已经判断出类型的话）
        let thisType = result[0].type;
        let thisValues = result[0].values;
        if (thisType !== '') {
            if (thisType === 'integer' || thisType === 'Number') {
                thisValues.push(getARandomElementFromAList([stringGenerator(), functionGenerator(),
                objectGenerator(), booleanGenerator(), undefinedGenerator(), nullGenerator()]));
                thisValues.push(numberGenerator());
            } else if (thisType === 'object') {
                thisValues.push(getARandomElementFromAList([numberGenerator(), functionGenerator(),
                stringGenerator(), booleanGenerator(), undefinedGenerator(), nullGenerator()]));
                thisValues.push(objectGenerator());
            } else if (thisType === 'string') {
                thisValues.push(getARandomElementFromAList([numberGenerator(), functionGenerator(),
                booleanGenerator(), objectGenerator(), undefinedGenerator(), nullGenerator()]));
                thisValues.push(stringGenerator());
            } else if (thisType === 'boolean') {
                this.values.push(getARandomElementFromAList([numberGenerator(), functionGenerator(),
                stringGenerator(), objectGenerator(), undefinedGenerator(), nullGenerator()]));
                thisValues.push(booleanGenerator());
            }
        }

        // 对传入参数进行多类型随机传参
        // 5-14修改：去掉之前的精简的多类型传参，应该牺牲一点测试效率，换取测试的全面性
        for (let i = 1; i < result.length; i++) {
            let valuesList = result[i].values;

            let randomValue = new Map([
                ['number', numberGenerator],
                ['string', stringGenerator],
                ['boolean', booleanGenerator],
                ['object', objectGenerator],
                ['null', nullGenerator],
                ['undefined', undefinedGenerator],
                ['function', functionGenerator],
            ]);

            // 遍历notExistsType, 将其中的各个类型传一遍即可
            randomValue.forEach(function (value, key) {
                valuesList.push(value.call());
            });
        }

        // 至此，传参全部结束，再将 values 过一遍去重
        result.forEach(function(_object) {
            let valuesList = _object.values;
            _object.values = deduplicate(valuesList);
        });

        // 最后，假如不是 call 或者 apply，那么就清空其 this 的values，因为根本测不到，也是为了提高效率
        if (applyOrCallFlag === false) {
            result[0].values = [];
        }

        return result;
    }
}

exports.getValues = getValues;


// test
console.time('test');
let a = getValues({ name: 'Number.prototype.toString', argsNumber: 1 });
console.log(a);
console.timeEnd('test');
